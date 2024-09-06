const { default: mongoose } = require("mongoose")



const userSchema= new mongoose.Schema({
    name:{
        type:string,
        required:true
    }
})

export default User=mongoose.model('user',userSchema)