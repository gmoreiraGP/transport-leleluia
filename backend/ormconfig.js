require('dotenv').config()

module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "entities": ["src/app/models/**/*.ts"],
  "migrations": ["src/database/migrations/**/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}
