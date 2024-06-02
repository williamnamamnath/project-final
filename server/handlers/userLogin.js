const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {

const { email, password } = req.body;
const client = new MongoClient(MONGO_URI);

if (email === "" || email === undefined || email === null) {
    return res.status(400).json({ status: 400, message: "Please enter your email address!" })
}

if (password === "" || password === undefined || password === null) {
    return res.status(400).json({ status: 400, message: "Please enter your password!" })
}

try {
    await client.connect();
    const db = client.db("nutrissence");
    console.log("Connected to database");

    const createdUser = await db.collection("users").findOne({ email });

    if (!createdUser) {
        return res.json(404).json({ status: 404, message: "Invalid email address!" })
    } 

    const userPassword = await bcrypt.compare(password, createdUser.password);

    if (!userPassword) {
        return res.status(404).json({ status: 404, message: "Invalid password!" })
    };

    const { password: hiddenPassword, ...userInfo } = createdUser;


    return res.status(200).json({ status: 200, data: userInfo })


} catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message })
} finally {
    await client.close();
    console.log("Disconnected from database");
}
};

module.exports = userLogin;