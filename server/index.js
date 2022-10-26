const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());

const PORT = 5500;

app.use(cors());

const TodoItemRoute = require('./routes/todoRoute');

mongoose
  .connect('mongodb://localhost:27017/todosdb')
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.use('/', TodoItemRoute);

app.listen(PORT, () => console.log('Server connected'));
