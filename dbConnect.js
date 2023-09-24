const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://gezipro:Qq!123456789Kwakg2!@cluster0.kubewfc.mongodb.net/Bookkeeper',
    { useNewUrlParser: true, useunifiedTopology: true }
);

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));
connection.on('connected', () => console.log('MongoDB connected!'));