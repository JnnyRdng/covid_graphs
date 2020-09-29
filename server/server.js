// import

const app = require("express")();
const parser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/createRouter.js");

const port = 3000;

app.use(parser.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
    .then(client => {
        const db = client.db("covid");
        const uk = db.collection("uk");
        const ukRouter = createRouter(uk);
        app.use("/covid/api/uk", ukRouter);
        // more to write here - world etc. cba yet.
    })
    .catch(console.err);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
