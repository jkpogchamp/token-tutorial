const inputValidator = require('../utils/inputValidationLogin');
const userService = require('../services/userService');

const loginController = (request, response) => {
  const { username, password } = request.body;
  if (inputValidator(username, password)) {
    response.status(400).send(inputValues.message);
  }
  userService
    .login(username, password)
    .then(token => response.status(200).json(token))
    .catch(error => response.status(401).json({ message: error.message }));
};

module.exports = loginController;
