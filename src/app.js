const main_app = require("./module_express"); /* import the app modules from index.js */
const { PORT } = require("./config"); /* import the port from config */

async function start() {
    await main_app.listen(PORT); 
    console.log("Server running on internal port" + PORT);
}

start(); /* start the server */ 
