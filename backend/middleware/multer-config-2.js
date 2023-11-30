// const multer = require('multer');
// const sharp = require('sharp');

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'controllers/images');
//   },
//   filename: async (req, file) => {
//     const name = file.originalname.split(' ').join('_') + Date.now() + '.webp';
//     await sharp(file)
//     .resize(800, 600) // Dimensions (width, height)
//     .webp({ quality: 80 })
//     .toFile('controllers/images' + name)
//     // callback(null, name + Date.now() + '.webp');
//   }

// });

// module.exports = multer({storage: storage}).single('image');