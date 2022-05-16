import cost from '../models/costModel.js';

// GET all income
export const getAllCosts = async (req, res) => {
  try {
    const Costs = await cost.findAll();
    res.json(Costs);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// GET income By ID
export const getCostById = async (req, res) => {
  try {
    const Costs = await cost.findAll({
      where: { id: req.params.id },
    });
    res.json(Costs[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//  Create new income
export const createCost = async (req, res) => {
  try {
    await cost.create(req.body);
    res.json({
      message: 'New cost created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Update income
export const updateCost = async (req, res) => {
  try {
    await cost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: 'New cost updated' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//  Delete income
export const deleteCost = async (req, res) => {
  try {
    await cost.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Cost deleted' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
