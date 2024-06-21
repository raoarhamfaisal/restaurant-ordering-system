import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "restaurant_user",
  password: "password",
  database: "db_restaurant",
});

db.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;
