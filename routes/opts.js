const { resolve } = require('path')

const opts = (app) => {
  app.get('/opts/:template', async function (req, res) {
    let jsOpts = resolve(`./templates/${req.params.template}/opts.js`)
    let contents = require(jsOpts)
    res.header('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    contents = JSON.stringify(contents)
    res.send(contents)
  })
}

module.exports = opts
