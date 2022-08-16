// config/db.js

const mongoose = require('mongoose');
const settings = require('./key.json');

const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${settings.Username}:${settings.Password}@ethereumtaxstack.bngau.mongodb.net/EthereumTaxStack?retryWrites=true&w=majority`
      );
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;