import * as SQLite from "expo-sqlite";

 const db = SQLite.openDatabaseSync("db");
 export default db;