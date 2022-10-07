const express = require("express");
const ctrl = require("../../controllers/players");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");


router.get("/", ctrlWrapper(ctrl.getAll));

router.patch('/:id',  ctrlWrapper(ctrl.updatePlayer))

module.exports = router;
 