const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid");

const createUser = async (req, res) => {

    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        const db = client.db("nutrissence");
        const { firstName, lastName, email, phone, pwd, confirmPwd } = req.body;
        console.log("Connected to database.");

        if (pwd !== confirmPwd) {
            return res.status(404).json({ status: 404, message: "Your passwords do not match! Please try again."})
        };

        const saltRounds = 10;
        const userPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            _id: uuidv4(),
            firstName,
            lastName,
            email,
            phone,
            pwd: userPassword
        }

        const createNewUser = await db.collection("users").insertOne(newUser);
        return res.status(201).json({ status: 201, _id: createNewUser.insertedId, message: `A new user has been added!`})

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message })
    } finally {
        await client.close();
        console.log("Disconnected from database.");
    }

}

module.exports = createUser;