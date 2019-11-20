const verifyJWT = require('../utils/verifyJWT');

const secretController = (request, response) => {
  const bearerToken = request.headers.authorization;
  verifyJWT(bearerToken)
    .then(decoded => {
      response.status(200).send({ message: 'az én kicsi titkom' });
    })
    .catch(error => response.status(401).send({ message: error.message }));
};

module.exports = secretController;
