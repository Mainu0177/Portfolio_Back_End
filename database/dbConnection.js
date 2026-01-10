import mongoose from "mongoose";

console.log()
const dbConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017', {
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