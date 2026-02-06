import mongoose from "mongoose";

console.log()
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: 'MY_PORTFOLIO',
    })
    .then(() => {
    console.log("Database connected successfully");
    })
    .catch ((error) => {
        console.log(`Some error occurred while Connecting to Database: ${error}`);
    })
}

export default dbConnection;