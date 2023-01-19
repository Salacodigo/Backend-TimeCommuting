import express from "express";
import { 
    formResultsGet, 
    registerResponse,
    APIInit
} from '../controllers/formController.js';

const router = express.Router();

router.get('/', APIInit)

router.get('/api/form/results', formResultsGet )

router.post('/api/form/results', registerResponse )

export default router;
