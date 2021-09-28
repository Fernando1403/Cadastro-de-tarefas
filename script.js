const ul = document.querySelector(".ul")
const tarefa = document.querySelector("#tarefa")
const dataFinal = document.querySelector("#data")
const dificuldade = document.querySelector("#dificuldade")
const importante  = document.querySelector("#importante")

const btn = document.querySelector(".btn");

btn.addEventListener("click", addItem);

function addItem() {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')

    li.className = "lista";
    if (importante.checked == true){
        li.className += " lista-importante"
    }
    ul.appendChild(li)

    div.innerHTML = tarefa.value
    li.appendChild(div)
    div2.innerHTML = dataFinal.value
    li.appendChild(div2)
    div3.innerHTML = dificuldade.value
    li.appendChild(div3)
    tarefa.value = ""
    dataFinal.value = ""
    dificuldade.value = ""
}
