const express = require('express');
const detailrout = require('./routes/detailExtrac')
const app = express();

const port = 3000;

app.use(express.json());
app.use("/detail/nirf", detailrout);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})