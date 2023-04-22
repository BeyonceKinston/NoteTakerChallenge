const path = require('path');
const router = require('express').Router();
const fs = require('fs')

router.get('/notes', (req, res) => {
var data =fs.readFileSync(path.join(__dirname, '../db/db.json'))
console.log(data)
var parsedData = JSON.parse(data)
console.log(parsedData)
res.json(parsedData)
})


module.exports = router