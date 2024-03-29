const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/dist/ng-pwa-test")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/ng-pwa-test/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is up and listening at port ${PORT}`);
});