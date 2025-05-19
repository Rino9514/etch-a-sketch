const container = document.querySelector(".grid-container");
const btn   = document.querySelector("button");
const input = document.querySelector("input");
let height_width = parseFloat(getComputedStyle(container).height); 
// console.log()

function createGrid(square_length){

    for(let ii=0; ii< square_length;ii++){
        for(let kk=0; kk<square_length;kk++){
            const multiple_square = document.createElement("div");
            multiple_square.classList.add("grid");
            multiple_square.style.height=height_width/square_length+"px";
            multiple_square.style.width=height_width/square_length+"px";
            container.appendChild(multiple_square);
            multiple_square.addEventListener("mouseenter", (event) => {
                changeColor(event,multiple_square);
            })
        }
    }
}

function changeColor(event,multiple_square){
    multiple_square.style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

function resetGrid(event,length_new_grid){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    if(!Number.isNaN(Number(length_new_grid))){
        if (length_new_grid>=1 && length_new_grid <=100){
            createGrid(length_new_grid);
        } else {
            createGrid(16);
        }
    } else{
        createGrid(16);
    }
    console.log(!Number.isNaN(length_new_grid))
}

btn.addEventListener("click", (event) => {
    resetGrid(event,input.value);
})



createGrid(16);