const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors')

const db = require('../db/connection');
const app = express();
const messages = db.get('messages');
const auth = require('./auth');

app.use(volleyball);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello World",
    })
});

app.get('/messages', (req, res, next) => {
    messages
        .find()
        .then(messages => {
            res.json({ messages });
        }).catch(next);
});

app.post('/messages', (req, res, next) => {
    if(isValidMessage(req.body)){
        const message = {
            name: req.body.name.toString().trim(),
            content: req.body.content.toString().trim(),
            created: new Date(),
        };
        messages
            .insert(message)
            .then(createdMessage => {
                res.json(createdMessage);
            }).catch(next);
    } else {
        res.status(220);
        res.json({ 
            message: 'Hey! Name and Content are required! Name cannot be longer than 50 characters. Content cannot be longer than 140 characters.' 
        });
    }
});

app.use('/auth', auth);


function isValidMessage(message){
    return message.name && message.name.toString().trim() !== '' && message.name.toString().trim().length <= 50 &&
    message.content && message.content.toString().trim() !== '' && message.content.toString().trim().length <= 140;
}

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});