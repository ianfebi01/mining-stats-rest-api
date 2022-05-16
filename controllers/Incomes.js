import income from '../models/incomeModel.js';
// GET all income
export const getAllIncomes = async (req, res) => {
  try {
    const Incomes = await income.findAll();
    res.json(Incomes);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// GET income By ID
export const getIncomeById = async (req, res) => {
  try {
    const Incomes = await income.findAll({
      where: { id: req.params.id },
    });
    res.json(Incomes[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//  Create new income
export const createIncome = async (req, res) => {
  try {
    await income.create(req.body);
    res.json({
      message: 'New income created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Update income
export const updateIncome = async (req, res) => {
  try {
    await income.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: 'New income updated' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//  Delete income
export const deleteIncome = async (req, res) => {
  try {
    await income.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Income deleted' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
