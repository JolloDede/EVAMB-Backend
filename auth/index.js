const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../db/connection');
const users = db.get('users');
users.createIndex('username', { unique: true });

const router = express.Router();

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{10,30}$')),
});

// any route pre-pended with /auth
router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  });
});

router.post('/signup', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    users.findOne({
      username: req.body.username,
    }).then(user => {
      if (user) {
        // there is already a user in the db with this username...
        // respond with an error!
        const error = new Error('That username is not OG. Please choose another one.');
        res.status(409);
        next(error);
      } else {
        // hash the password
        bcrypt.hash(req.body.password.trim(), 12).then(hashedPassword => {

          const newUser = {
            username: req.body.username,
            password: hashedPassword,
          };
          // Add user to db
          users.insert(newUser).then(insertedUser => {
            // Respond with Token
          });
        });
      }
    });
  }else {
    res.status(422);
    next(result.error);
  }
});

router.post('/login', (req, res) => {

});