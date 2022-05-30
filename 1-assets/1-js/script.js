let page = 0;
let currentPage = 0;
let color = (0,0,0);
let click = true;
function setup() {
    const canvas = createCanvas(100, 100);
    canvas.style('position', 'absolute');
    textSize(29);
    background(color);
    goFullScreen();
}

function draw() {
    text("hello world!", width/2, height/2);
    fill(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function goFullScreen(){
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}