// 載入套件
const express = require("express")
const router = require("./routes/index")

const app = express()
const port = 3000

// 引用並使用中介軟體
const middleware = require("./routes/modules/middleware")
app.use(middleware)

app.use(router)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
