//Servidor
const express = require('express')
const server = express()

const {
    pageLeanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio o configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//Configurações do servidor, com getters estáticos! (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLeanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)