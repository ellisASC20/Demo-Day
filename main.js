const db = firebase.database().ref();
const borough = document.getElementById("borough");

let button = document.getElementById('submitB');
button.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();
    const borough = boroughElement.value;

    boroughElement.value = "";

    console.log(borough)

    let boroughvalue = {
        Borough : borough
    }
    database.push(boruoghvalue);
}