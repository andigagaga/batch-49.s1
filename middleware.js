// const multer = require('multer');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const UploadFile = (req, res, next) => {
//   upload.single('file')(req, res, async (err) => {
//     if (err) {
//       // Handle error
//       return res.status(500).json({ error: 'File upload failed.' });
//     }

//     try {
//       const { name, startDate, endDate, description } = req.body;
//       const uploadedFile = req.file;

//       const duration = countDuration(startDate, endDate);

//       const data = {
//         name,
//         startDate,
//         endDate,
//         Duration: duration,
//         description,
//         react: Boolean(req.body.react),
//         java: Boolean(req.body.java),
//         nodejs: Boolean(req.body.nodejs),
//         socketio: Boolean(req.body.socketio),
//       };

//       dataProject.push(data);

//       res.redirect('/index');
//     } catch (error) {
//       // Handle error
//       return res.status(500).json({ error: 'Project addition failed.' });
//     }
//   });
// };

// function countDuration(d1, d2) {
//   // Implementasi hitung durasi
// }

// module.exports = { UploadFile };
