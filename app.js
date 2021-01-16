const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
            });
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
connectDB();

//.env
const PORT = 3000;

app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  app.get('/about', (req, res) => {
    res.send('About')
  });


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});