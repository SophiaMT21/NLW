//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
//executar a ação do botão
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean true or false
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //limpas os novos campos duplicados
    fields.forEach(function(field){
        field.value = ""
    })
    //aonde pôr a página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}