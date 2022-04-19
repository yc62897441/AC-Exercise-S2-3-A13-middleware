const middleware = function (req, res, next) {
  const reqDate = new Date()
  const method = req.method
  const url = req.url

  console.log(`${reqDate.toLocaleString()} | ${method} | ${url}`)

  res.on('finish', function () {
    const resDate = new Date()
    const totalTime = resDate - reqDate
    console.log(`${reqDate.toLocaleString()} | ${method} | ${url} | ${totalTime}ms`)
  })
  next()
}

module.exports = middleware

// Javascript Date.now()用法及代碼示例
// https://vimsky.com/zh-tw/examples/usage/javascript-date-now.html

// JS 把陣列 Array 轉成字串與本地化的 toLocaleString()
// https://ithelp.ithome.com.tw/articles/10227080
