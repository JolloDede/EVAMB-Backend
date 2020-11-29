const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// any route pre-pended with /auth
router.get('/', (req, res) => {
    res.json({
      message:  '🔐'
    });
  });