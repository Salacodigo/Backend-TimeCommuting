import FormResponse from '../models/FormResponse.js'

const formResultsGet = async (req, res) => {
    try {
        const results = await FormResponse.find();
        
        res.json({
            count: results.length,
            msg: 'Los resultados son: ',
            results
        })
    } catch (error) {
        console.log(error);
    }
}

const registerResponse = async (req, res) => {

    try {
        const response = new FormResponse(req.body);

        const savedResponse = await response.save();
    
        res.json({
            savedResponse,
            msg: 'Los resultados se han enviado con éxito'
        })
    } catch (error) {
        console.log(error);
    }

}

export {
    formResultsGet,
    registerResponse
}