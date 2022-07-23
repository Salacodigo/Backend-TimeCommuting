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
    dateMorningStartTime:{
        type: Date,
        required: true
    },
    dateMorningArriveTime:{
        type: Date,
        required: true
    },
    dateNigthStartTime:{
        type: Date,
        required: true
    },
    dateNigthArriveTime:{
        type: Date,
        required: true
    },
    dateMorningDifferenceTime:{
        type: Date,
        required: true
    },
    dateNigthDifferenceTime:{
        type: Date,
        required: true
    },
    dateTotalDailyTime:{
        type: Date,
        required: true
    },
    dateTotalDaysTime:{
        totalYears:     { type: Number, required: true }, 
        totalMonths:    { type: Number, required: true }, 
        totalDays:      { type: Number, required: true }, 
        totalHours:     { type: Number, required: true }, 
        totalMinutes:   { type: Number, required: true }
    },
},
{
    timestamps: true
})

const FormResponse = mongoose.model("FormResponse", formResponseSchema);
export default FormResponse;