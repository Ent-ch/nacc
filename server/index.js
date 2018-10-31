const express = require('express');
const Jimp = require('jimp');
const fs = require('fs');

const { upload, publicImgDir, getImgName, getFullImgName } = require('./multer');
const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static('docs'));

app.post('/upload', upload.single('foto'), function (req, res, next) {
  const currFile = req.file;
  const locFile = `${currFile.destination}${currFile.filename}`;
  const insertedId = 0;

  Jimp.read(locFile, (err, pict) => {
    if (err) throw err;

    pict.resize(300, Jimp.AUTO) // resize
      .quality(60) // set JPEG quality
      .write(`${publicImgDir}${getImgName(insertedId)}`); // save
  });

    res.json({insertedId});
});

app.get('/image/:id', function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  const retData = {
    url: getFullImgName(id),
    imaggaTags: {},
    created: '',
  };

  res.json({...retData, imaggaTags: []});
});

app.get('/latest', function (req, res, next) {
  const data = [];
  res.json(data.map(el => ({...el, url: getFullImgName(el.id)})));
});

console.log(`App running on port ${PORT}`);
app.listen(PORT);
