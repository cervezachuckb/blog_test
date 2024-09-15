import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// this is a comment I'm adding to the index just to create a test change
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });