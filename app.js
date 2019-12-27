const canvas = document.getElementById("jsCanvas");

function createCanvas(){
    canvas.width = 700;
    canvas.height = 700;
}

function handleStartButton(event){
    alert(event);
}

canvas.addEventListener('click', handleStartButton);

function init(){
    createCanvas();
}