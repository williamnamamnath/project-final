const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const usersArray = require("./data/usersSample");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const batchImport = async () => {

    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db("nutrissence");
        console.log("Connected to database.");

        await db.collection("users").insertMany(usersArray);
        console.log("The users have been added.");

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
        console.log("Disconnected from database.");
    }
}

batchImport();