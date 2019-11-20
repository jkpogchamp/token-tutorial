const inputValidation = (username, password) => {
  if (!username && !password) {
    return new Error('All fileds are required.');
  } else if (!username) {
    return new Error('Username is required.');
  } else if (!password) {
    return new Error('Password is required.');
  }
  return false;
};

module.exports = inputValidation;
