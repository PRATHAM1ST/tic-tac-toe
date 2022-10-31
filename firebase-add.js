function AddingGameRoom(){
    if(document.querySelector('.New')){
        
        db.collection('games').add({
            id : "",
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
            rematch : false,
            starter : 1,
            turn : -1,
            private: false,
            bothOnline: false
        }).then(e=>{
            roomId = e.id;
            myPiece = "O";
            opponentPiece = "X";
            turn = 0;
            opponent = 1;
            bothOnline = true;

            notification.style.visibility = "visible";
            notification.innerHTML = '<blink>Waiting for opponent...</blink>';

            document.querySelector('.user').innerHTML = "You are: <O>O</O>";
            document.querySelector('.room-id').innerHTML = "Room ID: <u>" + roomId + " </u> (click to copy)";
            document.querySelector('.room-id').addEventListener('click', ()=>{
                navigator.clipboard.writeText(roomId);
            })
            db.collection('games').doc(e.id).update({
                id : e.id
            })
            gameBegin();
        })
    }
}

function AddingPrivateGameRoom(){
    if(document.querySelector('.New')){
        
        db.collection('games').add({
            id : "",
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
            rematch : false,
            starter : 1,
            turn : -1,
            private: true,
            bothOnline: false
        }).then(e=>{
            roomId = e.id;
            myPiece = "O";
            opponentPiece = "X";
            turn = 0;
            opponent = 1;
            bothOnline = true;

            notification.style.visibility = "visible";
            notification.innerHTML = '<blink>Waiting for opponent...</blink>';
            
            document.querySelector('.user').innerHTML = "You are: <O>O</O>";
            document.querySelector('.room-id').innerHTML = "Room ID: <u>" + roomId + " </u> (click to copy)";
            document.querySelector('.room-id').addEventListener('click', ()=>{
                navigator.clipboard.writeText(roomId);
            })
            db.collection('games').doc(e.id).update({
                id : e.id
            })
            gameBegin();
        })
    }
}