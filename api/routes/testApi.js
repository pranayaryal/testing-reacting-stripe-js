var express = require('express');
var router = express.Router();

router.post("/api/intent", (req, res, next) => {
    res.send("API is working properly");
});

module.exports = router;