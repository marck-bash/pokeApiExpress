import express from "express";
import indexController from "./controllers/index.js";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/", indexController);

app.listen(port, () => {
    console.log(`Example app is now listening on port ${port}!`);
});