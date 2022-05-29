import p5 from 'p5';

function preload() {
  let page = 0;
  let currentPage = 0;
}

document.addEventListener('keypress', event => {
  switch (event.key) {
      case '1':
          currentPage = 1;
          break;
      case '2':
          currentPage = 2;
          break;
      case '3':
          currentPage = 3;
          break;
      default:
          alert("Not a page");
  }
});