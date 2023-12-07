import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes.js";   

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// * Routes
app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
});