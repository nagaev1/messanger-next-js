const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")

router.get("/", (req, res) => {
    
    
})


router.post("/reg", (req, res) => {
    userController.add()    
    res.redirect("/login")
})

router.post("/log", (req, res) => {
    res.redirect("/")
})

router.put("/", (req, res) => {

})

module.exports = router;