const mongoose = require("mongoose");

const calculatorSchema = new mongoose.Schema({
  val1: {
    type: Number,
    required: true,
  },
  val2: {
    type: Number,
    required: true,
  },
  ans: {
    type: Number,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
});

const CalculatorModel = mongoose.model("calculator", calculatorSchema);

module.exports = { CalculatorModel };
