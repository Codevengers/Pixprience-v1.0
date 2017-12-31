  // Sets up the Express App
  var express = require("express");
  var bodyParser = require("body-parser");
  var exphbs = require("express-handlebars");
  var app = express();
  var port = process.env.PORT || 8080;

  // Requiring our models for syncing
  var db = require("./models");

  // Sets up the Express app to handle data parsing
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  // Set Handlebars as the default templating engine.
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  // Serve static content for the app from the "public" directory in the application directory.
  app.use(express.static("public"));
  // app.use(express.static("views"));
  
  // Routes
  // =============================================================
  require("./controllers/loginController.js")(app);

  // Syncing our sequelize models and then starting our Express app
  // =============================================================
  db.sequelize.sync({ force: false }).then(function() {
    app.listen(port, function() {
      console.log("App listening on PORT " + port);
    });
  });
