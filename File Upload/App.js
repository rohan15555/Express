const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: './uploads/', // Directory to save the uploaded files
  filename: function (req, file, cb) {
    // Rename the file to include the field name and the current timestamp
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage, // Using the storage engine defined above
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb); // Check file type before saving
  }
}).single('myImage'); // Handle a single file upload with the field name 'myImage'

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/; // Allowed file types
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check the file extension
  const mimetype = filetypes.test(file.mimetype); // Check the MIME type

  if (mimetype && extname) {
    return cb(null, true); // If valid, proceed with the upload
  } else {
    cb('Error: Images Only!'); // If not, return an error
  }
}

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send(err); // Handle any errors during upload
    } else {
      if (req.file == undefined) {
        res.status(400).send('No file selected!'); // Handle no file being selected
      } else {
        res.send(`File uploaded successfully! ${req.file.filename}`); // Success message with the file name
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});