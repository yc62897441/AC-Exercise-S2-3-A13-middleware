const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send('列出全部 Todo')
})

router.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

module.exports = router