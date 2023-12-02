const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");
const { ReadableStreamBYOBRequest } = require('node:stream/web');

router.get("/", (req, res) => {
    
    
})


router.post("/reg", (req, res) => {
    userController.add(req); 
    res.redirect("/login")
})

router.post("/log", (req, res) => {
    userController.verify(req);
    res.redirect("/")
})

router.put("/", (req, res) => {

})

module.exports = router;