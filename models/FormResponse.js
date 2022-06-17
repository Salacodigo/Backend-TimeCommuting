import mongoose from "mongoose";

const formResponseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    daysQuantity:{
        type: Number,
        required: true
    },
    morningStartTime:{
        type: String,
        required: true
    },
    morningArriveTime:{
        type: String,
        required: true
    },
    nigthStartTime:{
        type: String,
        required: true
    },
    nigthArriveTime:{
        type: String,
        required: true
    }

})

const FormResponse = mongoose.model("FormResponse", formResponseSchema);
export default FormResponse;

// Received Data