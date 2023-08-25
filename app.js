const express = require("express");
const app = express();
const port = 7000;

// Menggunakan hbs sebagai view engine
app.set("view engine", "hbs");

// Mengatur folder untuk static assets seperti CSS, JavaScript, dll.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// dummy data
const dataProject = [
  {
    Id: 0,
    name: "Project 1",
    startDate: "15-05-2023",
    endDate: "15-06-2023",
    Duration: "1 bulan",
    description: "Bootcamp sebulan gaes",
    react: true,
    java: true,
    nodejs: true,
    SocketIo: true,
  },
  {
    Id: 0,
    name: "Project 1",
    startDate: "15-05-2023",
    endDate: "15-06-2023",
    Duration: "1 bulan",
    description: "Bootcamp sebulan gaes",
    react: true,
    java: true,
    nodejs: true,
    socketio: true,
  },
];

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
  res.render("myproject", { dataProject });
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

  dataProject.push(data);
  res.redirect("/myproject");
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
