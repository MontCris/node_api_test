const {Router} = require('express');
const router_server = Router();
const { PORT } = require("../config"); /* import the port from config */

router_server.get('/', (req, res) => {
    res.send('Prueba de funcionamiento del puerto interno'+PORT);
});
router_server.get('/:id', (req, res) => {
    const {id} = req.params; /* get the id from the request */
    res.send('peticion de api de id 1');
});

module.exports = router_server; /* export the router module*/