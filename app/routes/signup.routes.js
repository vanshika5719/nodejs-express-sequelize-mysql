const express = require("express");
const router = express.Router();

const controller = require("../controllers/signup.controller");

router.get("/home", controller.home);
router.post("/signup", controller.signup);
router.post("/login", controller.login);


module.exports = router;