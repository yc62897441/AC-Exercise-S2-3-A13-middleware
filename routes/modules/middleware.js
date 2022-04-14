const middleware = function (req, res, next) {
  // req.requestTime = Date.now()
  // req.date = Date(Date.now())
  let reqDate = new Date()
  let method = req.method
  let url = req.url

  console.log(`${reqDate.toLocaleString()} | ${method} | ${url}`)

  res.on("finish", function () {
    let resDate = new Date()
    let totalTime = resDate - reqDate
    console.log(`${reqDate.toLocaleString()} | ${method} | ${url} | ${totalTime}ms`)
  })
  next()
}

module.exports = middleware


// Javascript Date.now()用法及代碼示例
// https://vimsky.com/zh-tw/examples/usage/javascript-date-now.html

// JS 把陣列 Array 轉成字串與本地化的 toLocaleString()
// https://ithelp.ithome.com.tw/articles/10227080