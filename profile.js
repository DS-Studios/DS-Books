//JavaScript

//Local Storage
if (localStorage) {
    console.log("Local Storage = True");
}
else {
    console.log("Local Storage = False");
}

//StoreData
function StoreData() {
    localStorage.username = document.getElementById("Username").value;
}

//GetLocalStorage
function GetLocalStorage() {
    if (localStorage.username) {
        document.getElementById("span1").innerHTML = localStorage.username;
    }
}
