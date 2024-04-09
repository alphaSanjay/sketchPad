const container = document.querySelector(".container")
let rows = document.querySelector(".gridRow")
num = 20
makeGrid(num)


function makeGrid(size){
    let height = 600 / num
    let ht = height + 'px'
    for(i = 0; i < size; i++){
        let row = document.createElement("div")
        row.style.height = ht
        container.appendChild(row).className = "gridRow"
        for(j = 0; j < size; j++){
            let column = document.createElement("div")
            row.appendChild(column).className = "cell"
            column.style.flex = 1
        }
    }
}