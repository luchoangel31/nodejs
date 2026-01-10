const express = require('express');
const router = express.Router();

/* Ruta principal */
router.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando correctamente 🚀');
});

module.exports = router;
