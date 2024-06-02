const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const deleteFavorite = async (req, res) => {

const client = new MongoClient(MONGO_URI);
const { id } = req.params;

try {

    const db = client.db("nutrissence"); 
    console.log("Connected to database");

    await db.collection("favorites").deleteOne({ _id: id });

    return res.status(200).json({ status: 200, message: "This item has been deleted!" });

} catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message })
} finally {
    await client.close();
    console.log("Disconnected from database");
}};

module.exports = deleteFavorite;