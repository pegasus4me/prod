require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = bcrypt.genSaltSync(parseFloat(process.env.JWT_SALT_ROUNDS));
const jwt = require('jsonwebtoken');

// --------------------
//     user Model
// --------------------

module.exports = (_db) => {
  db = _db;
  return userModel;
};

class userModel {
  

  static async getByUserId(id) {
    const query = 'SELECT * FROM `api_db_track`.`users` WHERE id = ?;';
    const response = await db.query(query, [id]);
    return response[0];
  }

  static async getByEmailOrUsername(data) {
    const query =
      'SELECT * FROM `api_db_track`.`users` WHERE (email = ? OR username = ?)';
    const response = await db.query(query, [data.email, data.username]);

    return response[0];
  }

  static async authenticateUser(data) {
    let existingUser = await userModel.getByEmailOrUsername(data);
    let token = jwt.sign(
      { userId: existingUser[0].id },
      process.env.JWT_SECRET,
    );

    return token;
  }

  static async registerUser(data) {
    const passwordHashed = await bcrypt.hash(data.password, saltRounds);

    const response = await db.query(
      'INSERT INTO `api_db_track`.`users` (`username`, `password`, `email`, `created_at`,`timezone`, `role`) VALUES (?,?, ?, NOW(), ?, "client")',
      [data.username, passwordHashed, data.email, data.timezone],
    );
    return response;
  }

  static async updatePassword(newPassword, id) {
    let query =
      'UPDATE `api_db_track`.`users` SET `password`= ?,`updated_at`=NOW() WHERE `id` =?;';
    const passwordHashed = await bcrypt.hash(newPassword, saltRounds);
    const response = await db.query(query, [passwordHashed, id]);

    return response;
  }
  
  static async testCredentials(payloadPassword, hashedPasword) {
    let testPasswordResponse = bcrypt.compareSync(
      payloadPassword,
      hashedPasword,
    );

    return testPasswordResponse;
  }

  static async updateUser(data, id) {
    let query =
      'UPDATE `api_db_track`.`users` SET `username`= ?, `email`=?, `timezone`=?, `updated_at`=NOW() WHERE `id` =?;';

    const response = await db.query(query, [
      data.username,
      data.email,
      data.timezone,
      id,
    ]);

    return response;
  }

}
