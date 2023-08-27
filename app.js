const express = require("express");
const app = express();
const port = 7000;

// Menggunakan hbs sebagai view engine
app.set("view engine", "hbs");

// Mengatur folder untuk static assets seperti CSS, JavaScript, dll.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
// Dummy data
let dataProject = [
  {
    Id: 1,
    name: "Project 1",
    startDate: "15-05-2023",
    endDate: "15-06-2023",
    Duration: "1 bulan",
    description: "Bootcamp sebulan gaes1",
    react: true,
    java: true,
    nodejs: true,
    socketio: true,
  },
  {
    Id: 2,
    name: "Project 2",
    startDate: "15-05-2023",
    endDate: "15-06-2023",
    Duration: "1 bulan",
    description: "Bootcamp sebulan gaes1",
    react: true,
    java: true,
    nodejs: true,
    socketio: true,
  },
];

// Fungsi untuk menghitung durasi
function countDuration(startDate, endDate) {
  // ... implementasi hitung durasi
}

// route get
app.get("/index", home);
app.get("/myproject", myproject);
app.get("/formMyproject", formMyproject);
app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/projectDetail/:id", projectDetail);
app.get("/deleteProject/:id", deleteProject);
app.get("/editProeject/:id", editProject);

// route post
app.post("/formMyproject", addProject);
app.post("/updateProject/:id", updateProject);

// home
function home(req, res) {
  res.render("index", { dataProject });
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

  const duration = countDuration(startDate, endDate);

  const data = {
    Id: new Date().getTime(),
    name,
    startDate,
    endDate,
    Duration: duration,
    description,
    react,
    java,
    nodejs,
    socketio,
  };

  dataProject.push(data); // Menambahkan data baru ke dataProject

  res.redirect("/index");
}

// untuk duration
function countDuration(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diff = date2 - date1;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  if (days < 7) {
    return `${days} Hari`;
  }
  if (weeks < 4) {
    return `${weeks} Minggu`;
  }
  if (months < 12) {
    return `${months} Bulan`;
  }
  return `${years} Tahun`;
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

  const selectedProject = dataProject.filter((item) => {
    return item.Id == id;
  })

  res.render("projectDetail", { data: selectedProject[0] });
}

function deleteProject(req, res) {
  const { id } = req.params;

  dataProject = dataProject.filter((item) => {
    return item.Id != id;
  });

  // dataProject.splice(id, 1);
  res.redirect("/index");
}

function editProject(req, res) {
  const { id } = req.params;

  const data = dataProject.filter((item) => item.Id == id);
  console.log(data);
  res.render("editProject", { data: data[0] });
}

function updateProject(req, res) {
  const { id } = req.params;

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

  const duration = countDuration(startDate, endDate);

  const newUpdate = {
    Id: id,
    name: name,
    startDate: startDate,
    endDate: endDate,
    description: description,
    Duration: duration,
    react: react,
    java: java,
    nodejs: nodejs,
    socketio: socketio,
  };
  console.log(newUpdate);
  dataProject = dataProject.filter((item) => {
    return item.Id != id;
  });
  dataProject.push(newUpdate);

  res.redirect("/index");
}

// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
