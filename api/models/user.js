var crypto = require('crypto');
var pg = require("pg");
var path = require('path');
var connectionString = require(path.join(__dirname, '../', 'config'));
var AUTHOR_ID = 168;

hash = function(password) {
    // TODO ganti yang lebih secure
    return crypto.createHash('sha1').update(password).digest('base64');
}

exports.register = function(name, email, password, birthday, callback) {
    pg.connect(connectionString, function(err, client, done) {
        // insert user
        client.query("INSERT INTO mille_users(user_name, user_email, user_password, user_birthday, user_status, created_by, created_time) SELECT $1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP",
            [name, email, hash(password), birthday, 0, AUTHOR_ID], function(err, result) {
                // handle error
                console.log(err);
        });

        // get user
        var query = client.query("SELECT user_name, user_email, user_birthday, user_status FROM mille_users WHERE user_email = $1",
            [email], function(err, result) {
                // handle error
                console.log(err);
        });
        query.on('row', function(row, result) {
            result.addRow(row);
        });
        query.on('end', function(result) {
            client.end();
            console.log(result);
            return "success";
        });
    });
}

exports.get = function(id, callback) {
    pg.connect(connectionString, function(err, client, done) {
        // get user
        var query = client.query("SELECT user_name, user_email, user_birthday, user_status FROM mille_users WHERE user_id = $1",
            [id], function(err, result) {
                // handle error
                console.log(err);
        });
        query.on('row', function(row, result) {
            result.addRow(row);
        });
        query.on('end', function(result) {
            client.end();
            console.log(result);
            return result;
        });
    });
}

exports.all = function(callback) {
    pg.connect(connectionString, function(err, client, done) {
        // get users
        var query = client.query("SELECT user_id, user_name, user_email, user_birthday, user_status, user_lastlogin FROM mille_users SORT BY user_id ASC",
            function(err, result) {
                // handle error
                console.log(err);
        });
        query.on('row', function(row, result) {
            result.addRow(row);
        });
        query.on('end', function(result) {
            client.end();
            console.log(result);
            return result;
        });
    });
}

exports.update = function(id, oldPassword, newPassword, birthday, callback) {
    pg.connect(connectionString, function(err, client, done) {
        // get password
        var query = client.query("SELECT user_password FROM mille_users WHERE user_id = $1",
            [id], function(err, result) {
                // handle error
                console.log(err);
        });
        query.on('row', function(row, result) {
            if (row.user_password == hash(oldPassword)) {
                // update user
                client.query("UPDATE mille_users SET user_password = $1, user_birthday = $2 WHERE user_id = $1",
                    function(err, result) {
                        // handle error
                        console.log(err);
                });
            }
            result.addRow(row);
        });
        query.on('end', function(result) {
            client.end();
            console.log(result);
            return "success";
        });
    });
}

exports.verify = function(email, verificationCode, callback) {
    // TODO verify email address, set status menjadi 1
    // bentuk verification code (?)
}

exports.authenticate = function(email, password, callback) {
    // TODO create session, set lastlogin
    // cek kalo status nya 1 baru bisa login, kalo 0 harus verifikasi dulu
    // code masih template
    db.fetch({email:email}, function(err, docs) {
        if (err) {
            return callback(err);
        }
        if (docs.length === 0) {
            return callback();
        }
        user = docs[0];

        if (user.password === hash(password)) {
            callback(null, docs[0]);
        } else {
            callback();
        }
    });
}
