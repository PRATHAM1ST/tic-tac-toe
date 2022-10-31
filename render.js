function render(){
    for(let i = 0; i <= 8; i++){
        if(game[i] != ""){
            document.querySelector('.cell-' + i).innerHTML = "<" + game[i] + ">" + game[i] + "</" + game[i] + ">";
        }
        else{
            document.querySelector('.cell-' + i).innerHTML = "";
        }
    }
}