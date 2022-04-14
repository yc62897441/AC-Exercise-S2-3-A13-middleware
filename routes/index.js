// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()

// 引用路由模組
const home = require("./modules/home")
const newTodo = require("./modules/newTodo")
const id = require("./modules/id")

// 路由模組
router.use("/", home)
router.use("/new", newTodo)
router.use("/:id", id)

// 匯出路由模組
module.exports = router