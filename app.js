const express = require('express');
const connection = require('./src/database/connection');
const app = express();
const bobyParser = require('body-parser');
const cors = require('cors');
const routors = require('./routes/user');
const routorsCate = require('./routes/categaries');
app.use(bobyParser.json());
app.use('/api/', [routorsCate, routors]);

app.listen(3000, () => {
    console.log('server is running');
});