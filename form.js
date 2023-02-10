function showFormDiv() {

    cardsDiv.style.display = "none";
    formDiv.style.display = "grid";
    eventName.value = "";
    eventDescription.value = "";
    eventDate.value = "";
    document.getElementById('deleteBtn').style.display = "none";
    document.getElementById('submitBtn').style.display = "none";
    document.getElementById('cancelBtn').style.display = "grid";
    document.getElementById('addBtn').style.display = "grid";

    titleChange.innerHTML = "Create Event";
}