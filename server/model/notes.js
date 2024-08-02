const mongoose = require('mongoose');
const {Schema} = mongoose;

const notesSchema =  new Schema({
    name :{type:String,required:true,unique:true},
    initials:{type:String,required:true},
    color: {type:String,required:true},
    notes:{type:[String]}
})


exports.Notes = mongoose.model('Notes',notesSchema); 