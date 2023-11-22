const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user")

//setings
const app= express();
const port= process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use("/api", userRoute);
//app.use("/api",userRoute)

//routes
app.get("/", (req, res) => {
    res.send("welcome to mi API");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

//server listening
app.listen(port, () => console.log("Server listening to", port));