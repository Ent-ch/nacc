const multer  = require('multer');
const path = require('path');

const uploadDir = 'uploads/';
const publicImgDir = 'docs/img/uploads/';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const getImgName = id => `img300_${id}.jpg`;
const getFullImgName = id => `img/uploads/${getImgName(id)}`;

const upload = multer({storage: storage, fileFilter: function (req, file, cb) {
  const filetypes = /jpeg|jpg/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb("Error: File upload only supports the following filetypes - " + filetypes);
}});

module.exports = { upload, publicImgDir, getImgName, getFullImgName };
