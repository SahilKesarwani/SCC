const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

// On deploy
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
