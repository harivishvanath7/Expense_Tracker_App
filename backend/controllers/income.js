const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  // Destructuring
  const { title, amount, category, description, date } = req.body;

  const income = new IncomeSchema({
    title,
    amount,
    category,
    description,
    date
  });

  console.log(income);

  try {
    // validations
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required !!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be a positive number." });
    }
    await income.save()
    res.status(200).json({message:"Income Added"});
  } catch (error) {
    console.log(error);
  }
};
