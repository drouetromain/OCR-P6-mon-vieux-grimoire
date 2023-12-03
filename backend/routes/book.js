const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();
const bookCtrl = require('../controllers/book');
const ratingCtrl = require('../controllers/rating');

router.get('/books', bookCtrl.getAllBooks);
router.get('/books/bestrating', ratingCtrl.getBestRating);
router.get('/books/:id', bookCtrl.getOneBook);

router.post('/books', auth, multer, bookCtrl.createBook);
router.post('/books/:id/rating', auth, multer, ratingCtrl.modifyRating);

router.put('/books/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/books/:id', auth, bookCtrl.deleteBook);

module.exports = router;