
const userModel = require("../models/usersModel");
const hashHelper = require("../helpers/hashHelper");
const { log } = require('console');

exports.add = (req, res) => {
    username = req.body.login
    log(username)
    email = req.body.email
    password = req.body.pass
    hashHelper.scryptHash(password).then(hash => {
        userModel.add(username, email, hash).then(result => console.log('success'))
    })
    
}