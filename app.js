import express, { Router } from "express";

export function hello(req, res) {
    res.send("Hello World!");
}

export const router = Router();
router.get("/", hello);

const app = express();
app.use("/", router);
const port = 3000;
app.set("port", port);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
