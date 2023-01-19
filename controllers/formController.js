import {request, response} from "express"
import FormResponse from '../models/FormResponseModel.js'

const formResultsGet = async (req, res) => {
    try {
        const results = await FormResponse.find();
        res.status(200).json({
            count: results.length,
            msg: 'Los resultados son: ',
            results
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact the administrator'
        })
    }
}

const registerResponse = async (req = request, res = response) => {
    const { body } = req;
    
    try {
        const response = new FormResponse( body );
        
        const savedResponse = await response.save();
        
        res.status(200).json({
            savedResponse,
            msg: 'Los resultados se han registrado con éxito'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact the administrator'
        })
    }
    
}


const APIInit = (req, res) => {
    try {
        res.status(200).json({
            msg: 'API working',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact the administrator'
        })
    }
}

export {
    formResultsGet,
    registerResponse,
    APIInit
}