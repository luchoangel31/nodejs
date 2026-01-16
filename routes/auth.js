const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email y password son obligatorios'
    });
  }

  // MOCK (luego va BD)
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

module.exports = router;
