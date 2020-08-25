'use strict';

const body = document.querySelector('body');

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
        elem.classList.add(this.selector);
    }
    if (this.selector.charAt(0) === '#') {
        elem = document.createElement('p');
        elem.id = this.selector;
    }
    elem.style.height = `${this.height}px`;
    elem.style.width = `${this.width}px`;
    elem.style.backgroundColor = `#${this.bg}`;
    elem.style.fontSize = `${this.fontSize}px`;
    elem.textContent = 'Урок №14';
    body.append(elem);
};

let element = new DomElement('#block', 100, 200, '268927', 35);
element.addElement();
