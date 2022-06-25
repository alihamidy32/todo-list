// const title = document.getElementById('title')
// function nameOfTodoList() {
    
//     title.textContent = prompt('please write name of todo list...')
// }
// nameOfTodoList()
const select = document.getElementById("select")
const en = document.querySelectorAll('.en')
const fa = document.getElementsByClassName('fa')
select.addEventListener('change',selectLanguage)
console.log(fa);
function selectLanguage () {
    if(select.value === 'fa'){
       for(const key in document.querySelectorAll('.fa')){
           fa.style.display = 'block'
           en.style.display = 'none'
   
       }
    }else{
        en.style.display = block
    }
}