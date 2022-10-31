function rematch(){
    TotalGames++;
    if(!(Rematch)){
        db.collection('games').doc(roomId).update({
            c0 : "",
            c1 : "",
            c2 : "",
            c3 : "",
            c4 : "",
            c5 : "",
            c6 : "",
            c7 : "",
            c8 : "", 
            twoPlayers: false,
            gameStarted: false,
            gameMiddle: false,
            gameEnded: false,
            rematch : true,
            turn : -1
        }).then(e => {
            notification.style.visibility = "visible";
            notification.innerHTML = '<blink>Waiting for opponent...</blink>';
            let temp = myPiece;
            myPiece = opponentPiece;
            opponentPiece = temp;
            temp = getComputedStyle(document.documentElement).getPropertyValue("--O-clr");
            document.documentElement.style.setProperty('--O-clr', getComputedStyle(document.documentElement).getPropertyValue("--X-clr"));
            document.documentElement.style.setProperty('--X-clr', temp);
            document.querySelector('.user').innerHTML = "You are: " +"<" + myPiece + ">" + myPiece + "</" + myPiece + ">";
            run = false
            document.documentElement.style.setProperty('--cursor', "not-allowed");
            isitmyturn.style.visibility = "hidden";

        });
    }
    else{
        db.collection('games').doc(roomId).update({
            twoPlayers : true,
            gameStarted : true,
            rematch : false,
            turn : TotalGames % 2
        })
        let temp = myPiece;
        myPiece = opponentPiece;
        opponentPiece = temp;
        temp = getComputedStyle(document.documentElement).getPropertyValue("--O-clr");
        document.documentElement.style.setProperty('--O-clr', getComputedStyle(document.documentElement).getPropertyValue("--X-clr"));
        document.documentElement.style.setProperty('--X-clr', temp);
        document.querySelector('.user').innerHTML = "You are: " + "<" + myPiece + ">" + myPiece + "</" + myPiece + ">";
        run = false
        document.documentElement.style.setProperty('--cursor', "not-allowed");
        isitmyturn.style.visibility = "hidden";

    }
}