import mongoose from "mongoose";


const NotesSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        default: 'general'
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('notes', NotesSchema);