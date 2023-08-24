const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/add', (req, res) => {
  res.render('add_project');
});

app.get('/project/:id', (req, res) => {
  const projectId = req.params.id;
  // Contoh data proyek, biasanya Anda akan mengambil dari database
  const projectData = {
    id: projectId,
    title: 'Contoh Proyek',
    description: 'Ini adalah contoh proyek',
  };
  res.render('detail_project', { project: projectData });
});

app.get('/contact', (req, res) => {
  res.render('contact_me');
});

app.post('/add', (req, res) => {
  // Di sini Anda dapat melakukan sesuatu dengan data yang dikirim melalui POST
  console.log('Data proyek yang ditambahkan:', req.body);
  res.redirect('/add'); // Redirect kembali ke halaman tambah proyek
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
