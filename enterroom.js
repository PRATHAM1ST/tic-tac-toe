function RandomRoom(){
    if(document.querySelector('.Random')){
        notification.innerHTML = "<blink>Searching...</blink>";
        var PreventListening = db.collection('games').where('twoPlayers', '==', false).where('private', '==', false).where('bothOnline', '==', false).onSnapshot(snapshot=>{
            e = snapshot.docs[0]
            console.log(e);
            db.collection('games').doc(e.id).update({
                twoPlayers : true,
                gameStarted : true,
                turn: 0,
                bothOnline: true
            })
            myPiece = "X";
            opponentPiece = "O";
            turn = 1;
            opponent = 0;

            notification.style.visibility = "hidden";
            notification.innerHTML = "";
            document.querySelector('.user').innerHTML = "You are: <X>X</X>";
            document.querySelector('.room-id').innerHTML = "Room ID: <u>" + e.id + "</u> (click to copy)";
            document.documentElement.style.setProperty('--my-clr', '#a8e0d1');
            document.documentElement.style.setProperty('--opponent-clr', '#F0BB62');
            roomId = e.id;
            gameBegin();
            PreventListening();
        })
        
    }
}

function EnterRoom(){
    if(document.querySelector('.Go')){
        db.collection('games').doc(room.value.trim()).get().then(e=>{
            if(e.exists){
                db.collection('games').doc(e.id).update({
                    twoPlayers : true,
                    gameStarted : true,
                    turn: 0,
                    bothOnline: true
                })
                myPiece = "X";
                opponentPiece = "O";
                turn = 1;
                opponent = 0;
                notification.innerHTML = "";
                notification.style.visibility = "hidden";
                document.querySelector('.user').innerHTML = "You are: <X>X</X>";
                document.querySelector('.room-id').innerHTML = "Room ID: <u>" + e.id + " </u> (click to copy)";
                roomId = e.id;
                document.documentElement.style.setProperty('--my-clr', '#a8e0d1');
                document.documentElement.style.setProperty('--opponent-clr', '#F0BB62');
                gameBegin();
            }
            else{
                if(!(notification.innerHTML.includes("red"))){
                    notification.style.visibility = "visible";
                    notification.innerHTML = "<red>Invalid room Id</red>" + notification.innerHTML;
                }
            }
        })
    }
}