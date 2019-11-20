const express = require('express');
const path = require('path');

const registrationController = require('../controllers/registrationController');
const loginController = require('../controllers/loginController');
const secretController = require('../controllers/secretController');

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect('/register');
});

router.get('/register', (request, response) => {
  response.sendFile(
    path.resolve(__dirname + '/../../views/register/register.html')
  );
});

router.get('/login', (request, response) => {
  response.sendFile(path.resolve(__dirname + '/../../views/login/login.html'));
});

router.get('/home', (request, response) => {
  response.sendFile(path.resolve(__dirname + '/../../views/home/home.html'));
});

router.get('/secret', secretController);

router.post('/register', registrationController);

router.post('/login', loginController);

module.exports = router;
