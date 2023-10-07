import express from 'express';
const studentRouter = express.Router();
import Student from '../models/Student.js';


const studentRoutes = express.Router();

studentRoutes.get("/", async (req, res) => {
    try {
        const response = await Student.find();
        res.json(response);
    } catch(err){
        res.status(500).json({ error: "No data available" });
    }
})

studentRoutes.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const response = await Student.findById(id);
        res.json(response)
    } catch(err){
        res.status(404).json({ error: "Student doesn't exit" });
    }
})
  
studentRoutes.post("/", async (req, res) => {

    try {
        const {name, first_name, email} = req.body;
        const response = await Student.create({name, first_name, email});
        res.json(response)
    } catch(err){
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

studentRoutes.put("/:id", async (req, res) => {

    try {
        const {name, first_name, email} = req.body;
        const {id} = req.params;

        const response = await Student.findByIdAndUpdate(id, {name, first_name, email});
        if (!response) {
            res.status(404).json({ error: "Student doesn't exit" });
            return;
        }  
        res.json(response)

    } catch(err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
})

//Update name John to Bob
// studentRoutes.put("/", async (req, res) => {
//     try {
//         const response = await Student.updateMany({ name: "John" }, {$set: { name: "Bob"}});
//         if(response.modifiedCount > 0) {
//             const updatedNames = await Student.find({name: "Bob"});
//             res.json(updatedNames);
//         }else{
//             res.json("No value got updated");
//         }
//     } catch(err) {
//             res.status(500).json(err);
//     }
// })

studentRoutes.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Student.findByIdAndDelete(id);
        if (!response) {
            res.status(404).json({ error: "Student doesn't exit" });
            return;
        }
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

export default studentRoutes;