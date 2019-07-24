let express = require("express");

// Set the port of our application
let PORT = process.env.PORT || 3001;

let app = express();

// Parse request body as JSON (allows you to interact forms)
app.use(
  express.urlencoded({
    extended: true
  })
);

// enable parse of json
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("store/build"));
}

// Import routes and give the server access to them.
let routes = require("./controllers/controller.js");
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
