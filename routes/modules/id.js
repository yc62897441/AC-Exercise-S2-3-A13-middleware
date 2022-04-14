const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('顯示一筆 Todo')
})

module.exports = router