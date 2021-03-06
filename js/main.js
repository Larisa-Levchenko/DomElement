'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.addElement = function () {
    let elem;
    if (this.selector.charAt(0) === '.') {
        elem = document.createElement('div');
        elem.classList.add(this.selector.substring(1, this.selector.length));
    }
    if (this.selector.charAt(0) === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.substring(1, this.selector.length);
    }
    elem.style.height = `${this.height}px`;
    elem.style.width = `${this.width}px`;
    elem.style.backgroundColor = `#${this.bg}`;
    elem.style.fontSize = `${this.fontSize}px`;   
    document.body.append(elem);
};

let element = new DomElement('#block', 100, 100, '268927', 35);
element.addElement();
const block = document.querySelector('#block');
block.style.position='fixed';

let vertically = 50;
let horizontally = 50;

block.style.top = `${vertically}px`;
block.style.left = `${horizontally}px`;

document.addEventListener('keydown', function () {
     if (event.keyCode === 40) {
         vertically += 10;
     }
     if (event.keyCode === 38) {
         vertically -= 10;
     }
     if (event.keyCode === 39) {
         horizontally += 10;
     }
     if (event.keyCode === 37) {
         horizontally -= 10;
     }
     block.style.top = `${vertically}px`;
     block.style.left = `${horizontally}px`;
});

