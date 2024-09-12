const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
});

//Export the model
module.exports = mongoose.model('Course', courseSchema);