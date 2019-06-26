import express from "express";

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello world!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})