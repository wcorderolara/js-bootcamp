const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Todo funciona OK');
})

module.exports = router;
