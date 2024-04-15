const container = document.querySelector(".container")
let id = 0
let boxHover = ' '

makeGrid(16)

function resetGrid(){
    num = prompt("Please enter the Size: ")
    while(num > 100 || num <= 0){
        alert("Please enter between 1 - 100")
        num = prompt("Please enter the Size: ")
    }
    console.log(2)
    while(container.firstChild) container.removeChild( container.lastChild )
    makeGrid(num)
} 

function makeGrid(size){
    console.log(1)
    let height = 600 / size
    let ht = height + 'px'
    for(i = 0; i < size; i++){
        let row = document.createElement("div")
        row.style.height = ht
        container.appendChild(row).className = "gridRow"
        for(j = 0; j < size; j++){
            id++
            let column = document.createElement("div")
            row.appendChild(column).className = "cell"
            column.style.flex = 1
            column.setAttribute('id', 'b'+id)
        }
    }
    let jin = id
    id = 0
    applyColor(jin)
}

function applyColor(jin){
    console.log(3)
    for (i = 1; i <= jin; i++) {
        selector = '#' + 'b'+ i;
        boxHover = document.querySelector(selector);
        boxHover.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'blue';
        })
    }
}
