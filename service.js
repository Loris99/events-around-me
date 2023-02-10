//import { } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF6kq-lfLZLbZObuP9LXKrm5sMG6MFckk",
    authDomain: "fir-database-4f4b9.firebaseapp.com",
    projectId: "fir-database-4f4b9",
    storageBucket: "fir-database-4f4b9.appspot.com",
    messagingSenderId: "20506880285",
    appId: "1:20506880285:web:32f6fe35b4cd8cc01f99f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";

var eventName = document.getElementById("eventName");
var eventDescription = document.getElementById("eventDescription");
var date = document.getElementById("eventDate");
var sbmbtn = document.getElementById("sbmbtn");
var delbtn = document.getElementById("delbtn");
var canbtn = document.getElementById("canbtn");
var updbtn = document.getElementById("updbtn");

//functions
function InsertData() {
    console.log("1");
    set(ref(db, "TheEvents/" + eventName.value), {
        nameOfevent: eventName.value,
        descriptionOfEvent: eventDescription.value,
        dateOfEvent: eventDate.value

    })

        .then(() => {
            alert("data stored sucessfully");
            console.log("2");
        })
        .catch(error => {
            alert("unsuccessful, error" + error);
            console.log("3");
        });
}
//   assign events to insert btn
// sbmbtn.addEventListener('click', InsertData);
//select event based on name
function selectData() {
    const dbref = ref(db);
    get(child(dbref, "TheEvents/" + eventName.value)).then((snapshot) => {
        if (snapshot.exist()) {
            eventName.value = snapshot.val().eventName;
            eventDescription.value = snapshot.val().eventDescription;
            eventDate.value = snapshot.val().eventDate;

        }
        else {
            alert("no data to show");
        }
    })
        .catch(error => {
            alert("unsuccessful, error" + error);
        })
}
//update and edit the data
function updatetData() {
    console.log("1");
    update(ref(db, "TheEvents/" + eventName.value), {
        // nameOfevent: eventName.value,
        descriptionOfEvent: eventDescription.value,
        dateOfEvent: eventDate.value

    })

        .then(() => {
            alert("updated sucessfully");
            console.log("2");
        })
        .catch(error => {
            alert("unsuccessful, error" + error);
            console.log("3");
        });
}

//delete event
function deleteData() {
    console.log("1");
    remove(ref(db, "TheEvents/" + eventName.value), {

    })

        .then(() => {
            alert("removed sucessfully");
            console.log("2");
        })
        .catch(error => {
            alert("unsuccessful, error" + error);
            console.log("3");
        });
}
sbmbtn.addEventListener('click', InsertData);
updbtn.addEventListener('click', updatetData);
delbtn.addEventListener('click', deleteData);