import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String, 
        reaquired: true
    },
    author:{
        type:String,
        require:true
    },
      year: {
        type: Number
    },

    description: {
        type: String
    },

    price: {
        type: Number,
        min: 0
    }
})

const Book = mongoose.model("Book", bookSchema)
export default Book
