const mongoose = require('mongoose');
const { mongoURI } = require('./url');

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch(err) {
    process.exit(1);
  }
};

module.exports = connectDB;
