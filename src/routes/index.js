// TODO: implement HTTPS
import express from 'express';
import { getIndex, getNames } from '../controllers/indexController.js';

const router = express.Router();

// all routes
router.get('/', getIndex);
router.get('/names', getNames);

export default router;
