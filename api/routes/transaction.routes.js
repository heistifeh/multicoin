import express from 'express';

import { authenticate } from '../middleware/authMiddleware';
import { createDeposit, getPendingDeposits, setDepositStatus, getAllPendingDeposits } from '../controller/transaction.controller';
import { verifyToken } from '../utils/verifyToken';

const transationRoutes = express.Router();

// Create deposit request
transationRoutes.post('/create', verifyToken, createDeposit);

// Get pending deposits for a specific user
transationRoutes.get('/pending/:userId', verifyToken, getPendingDeposits);

// Set deposit status (e.g., 'success' or 'failed')
transationRoutes.put('/status/:depositId', setDepositStatus);

// Get all pending deposits (admin access)
transationRoutes.get('/pending', verifyToken, getAllPendingDeposits);

export default transationRoutes;