window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    if(roomId){
        db.collection('games').doc(roomId).update({
            bothOnline : false
        })
        if(bothOnline == false){
            db.collection('games').doc(roomId).delete();
        }
    }
});