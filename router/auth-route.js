const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-cont");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
router.route("/").get(authController.home);

router.route("/register").post(validate(signupSchema),authController.register);

router.route("/login").post(authController.login);

module.exports = router;