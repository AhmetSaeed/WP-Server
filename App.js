const express = require("express");
const app = express();

const port = 9000;
app.listen(port, () => {
 console.log(`connected server port of ${port}`);
});
