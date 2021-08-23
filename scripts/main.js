let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Logo Firefox.png') {
      miImage.setAttribute('src','images/Amelia 1.jpg');
    } else {
      miImage.setAttribute('src', 'images/Logo Firefox.png');
    }
}

let myButton = document.querySelector('button');
let myTitle = document.querySelector ('h1');

function establishUserName (){
    let myName = prompt('Please enter your name.');
    if (!myName) {
        establishUserName();
    } else {
    localStorage.setItem ('name', myName);
    myTitle.textContent = 'Mozilla is Brilliant! ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    establishUserName();
}
else {
    let nombreAlmacenado = localStorage.getItem('name');
    myTitle.textContent = 'Mozilla is Brilliant! ' + nombreAlmacenado;
}

myButton.onclick = function (){
    establishUserName();
}