const express = require('express');
const router = express.Router();
const controller = require('../controllers/characterController.js');

router.get('/characters', controller.index);
router.get('/characters/:id', controller.show);
router.post('/characters', controller.create);
router.put('/characters/:id', controller.update);
router.delete('/characters/:id', controller.delete);

module.exports = router;
