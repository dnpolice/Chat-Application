const express = require('express');
const mongoose = require('mongoose');
const auth = require('./middleware/auth');
const app = express();
const path = require('path');
const socketio = require('socket.io');
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
const PORT = process.env.PORT ? process.env.PORT : 5000;

app.use(express.json({ extended: false }));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/messages', require('./routes/messages'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({friendEmail, email}) => {
        let room;
        if (friendEmail > email)
            room = friendEmail + email;
        else
           room = email + friendEmail;
        socket.join(room);
    });

    socket.on('message', message => {
        let room;
        const {friendEmail, email} = message;
        if (friendEmail > email)
            room = friendEmail + email;
        else
            room = email + friendEmail;
        io.to(room).emit('message', message);
    });
});