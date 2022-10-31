function gameBegin(){
    db.collection('games').where('id', '==', roomId).onSnapshot(snapshot=>{
        let changes = snapshot.docChanges();
        changes.forEach(change=>{
            change = change.doc.data();
            game[0] = change.c0;
            game[1] = change.c1;
            game[2] = change.c2;
            game[3] = change.c3;
            game[4] = change.c4;
            game[5] = change.c5;
            game[6] = change.c6;
            game[7] = change.c7;
            game[8] = change.c8;
            bothOnline = change.bothOnline;
            if(turn == change.turn){
                run = true;
                document.documentElement.style.setProperty('--cursor', "pointer");
                isitmyturn.style.visibility = "visible";
            }
            else if(turn != change.turn){
                run = false;
                document.documentElement.style.setProperty('--cursor', "not-allowed");
                isitmyturn.style.visibility = "hidden";
            }
            if(change.twoPlayers){
                started = change.gameStarted;
                notification.innerHTML = "";
                notification.style.visibility = "hidden";
            }
            if(change.rematch){
                Rematch = true;
                notification.style.visibility = "visible";
                notification.innerHTML += " <blink>Opponent is waiting for you...</blink>";
            }
            else{
                Rematch = false;
            }
            if(change.bothOnline == false && notification.innerHTML.includes('Waiting') == false){
                notification.style.visibility = "visible";
                notification.innerHTML += " <blink>Opponent is OFFLINE.. refresh the page</blink>";
            }
            middle = change.gameMiddle;
            render();
            if((checker() == false) && notification.innerHTML.includes('LOST')){
                console.log(checker() == false && notification.innerHTML.includes('LOST'))
                opponentWins++;
                winUser.innerHTML = myWins;
                winOpponent.innerHTML = opponentWins;
            }
        })
    })
}