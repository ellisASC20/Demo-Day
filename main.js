let submitRef = document.getElementById('submitButton');
var inputRef = document.querySelector('input');
let db = firebase.database().ref();

var string = '';
let char = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
submitRef.onclick = function(event){
    event.preventDefault();

    inputValue = inputRef.value;
    console.log(inputValue);

    let userInput = {
        'input': inputValue
    }

    db.push(userInput);

    
    
    for(i=0; i< char.length; i++){
    let randNum = Math.ceil(Math.random() * 25);
    console.log(randNum);

    string += char[randNum];
    }

fetch('https://api.funtranslations.com/translate/morse.json?text='+string)
.then(response => response.json())
.then(data => console.log(data))

}