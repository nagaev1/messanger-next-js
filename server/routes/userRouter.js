const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")

router.get("/", (req, res) => {
    
    
})

router.post("/", (req, res) => {
    res.send('hui')
    userController.add()
    res.redirect("/")
})

router.put("/", (req, res) => {

})

module.exports = router;