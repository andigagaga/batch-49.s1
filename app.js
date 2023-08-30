const express = require("express");
const app = express();
const path = require("path"); // Import module path
const port = 7000;
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

// Menggunakan hbs sebagai view engine
app.set("view engine", "hbs");

// Mengatur lokasi folder views
app.set("views", path.join(__dirname, "src", "views"));

// Mengatur folder untuk static assets seperti CSS, JavaScript, dll.
app.use(express.static(path.join(__dirname, "src", "public")));

app.use(express.urlencoded({ extended: false }));

// Dummy data

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
// function home(req, res) {
//   res.render("index", { dataProject });
// }

async function home(req, res) {
  try {
    const query = `SELECT id, name, start_date, end_date, duration, description, react, java, node_js, socket_io,"createdAt", "updatedAt"
    FROM public.projets;`;
    let object = await sequelize.query(query, { type: QueryTypes.SELECT });

    let daProjectBase = object.map((item) => {
      return {
        ...item,
        duration: countDuration(item.start_date, item.end_date),
      };
    });

    res.render("index", { dataProject: daProjectBase });
  } catch (err) {
    console.log(err);
  }
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
async function addProject(req, res) {
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
  // const image = "image.png"

  // Mengubah nilai string kosong menjadi false jika checkbox tidak dipilih
  const reactjsCheck = react === "true" ? true : false;
  const javaCheck = java === "true" ? true : false;
  const nodeJsCheck = nodejs === "true" ? true : false;
  const socketioCheck = socketio === "true" ? true : false;

  await sequelize.query(`INSERT INTO "projets"(
    name, start_date, end_date, duration, description, react, java, node_js, socket_io, "createdAt", "updatedAt")
    VALUES ('${name}', '${startDate}', '${endDate}', '${duration}', '${description}','${reactjsCheck}','${javaCheck}', '${nodeJsCheck}', '${socketioCheck}', NOW(), NOW());`);

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
async function projectDetail(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM "projets" WHERE id=${id}`;
  const object = await sequelize.query(query, { type: QueryTypes.SELECT });
  console.log(object);

  res.render("projectDetail", { data: object[0] });
}

async function deleteProject(req, res) {
  try {
    const { id } = req.params;

    await sequelize.query(`DELETE FROM "projets" WHERE id=${id}`);

    res.redirect("/index");
  } catch (error) {
    console.log(error);
  }
}

async function editProject(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM "projets" WHERE id=${id}`;
  const object = await sequelize.query(query, { type: QueryTypes.SELECT });
  let daProjectBase = object.map((item) => {
    return {
      ...item,
      duration: countDuration(item.start_date, item.end_date),
    };
  });
  
  res.render("editProject", { data: daProjectBase[0] });
}

async function updateProject(req, res) {
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

  // Mengubah nilai string kosong menjadi false jika checkbox tidak dipilih
  const reactjsCheck = react === "true" ? true : false;
  const javaCheck = java === "true" ? true : false;
  const nodeJsCheck = nodejs === "true" ? true : false;
  const socketioCheck = socketio === "true" ? true : false;

  await sequelize.query(`UPDATE "projets"
	SET name='${name}', start_date='${startDate}', end_date='${endDate}', duration='${duration}', description='${description}', react='${reactjsCheck}', java='${javaCheck}', node_js='${nodeJsCheck}', socket_io='${socketioCheck}', "createdAt"=NOW(), "updatedAt"= NOW()
	WHERE id = ${id};`)
  

  res.redirect("/index");
}

// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
