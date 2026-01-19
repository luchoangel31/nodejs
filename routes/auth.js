const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email y password son obligatorios'
    });
  }

  if (email === 'test@test.com' && password === '123456') {
    return res.json({
      message: 'Login correcto',
      user: { email }
    });
  }

  res.status(401).json({
    error: 'Credenciales incorrectas'
  });
});

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Ruta protegida OK',
    user: req.user
  });
});

module.exports = router;
