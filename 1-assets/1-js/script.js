let currrentPage = null;
let currentSection = 0;
let currentParagraph = null;
function setup() {
    const canvas = createCanvas(600, 600);
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
                        currentSection = 1;
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
//write the story in the empty quotes
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
            output = currentPageSwitch("","","");
            break;
        case 3:
            output = currentPageSwitch("","","");
            break;
        case 4:
            output = currentPageSwitch("","","");
            break;
        default:
            alert("error, invalid section");
            break;
    }
    return output;
}

function currentPageSwitch(output1, output2, output3) {
    let output;
    switch (currentPage) {
        case 1:
            output = output1;
            break;
        case 2:
            output = output2;
            break;
        case 3:
            output = output3;
            break;
        default:
            alert("error, invalid page");
            break;
    }
    return output;
}