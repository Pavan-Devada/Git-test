function validSize(size) {
    (size < 100) ? gridCreator(size) : invalid()
}

function invalid() {
    let error = document.querySelector(".error");
    error.style.display = "block";
    let grid = document.querySelector(".boxesBlock");
    grid.textContent = "";
}

function gridCreator(size) {

    let error = document.querySelector(".error");
    error.style.display = "none";
    console.log(size)
    let grid = document.querySelector(".boxesBlock");
    grid.textContent = "";
    for (row = 0; row < size; row++) {
        eachrow = document.createElement("div");
        eachrow.classList.add("row");
        grid.appendChild(eachrow);
        for (col = 0; col < size; col++) {
            eachBlock = document.createElement("div");
            eachBlock.setAttribute("id", "block");
            eachBlock.classList.add("white");
            eachrow.appendChild(eachBlock);
        }
    }
    updateColors();
}

function updateColors() {
    let gridrow = document.querySelectorAll(".row");
    for (row of gridrow) {
        row.addEventListener("mouseover", (event) => {
            target = event.target.classList.value;
            switch (target) {
                case "white":
                    event.target.classList.value = "red-10";
                    break;
                case "red-10":
                    event.target.classList.value = "red-20";
                    break;
                case "red-20":
                    event.target.classList.value = "red-30";
                    break;
                case "red-30":
                    event.target.classList.value = "red-40";
                    break;
                case "red-40":
                    event.target.classList.value = "red-50";
                    break;
                case "red-50":
                    event.target.classList.value = "red-60";
                    break;
                case "red-60":
                    event.target.classList.value = "red-70";
                    break;
                case "red-70":
                    event.target.classList.value = "red-80";
                    break;
                case "red-80":
                    event.target.classList.value = "red-90";
                    break;
                case "red-90":
                    event.target.classList.value = "red";
                    break;
            }
        })
    }

}


let Sizesubmitted = document.querySelector("#create");
Sizesubmitted.addEventListener("click", () => {
    sizeinputBox = document.querySelector("#gridSize")
    size = Number(sizeinputBox.value);
    (size === 0) ? invalid() : validSize(size);
});