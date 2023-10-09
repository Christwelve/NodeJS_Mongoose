import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
		// minlength: [1, "Please enter your name"]
    },
    first_name: {
        type: String,
        required: true,
		// minlength: [1, "Please enter your first name"]
    },
    email: {
        type: String,
        required: true,
		trim: true 
    }
})

const Student = mongoose.model('Student', StudentSchema);

export default Student;