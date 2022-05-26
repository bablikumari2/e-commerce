const mongoose= require('mongoose')

const connect=()=>{
    mongoose.connect("mongodb+srv://babli:babli@1234@cluster0.h6yhx.mongodb.net/ecommerce?retryWrites=true&w=majority")
}
module.exports= connect