// Import the functions you need from the SDKs you need
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const { join, resolve } = require("path");

const connectDatabase = () => {
    dotenv.config({
        path: resolve(join(__dirname, "/config.env")),
    });

    const serviceAccount = process.env.ADMINSDK;

    admin.initializeApp({
        credential: admin.credential.cert(`./config/${serviceAccount}`),
        databaseURL: process.env.DATABASEURL
    }).database();

    console.log("Firebase is connected.");
}

module.exports = connectDatabase;
