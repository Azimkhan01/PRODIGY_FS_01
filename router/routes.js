const express = require("express")
const router = express.Router();

const {home} = require("../controller/home");
const {register} = require("../controller/register");
const {signup} = require("../controller/signup");
const {handleRegisteredUser} = require("../controller/handleRegisteredUser");

router.route("/").get(home);
router.route("/register").get(register);
router.route("/signup").get(signup);
router.route("/register").post(handleRegisteredUser);


module.exports = {router}