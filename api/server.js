const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ViktoriaA:FSAwStv3AM5F9WZ@cluster0.yfqp2.mongodb.net/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB");
})

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

app.listen(3001, () => {
    console.log("Server is running on port: 3001");
});