function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Jitu";
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);
