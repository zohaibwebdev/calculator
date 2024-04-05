const { Router } = require("express");
const {
  getAllCalculatorHistory,
  addCalculatorHistory,
  deleteCalculatorHistory,
} = require("../controller/calculator.controller.cjs");

const calculatorRouter = Router();

calculatorRouter.get("/histroy/all", getAllCalculatorHistory);
calculatorRouter.post("/add", addCalculatorHistory);
calculatorRouter.delete("/delete/:id", deleteCalculatorHistory);

module.exports = { calculatorRouter };
