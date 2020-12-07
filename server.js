const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const projects = require('./routes/api/projects');
// const goals = require('./routes/api/goals');
// const balance = require('./routes/api/balance');
// const transactions = require('./routes/api/transactions');

const app = express();
//body parser now included in express
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api/projects', projects);
// app.use('/api/goals', goals);
// app.use('/api/balance', balance);
// app.use('/api/transactions', transactions);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));