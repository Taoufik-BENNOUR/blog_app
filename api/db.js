import mysql12 from "mysql2"

export const db = mysql12.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"blog"
})

db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   console.log('connected as id ' + db.threadId);
  });