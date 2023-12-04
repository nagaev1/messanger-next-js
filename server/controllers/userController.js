
const userModel = require("../models/usersModel");
const hashHelper = require("../helpers/hashHelper");
const { log } = require('console');

exports.add = (req, res) => {
    username = req.body.login
    email = req.body.email
    password = req.body.pass
    userModel.useCheck(email, username)
        .then(result => {
            if (result == "in use") {
                res.status(403).send("email is already in use")
                log('in use')
            }else {
                hashHelper.scryptHash(password)
                .then(hash => {userModel.add(username, email, hash)
                .then(
                    result => {
                        res.status(201).json({message: "success"})
                        log("created")
                    }, err => res.status(500).json({message: "server error"})
                )
                })
            }
        })
    
    
}

exports.verify = (req, res) => {
    email = req.body.email
    password = req.body.pass
    userModel.getByEmail(email)
    .then(result => {hashHelper.scryptVerify(password, result.password).then(bab => console.log(bab))
    })
}