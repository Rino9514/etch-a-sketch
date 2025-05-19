const container = document.querySelector(".main-container");
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

createGrid(16);