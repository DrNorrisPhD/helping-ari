let currrentPage = null;
let currentSection = 0;
let currentParagraph = null;
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
                    if (currentSection > 1) {
                        currentPage = Number(event.key);
                        console.log(currentPage);
                    } else {
                        currentSection = Number(event.key);
                        console.log(currentSection);
                    }
                    break;
                }
            default:
                alert("Not a page");
        }
    });
}
function draw() {
    fill(0, 0, 0);
    const output = generatePage();
    text(output, 0, height / 2);
}

function generatePage() {
    let output;
    switch (currentSection) {
        case 0:
            output = "";
            break;
        case 1:
            output = "";
            break;
        case 2:
            switch (currentPage) {
                case 1:
                    output = "";
                    break;
                case 2:
                    output = "";
                    break;
                case 3:
                    output = "";
                    break;
                default:
                    alert("error, invalid page");
                    break;
            }
            break;
        case 3:
            switch (currentPage) {
                case 1:
                    output = "";
                    break;
                case 2:
                    output = "";
                    break;
                case 3:
                    output = "";
                    break;
                default:
                    alert("error, invalid page");
                    break;
            }
            break;
        case 4:
            switch (currentPage) {
                case 1:
                    output = "";
                    break;
                case 2:
                    output = "";
                    break;
                case 3:
                    output = "";
                    break;
                default:
                    alert("error, invalid page");
                    break;
            }
            break;
        default:
            alert("error, invalid section");
            break;
    }
}