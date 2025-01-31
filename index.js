const btn = document.querySelector('.btn');
const introduccion = document.querySelector('.introduccion')
const lista = document.querySelector('.lista')

introduccion.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addList()
})

btn.addEventListener('click', addList);
function addList() {
const item = document.createElement('li');
item.innerText = introduccion.value;
if (introduccion.value.length === 0 || introduccion.value === ' ') {
    return false
}
lista.appendChild(item);

gsap.from(item, {x: -20, ease: 'bounce', duration: 2, opacity: 0})
introduccion.value = '';
item.classList.add('listadisenyo');


item.addEventListener('click', function(){
    item.classList.add('tachar');
})

item.addEventListener('dblclick', function() {
    gsap.to(item, {duration: 0.5, opacity: 0})
    setTimeout(deleteList, 2000)
});

function deleteList() {
    lista.removeChild(item);
}

}






