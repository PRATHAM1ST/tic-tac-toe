function clicked(pos){
    if (run){
        notification.innerHTML = "";
        notification.style.visibility = "hidden";
        let element = document.querySelector('.cell-' + pos);
        if(game[pos] == ""){
            game[pos] = myPiece;
            element.innerHTML = "<" + myPiece + ">" + myPiece + "</" + myPiece + ">";
            db.collection('games').doc(roomId).update({
                c0 : game[0],
                c1 : game[1],
                c2 : game[2],
                c3 : game[3],
                c4 : game[4],
                c5 : game[5],
                c6 : game[6],
                c7 : game[7],
                c8 : game[8],
                turn : opponent,
                gameMiddle : true
            })
            run = false;
            document.documentElement.style.setProperty('--cursor', "not-allowed");
            isitmyturn.style.visibility = "hidden";
            if(checker() == false && notification.innerHTML.includes("Draw") == false){
                myWins++;
                winUser.innerHTML = myWins;
                winOpponent.innerHTML = opponentWins;
            }
        }
    }
}

function checker(){
    for(let i = 0; i < 3; i++){
        if(game[i * 3] != "" && game[i * 3] == game[i *  3 + 1] && game[i * 3 + 1] == game[i * 3 + 2]){
            notification.style.visibility = "visible";
            if(myPiece == game[i * 3]){
                notification.innerHTML = `<${myPiece}>✌😁 YOU WON 😁✌</${myPiece}`;
            }
            else{
                notification.innerHTML = `<${myPiece}>😓 YOU LOST 😓</${myPiece}`;
            }
            notification.innerHTML += `<br><button class="rematch" onclick="rematch()">Rematch</button>`;
            return false;
        }
        if(game[i] != "" && game[i] == game[i + 3] && game[i + 3] == game[i + 6]){
            notification.style.visibility = "visible";
            if(myPiece == game[i]){
                notification.innerHTML = `<${myPiece}>✌😁 YOU WON 😁✌</${myPiece}`;
            }
            else{
                notification.innerHTML = `<${myPiece}>😓 YOU LOST 😓</${myPiece}`;
            }
            notification.innerHTML += `<br><button class="rematch" onclick="rematch()">Rematch</button>`;
            return false;
        }
    }
    if(game[0] != "" && game[0] == game[4] && game[4] == game[8]){
        notification.style.visibility = "visible";
        if(myPiece == game[0]){
            notification.innerHTML = `<${myPiece}>✌😁 YOU WON 😁✌</${myPiece}`;
        }
        else{
            notification.innerHTML = `<${myPiece}>😓 YOU LOST 😓</${myPiece}`;
        }
        notification.innerHTML += `<br><button class="rematch" onclick="rematch()">Rematch</button>`;
        return false;
    }
    if(game[2] != "" && game[2] == game[4] && game[4] == game[6]){
        notification.style.visibility = "visible";
        if(myPiece == game[2]){
            notification.innerHTML = `<${myPiece}>✌😁 YOU WON 😁✌</${myPiece}`;
        }
        else{
            notification.innerHTML = `<${myPiece}>😓 YOU LOST 😓</${myPiece}`;
        }
        notification.innerHTML += `<br><button class="rematch" onclick="rematch()">Rematch</button>`;
        return false;
    }

    if(!(game.includes(""))){
        notification.style.visibility = "visible";
        notification.innerHTML = `<${myPiece}>🙌 DRAW 🙌</${myPiece} <br><br><button class="rematch" onclick="rematch()">Rematch</button>`;
        return false
    }

    return true;
}
