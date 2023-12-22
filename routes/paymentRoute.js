const express = require("express")
const router = express.Router();
const {isAuthenticatedUser}  = require("../middlewares/auth")
const { processPayment, sendStripeApiKey } = require("../controller/paymentController");


router.route("/payment/process").post( processPayment);
router.route("/stripeapikey").get( sendStripeApiKey);


module.exports = router;