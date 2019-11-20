let DATABASE_URI = "mongodb://localhost:27017/tr1pp";

if (process.env.MONGO_DB_URI) {
  DATABASE_URI = process.env.MONGO_DB_URI;
}
module.exports = {
  DATABASE_URI
};
