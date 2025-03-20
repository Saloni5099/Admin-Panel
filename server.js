require("dotenv").config();
const express = require("express");

const app = express();

const authRouter = require("./router/auth-route");
const contactRouter = require("./router/contact-router");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to my website");
// });
// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to registration page");
// });
app.use(errorMiddleware);
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT} `);
    });
})
