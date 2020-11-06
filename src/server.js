//servidores
const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages')

//configurar ninjucks (template engine)
const nunjucks = require ('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true,   
})

//nício e cinfiguração do servdor
server
//receber os dados via req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start do servidor
.listen(5500)