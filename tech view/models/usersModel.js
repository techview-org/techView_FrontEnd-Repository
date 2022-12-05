const { pool } = require("../db.js");


class UserModel {
    static getAllUsersFromDB() {
        return pool.query('SELECT * FROM users ORDER BY user_id DESC Limit 1').then(results => { return results.rows[0] })

    };

    static getAllUsersInfoFromDB(){
        return pool.query('SELECT first_name FROM users JOIN posts ON users.user_id = posts.user_id WHERE users.user_id = $1;').then(results => {console.log(results); return results.rows[0].first_name})

    };

    static getSingleUserFromDB = (id) => {
        return pool
            .query(
                'SELECT * FROM users WHERE user_id = $1', [id]).then(results => { return results.rows[0] })

    };

    static createUserFromDb(...args){
     
        return pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1,$2,$3,$4) RETURNING * ', args).then(results => { return results.rows[0] })
    };


    static getUserFromDB = (email) => {
        return pool
            .query(
                'SELECT * FROM users WHERE email = $1', [email]).then(results => { return results.rows[0] })
    };

    static getUserFromDBByID = (id) => {
        return pool
            .query(
                'SELECT * FROM users WHERE password = $1', [id]).then(results => { return results.rows[0] })
    };
}

function getCurrentDateJson() {
    return new Date().toJSON();
}


module.exports = UserModel;