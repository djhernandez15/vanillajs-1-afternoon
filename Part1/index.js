let moves = []
function play(element){
    let player = document.getElementById('player');
    let answer = document.getElementById(element);
    if (player.innerText === 'X'){
        player.innerText = 'O';
        answer.innerText = 'X';
        moves[element] = 'X' ;
    } else{
      player.innerText = 'X';
      answer.innerText = 'O';
      moves[element] = 'O';  
    } console.log(moves);  
    let square1 =moves[0];
    let square2 =moves[1];
    let square3 =moves[2];
    let square4 =moves[3];
    let square5 =moves[4];
    let square6 =moves[5];
    let square7 =moves[6];
    let square8 =moves[7];
    let square9 =moves[8];

if (square1 !== undefined && square1 === square2 && square1 === square3){
    window.alert(`${square1} is the winner`)
    return
    } else if (square4 !== undefined && square4 === square5 &&  square4 === square6){
        window.alert(`${square4} is the winner`)
        return
    } else if (square7 !== undefined && square7 === square8 && square7 === moves[8]){
        window.alert(`${square7} is the winner`)
        return
    } else if (square1 !== undefined && square1 === square4 && square1 === square7){
        window.alert(`${square1} is the winner`)
        return
    } else if (square2 !== undefined && square2 === square5 && square2 === square8){
        window.alert(`${square2} is the winner`)
        return
    } else if (square3 !== undefined && square3 === square6 && square3 === moves[8]){
        window.alert(`${square3} is the winner`)
        return
    } else if (square1 !== undefined && square1 === square5 && square1 === moves[8]){
        window.alert(`${square1} is the winner`)
        return
    } else if (square3 !== undefined && square3 === square5 && square3 === square7){
        window.alert(`${square3} is the winner`)
        return
    }
    let fullBoard = true;
    for(let i = 0;i <= 8; i++){
        if(moves[i] === undefined){
            fullBoard = false;
        }
    }
    if(fullBoard === true){
        window.alert("Cat's game, there is no winner")
      }
};
   
    


