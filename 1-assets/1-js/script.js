let currentPage = null;
let currentSection = -1;

function setup() {
    const canvas = createCanvas(600, 600);
    textSize(29);
    background(255, 255, 255);
    document.addEventListener('keypress', keys);
}

function draw() {
    background(223, 223, 223);
    const output = generatePage();
    text(output, 0, height / 2);
}

function generatePage() {
    let output;
    switch (currentSection) {
        case -1:
            output = "Intro";
            break;
        case 0:
            output = "Second Thing";
            break;
        case 1:
            output = generatePageHelper("a", "b", "c", "d");
            break;
        case 2:
            output = generatePageHelper("e", "f", "g", "h");
            break;
        case 3:
            output = generatePageHelper("i", "j", "k", "l");
            break;
        default:
            alert("error, invalid section");
            break;
    }
    return output;
}

function generatePageHelper(output0, output1, output2, output3) {
    let output;
    switch (currentPage) {
        case null:
            output = output0;
            break;
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

function keys(event) {
    const number = Number(event.key);
    const isNumber = !isNaN(number);
    switch (isNumber) {
        case true:
            if (number <= 3) {
                if (currentSection === 0) {
                    currentSection = Number(event.key);
                } else if (currentSection > 0) {
                    currentPage = Number(event.key);
                } else {
                    currentSection += 1;
                }
                break;
            }
        default:
            alert("Not a page");
    }
    if (currentPage == null) return;
    this.removeEventListener('keypress', keys);
}