require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./router/auth-route");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-route");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

//admin route

app.use("/api/admin",adminRouter);


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
