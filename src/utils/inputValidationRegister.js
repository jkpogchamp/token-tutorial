const inputValidator = (username, password) => {
  if (!username && !password) {
    return new Error('Username and password are required.');
  } else if (!username) {
    return new Error('Username is required');
  } else if (!password) {
    return new Error('Password is required');
  } else if (password.length < 8) {
    return new Error('Password should be at least 8 characters');
  }
  return false;
};
module.exports = inputValidator;
