const express = require("express");
const { summarycontroller, paragraphcontroller, chatbotcontroller, pycontroller, imagecontroller } = require("../controller/openaicontroller");

const router = express.Router();


router.route('/summary').post(summarycontroller);
router.route('/paragraph').post(paragraphcontroller);
router.route('/chatbot').post(chatbotcontroller);
router.route('/code-converter').post(pycontroller);
router.route('/image-generate').post(imagecontroller);




module.exports = router;