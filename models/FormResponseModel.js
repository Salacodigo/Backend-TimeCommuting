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
    },


    dateMorningStartTime:{
        type: Date,
        required: false
    },
    dateMorningArriveTime:{
        type: Date,
        required: false
    },
    dateNigthStartTime:{
        type: Date,
        required: false
    },
    dateNigthArriveTime:{
        type: Date,
        required: false
    },
    dateMorningDifferenceTime:{
        type: Date,
        required: false
    },
    dateNigthDifferenceTime:{
        type: Date,
        required: false
    },
    dateTotalDailyTime:{
        type: Date,
        required: false
    },
    dateTotalDaysTime:{
        totalYears: Number, 
        totalMonths: Number, 
        totalDays: Number, 
        totalHours: Number, 
        totalMinutes: Number
    },

},
{
    timestamps: true
})

const FormResponse = mongoose.model("FormResponse", formResponseSchema);
export default FormResponse;