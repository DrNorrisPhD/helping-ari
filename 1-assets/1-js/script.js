let currrentPage = null;
let currentSection = 0;
let color = (0, 0, 0)
function setup() {
    const canvas = createCanvas(600, 600);
    canvas.style('display', 'block');
    textSize(29);
    background(255, 255, 255);
    document.addEventListener('keypress', event => {
        const number = Number(event.key);
        const isNumber = !isNaN(number);
        switch (isNumber) {
            case true:
                if (number <= 3) {
                    currentPage = Number(event.key);
                    console.log(currentPage);
                    break;
                }
            default:
                alert("Not a page");
        }
    });
}
function draw() {
    fill(0, 0, 0);
    const output = ("This is page " + currrentPage + " of section " + currentSection);
    text(output, 0, height / 2);
}

function changePage(key) {

}