const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const addFavorites = async (req, res) => {

const client = new MongoClient(MONGO_URI);
const favorite = req.body;

try {

    const db = client.db("nutrissence"); 
    console.log("Connected to database");

    const response = await db.collection("favorites").insertOne(favorite);

    if (response) {
        return res.status(200).json({ status: 200, message: "A new item has been added to the favorites collection!", data: response });
    }

} catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message })
} finally {
    await client.close();
    console.log("Disconnected from database");
}};

module.exports = addFavorites;