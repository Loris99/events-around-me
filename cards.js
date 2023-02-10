//---------------------show event list cards----------------------------
function showCardsDiv() {

    formDiv.style.display = "none";
    if (cardsDiv.style.display === "none") {
        cardsDiv.style.display = "grid";
        // console.log("form display 22" + cardsDiv.style.display)
        titleChange.innerHTML = originalText;
        document.getElementById("listId").style.color = "grey";
    }
    // activeTab();
}
// function activeTab() {
//     if (showCardsDiv)
//         listId.style.backgroundColor = "grey";
// }

//---------------------show event list cards----------------------------

function changeCardColor(eventDate, cardDiv) {
    var todayDate = new Date();
    //console.log('test' + eventDate);
    var inputDateText = new Date(eventDate);
    var todayMonth = ('0' + (todayDate.getMonth() + 1)).slice(-2);
    var todayDay = todayDate.getDate();
    var todayYear = todayDate.getFullYear();
    var todayDateText = todayYear + "-" + todayMonth + "-" + todayDay;
    var todayss = Date.parse(todayDateText);
    var inputs = Date.parse(eventDate);



    if (todayss > inputs) {
        console.log("the input is later than today");
        cardDiv.style.backgroundColor = "red";
    }
    else if (todayss < inputs) {
        console.log("the input is earlier than today");

        cardDiv.style.backgroundColor = "purple";

    }
    else {

        console.log("the input is same as today");
        cardDiv.style.backgroundColor = "green"

    }

}

