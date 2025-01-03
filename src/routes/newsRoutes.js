const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// TODO: Question 4 - Compléter les routes
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.post('/', newsController.createNews);
// (Optionnel) Modifier un article existant
router.put('/:id', newsController.updateNews);

// (Optionnel) Supprimer un article
router.delete('/:id', newsController.deleteNews);
module.exports = router;