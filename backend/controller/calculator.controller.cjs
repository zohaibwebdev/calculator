const { CalculatorModel } = require("../model/calculator.model.cjs");

const getAllCalculatorHistory = async (req, res) => {
  const allCalculatorData = await CalculatorModel.find();

  res.json({
    history: allCalculatorData,
  });
};
const addCalculatorHistory = async (req, res) => {
  const { val1, val2, ans, operation } = req.body;
  const calculatorData = new CalculatorModel({
    val1,
    val2,
    ans,
    operation,
  });
  await calculatorData.save();
  return res.json({ dataAdded: true });
};
const deleteCalculatorHistory = async (req, res) => {
  const { id } = req.params;
  await CalculatorModel.deleteOne({ _id: id });
  return res.json({ dataDeleted: true });
};
module.exports = {
  getAllCalculatorHistory,
  addCalculatorHistory,
  deleteCalculatorHistory,
};
