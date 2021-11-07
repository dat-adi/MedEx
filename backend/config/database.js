// Import the functions you need from the SDKs you need
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const { join, resolve } = require("path");

dotenv.config({
    path: resolve(join(__dirname, "/config.env")),
});

const serviceAccount = process.env.ADMIN_SDK;

admin.initializeApp({
    credential: admin.credential.cert(`./config/${serviceAccount}`),
    databaseURL: process.env.DATABASE_URL
});

const database = admin.database();

module.exports = database;
