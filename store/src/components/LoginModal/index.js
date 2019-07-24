import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './style.css';
import API from '../../utils/API';
import CartImage from '../../assets/images/cart.png';

export default class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      email: '',
      message: '',
      customerId: 0,
      selected: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // set state
    this.setState({
      message: '',
      email: '',
      selected: localStorage.getItem('selected')
    });
  }

  openModal() {
    this.setState({ visible: true });
  }

  closeModal() {
    this.setState({ visible: false });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let id = '';
    const email = this.state.email;
    const selected = localStorage.getItem('selected');

    // Get the customer id
    API.getCustomerByEmail(this.state.email)
      .then(res => {
        id = res.data.customers[0].customer_id;

        // Put id in local storage so the Cart page knows whose list to display
        localStorage.setItem('customerId', id);

        // if items were selected, store them in the db shopping_list table
        if (selected !== undefined && selected !== '') {
          const list = selected.split(',');

      API.createShoppingList("shopping_list", {
          customer_id: id,
          list: list
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));

          // Hide the modal & go to the Cart page
          this.setState({ visible: false });
          this.props.goToCart();
        }
      })
      .catch(err => {
        this.setState({ message: "Invalid customer email." });
        console.log(err);
      });
  }

  
  render() {
    return (
      <section>
        <Modal
          visible={this.state.visible}
          onClickAway={() => this.closeModal()}
        >
          <a
            className="close"
            href="javascript:void(0);"
            onClick={() => this.closeModal()}
          >
            X
          </a>
          <div className=".children">{this.props.children}</div>
          <form onSubmit={this.handleSubmit}>
            Email:&nbsp;
            <input
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              required={true}
            />
            &nbsp;
            <input type="submit" value="Submit" />
          </form>
          <p>{this.state.message}</p>
        </Modal>
        <button onClick={() => this.openModal()}>
          <img id="cart-image" src={CartImage} alt="shopping cart" />
        </button>
      </section>
    );
  }
}
