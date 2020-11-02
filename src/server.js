//dados
const proffys = [

     {
          name: "Diego Fernandes",
          avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
          whatsapp: "9883456732",
          bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
          subject: "Química",
          cost: "20",
          weekday: [0],
          time_from: [720],
          time_to: [1220]
     },

     {
          name: "Denise Silva",
          avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
          whatsapp: "9883456732",
          bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
          subject: "Química",
          cost: "20",
          weekday: [1],
          time_from: [720],
          time_to: [1220]
     }
]

const subjects = [
 "Biologia",
 "Ciências",
 "Educação física",
 "Física",
 "Geografia",
 "História",
 "Matemática",
 "Português",
 "Química",
]

const weekdays = [
 "Domingo",
 "Segunda-feira",
 "Terça-feira",
 "Quarta-feira",
 "Quinta-feira",
 "Sexta-feira",
 "Sábado",
]

//funcionalidades

function getSubject(subjectNumber){
 const position = +subjectNumber - 1
 return subjects[position]
}

function PageLanding(req, res) {
return res.render("index.html")
}

function PageStudy(req, res) {
     const filters = req.query
return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function PageGiveClasses(req, res) {
 const data = req.query

const isNotEmpty = Object.keys(data).length > 0
//se tiver dados (data)
if (isNotEmpty) {

     data.subject = getSubject()
//ADICIONAR dados a lista de proffys
proffys.push(data)

return res.redirect("/study")
}
//se não tiver dados, não adicionar
return res.render( "give-classes.html", {subjects, weekdays})
}
//servidores
const express = require('express')
const server = express()

//configurar ninjucks (template engine)
const nunjucks = require ('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true,   
})

//nício e cinfiguração do servdor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", PageLanding)
.get("/study", PageStudy)
.get("/give-classes", PageGiveClasses)
//start do servidor
.listen(5500)