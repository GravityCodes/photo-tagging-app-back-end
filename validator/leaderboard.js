const { body } = require("express-validator");

const player = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 25 })
    .withMessage("Name cannot exceed 25 characters")
    .trim(),
  body("time").isNumeric().withMessage("Time must be a number"),
];

module.exports = { player };
