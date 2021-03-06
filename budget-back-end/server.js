const app = require("./app.js");

require("dotenv").config();

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3004;

//Listen
app.listen(PORT, () => {
  console.log(`[DEVELOPMENT] Listening on port: ${PORT}`);
});
