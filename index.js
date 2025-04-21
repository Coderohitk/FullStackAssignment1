const express = require("express");
const path = require("path");
const sessions = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

// Setup Express app
const app = express();
const port = process.env.PORT || "8888";
app.use(cors());

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// ✅ Serve uploaded images from /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable session support
app.use(
  sessions({
    secret: process.env.SESSIONSECRET,
    name: "MyUniqueSessID",
    saveUninitialized: false,
    resave: false,
    cookie: {}
  })
);

// Use routes
app.use("/project", require("./components/Project/routes"));
app.use("/user", require("./components/User/routes"));
app.use("/skill", require("./components/skill/routes"));

// Default homepage
app.get("/", async (req, res) => {
  res.render("index", { username: req.session.user });
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Listening on http://localhost:${port}`);
});
