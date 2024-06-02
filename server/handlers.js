const createUser = require("./handlers/createUser"); 
const userLogin = require("./handlers/userLogin");
const getFavorites = require("./handlers/getFavorites");
const deleteFavorite = require("./handlers/deleteFavorite");
const addFavorites = require("./handlers/addFavorites");
const updateDescription = require("./handlers/updateDescription");

module.exports = { 
    createUser, 
    userLogin, 
    getFavorites, 
    deleteFavorite, 
    addFavorites,
    updateDescription 
};