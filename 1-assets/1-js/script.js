let currrentPage = null;
let color = (0,0,0)
function setup() {
    const canvas = createCanvas(600, 600);
    canvas.style('display', 'block');
    textSize(29);
    background(color);
    document.addEventListener('keypress', event => {
        switch (!isNaN((Number(event.key)))) {
            case true:
                currentPage = Number(event.key);
                console.log(currentPage);
                break;
            default:
                alert("Not a page");
        }
    });
}
function draw() {
    text("hello world!", width / 2, height / 2);
    fill(0,0,0);
    console.log();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function changePage(key) {

}