const multer = require('multer');
const sharpMulter = require('sharp-multer');

const newFilenameFunction = (og_filename, options) => {
  console.log(options);
  const newname =
    og_filename.split(".").slice(0, -1).join("-").split(" ").join("-") +
    `${options.useTimestamp ? "-" + Date.now() : ""}` +
    "." +
    options.fileFormat;
  return newname;
};

const storage = sharpMulter({
  destination: (req, file, callback) => {
    callback(null, 'controllers/images');
  },
  filename: newFilenameFunction,
  imageOptions:  {
    fileFormat:  "webp",
    useTimestamp:  true,
    quality:  80,
    resize:  { width:  206, height:  260, resizeMode:  "inside"  },
    }
});

module.exports = multer({storage: storage}).single('image');