import express from 'express';

import {
  getAllIncomes,
  createIncome,
  getIncomeById,
  updateIncome,
  deleteIncome,
} from '../controllers/Incomes.js';

const router = express.Router();
// Income
router.get('/', getAllIncomes);
router.get('/:id', getIncomeById);
router.post('/', createIncome);
router.patch('/:id', updateIncome);
router.delete('/:id', deleteIncome);

export default router;
