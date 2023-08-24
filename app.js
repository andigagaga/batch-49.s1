const express = require("express");
const app = express();
const port = 7000;

// Menggunakan hbs sebagai view engine
app.set("view engine", "hbs");

// Mengatur folder untuk static assets seperti CSS, JavaScript, dll.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// Menambahkan rute untuk berkas index.hbs
app.get("/index", home);
app.get("/myproject", myproject);
app.get("/formMyproject", formMyproject);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/projectDetail/:id", projectDetail);
app.post("/formMyproject", addProject);

// function route

// home
function home(req, res) {
  res.render("index");
}

// myproject
function myproject(req, res) {
  res.render("myproject");
}

// formproject
function formMyproject(req, res) {
  res.render("formMyproject");
}

// add project
function addProject(req, res) {
  const {
    name,
    startDate,
    endDate,
    description,
    react,
    java,
    nodejs,
    socketio,
  } = req.body;
  console.log(name);
  console.log(startDate);
  console.log(endDate);
  console.log(description);
  console.log(react);
  console.log(java);
  console.log(nodejs);
  console.log(socketio);
}

// contact
function contact(req, res) {
  res.render("contact");
}

// testimonial
function testimonial(req, res) {
  res.render("testimonial");
}

// project detail
function projectDetail(req, res) {
  const { id } = req.params;

  const data = {
    id: id,
    nama: "dumbways web apps 2023",
  };
  res.render("projectdetail", { data });
}

// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
