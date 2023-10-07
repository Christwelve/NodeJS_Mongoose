import mongoose from "mongoose";


mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connection successful")
})
.catch((err) => console.log(err.message))

const client = mongoose.connection;
client.on("error", (err) => console.log(err.message))
export default client;