const connection = require('./connecttodb');
const token = require('../utils/createJWT');

const register = (username, password) =>
  new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM users WHERE username=?',
      [username],
      (error, rows) => {
        if (error) {
          reject(error);
        } else if (rows[0]) {
          reject(new Error('Username already exists'));
        } else {
          connection.query(
            'INSERT INTO users(username, password) VALUES(?,?)',
            [username, password],
            error => {
              if (error) {
                reject(error);
              } else {
                resolve({ message: 'Registration was succesful' });
              }
            }
          );
        }
      }
    );
  });

const login = (username, password) =>
  new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM users WHERE username=?',
      [username],
      (err, rows) => {
        if (err) {
          reject(err);
        } else if (!rows[0]) {
          reject(new Error('Username or password is incorrect.'));
        } else if (rows[0].password !== password) {
          reject(new Error('Username or password is incorrect.'));
        } else {
          const userId = rows[0].id;
          resolve(token(userId, username));
        }
      }
    );
  });

module.exports = { register, login };
