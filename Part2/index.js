let id = document.getElementById('inputID');
let color = document.getElementById('inputColor');
let setCard = function(){
    let card = document.getElementById(id.value)
    console.log(card)
    card.style.color = card.value;
}