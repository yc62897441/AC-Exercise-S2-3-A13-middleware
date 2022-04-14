const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('新增 Todo 頁面')
})

module.exports = router