const userModel = require('../config/db-config');
var User = (user) => {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.phone = user.email;
    this.password = user.password;
    this.role = user.role ? user.role : "admin";
    this.status = user.status ? user.status : "active"
    this.created_at = new Date();
    this.updated_at = new Date();
}

User.getAllUsers = (result) => {
    userModel.query('SELECT * FROM users', (error, resData) => {
        if (error) {
            console.log('Error while fetching user data.');
            result(null, error);
        } else {
            console.log('user data fetched successfully.')
        }
    })
}

module.exports = User;