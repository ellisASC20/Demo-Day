const db = firebase.database().ref();
const borough = document.getElementById("borough");

let button = document.getElementById('submitB');
button.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();

    console.log(borough.value)

    let boroughvalue = {
        choice : borough.value
    }
    db.push(boroughvalue);
}