const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;


const getFavorites = async (req, res) => {

const client = new MongoClient(MONGO_URI);

try {

    const db = client.db("nutrissence");
    console.log("Connected to database");

    const fetchFavorites = await db.collection("favorites").find().toArray();

    if (fetchFavorites.length === 0) {
        return res.status(400).json({ error: "There are no favorites!" });
    } else {
        return res.status(200).json({ status: 200, data: fetchFavorites })
    }



} catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message })
} finally {
    await client.close();
    console.log("Disconnected from database");
}};

module.exports = getFavorites;