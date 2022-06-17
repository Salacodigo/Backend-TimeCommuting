import express from "express";
import { 
    formResultsGet, 
    registerResponse 
} from '../controllers/formController.js';

const router = express.Router();

router.get('/results', formResultsGet )

router.post('/results', registerResponse )

export default router;
