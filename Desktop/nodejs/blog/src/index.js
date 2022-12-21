import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// handle static file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

//duoi dang form HTML thì có  middleware xu ly tu form
app.use(express.urlencoded({ extended: true }));
// duoi dang gui tu javascript len
app.use(express.json());

// XMLHttpRequest, fetch, axios

// HTTP logger
app.use(morgan("combined"));

// Template enginee
// app.engine("handlebars", handlebars());
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body);

  res.send("");
});

// ---
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
