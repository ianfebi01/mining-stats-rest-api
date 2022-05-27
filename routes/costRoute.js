import express from 'express';

import {
  getAllCosts,
  createCost,
  getCostById,
  updateCost,
  deleteCost,
} from '../controllers/Costs.js';

const costRouter = express.Router();
//  Cost
costRouter.get('/', getAllCosts);
costRouter.get('/:id', getCostById);
costRouter.post('/', createCost);
costRouter.patch('/:id', updateCost);
costRouter.delete('/:id', deleteCost);

export default costRouter;
