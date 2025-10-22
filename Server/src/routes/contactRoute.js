const express = require('express');
const {submitContactForm} = require('../controllers/submitContactForm')

const router = express.Router();

router.post('/', submitContactForm);

module.exports = router;
