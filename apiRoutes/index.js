const path = require('path');
const router = require('express').Router();
const fs = require('fs')
const db = require (
    "../db/db.json"
)
router.get('/notes', (req, res) => {
res.json(db)
})


module.exports = router