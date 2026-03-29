const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lion",   // 🔁 change if your password is different
    database: "portfolio"
});

// ✅ Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("Database Error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

// ✅ API to save form data
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error saving message");
        } else {
            res.send("Message sent successfully");
        }
    });
});

// ✅ Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
