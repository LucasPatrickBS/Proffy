document.querySelector("#add-time")
.addEventListener('click', cloneField) 
//"addEventListener" = é a função que cápta a interação do usuário com a página!
//Essa funcionalidade exig 2 parâmetros= um evento e uma outra função, 
//para que quando o evento ocorra, ela execute a ação solicitada
//"Click" é um evento já pré-definido, "cloneField" é a função que será criada.
        //Executar uma ação
function cloneField(){
            //Duplicar os campos. Que campos?
const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
// O comando "const" indica que uma variável é contante! Portanto permanecerá com este valor ao longo da aplicação!
            //Pegar os campos. Quais campos?
const fields = newFieldsContainer.querySelectorAll('input')
            //Limpar os campos.
fields.forEach(function(field){
//É necessário indicar qual o primeiro a ser executado!
field.value = ""
})
            //Colocar na página. Onde colocar na página?
document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}