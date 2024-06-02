const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const updateDescription = async (req, res) => {

const client = new MongoClient(MONGO_URI);
const { item } = req.params;

try {

    const db = client.db("nutrissence"); 
    console.log("Connected to database");

    await db.collection("favorites").updateOne({ _id: item }, { $set: req.body});

    return res.status(200).json({ status: 200, message: "The item has been updated!" });

} catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message })
} finally {
    await client.close();
    console.log("Disconnected from database");
}};

module.exports = updateDescription;