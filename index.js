document.querySelector('#main').remove();
const newHeader = document.createElement('h1');
newHeader.id = "victory";

document.querySelector('body').appendChild(newHeader);

newHeader.textContent = "Dana is the champion";
