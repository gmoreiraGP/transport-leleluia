import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("📦 DB CONNECTED"))
  .catch(error => console.log(`🚫 DB NOT CONNECTED : ${error.message}`));
