const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")

router.get("/", (req, res) => {
    res.send('hui')
    userController.add()
})

router.post("/", (req, res) => {

})

router.put("/", (req, res) => {

})

module.exports = router;