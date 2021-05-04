var flightArray = Array();
$('.td').each(function(i, v){
    flightArray[i] = $(this).text();
})
// Show User Info
function selectFlight(event) {
    var thisFlight = $(this).attr('rel');
    console.log(thisFlight);
    // Get Index of object based on id value
    var arrayPosition = flightArray.map(function(arrayItem) { 
        return arrayItem._id; 
    }).indexOf(thisFlight);
    console.log(arrayPosition);
    // Get our User Object
    var thisFlightObject = flightArray[(arrayPosition) + 1];
    console.log(thisFlightObject)
    alert("Confirm your selection! \n" +
            "To: " + flightArray[0] + "\n" +
            "Departure Date: " + flightArray[1] + "\n" +
            "Arrival Date: " + flightArray[2]);
    //Populate Info Box
    $('#location').text(flightArray[0]);
    $('#Ddate').text(flightArray[1]);
    $('#Adate').text(flightArray[2]);
    $('#hours').text(flightArray[3]);
    $('#price').text(flightArray[6]);
    //console.log(thisFlightObject.seat);
};
function payDone(){
        console.log("reached!")
        const name = document.getElementById("Lname").value;
        const card = document.getElementById('cardNumber').value;
        const location = document.getElementById("location").innerText;
        const depDate = document.getElementById("Ddate").innerText;
        const ArrDate = document.getElementById("Adate").innerText;
        const hours = document.getElementById("hours").innerText;
        const total =document.getElementById("price").innerText;
        console.log(card.length)
        if(isNaN(card) || card == "" || name == "" || location == null || depDate == null || ArrDate == null || hours == null || total == null){
            alert('One or more entry is Invalid or Empty. Fill them to continue');
        }
        else{
        let data = '\r Your Ticket MR./MRS. ' + name + '\r\n' +
                    '\r Destination: ' + location + ' \r\n ' +
                    'Departure Date: ' + depDate + ' \r\n ' +
                    'Arrival Date: ' + ArrDate + ' \r\n ' +
                    'Flight Duration: ' + hours + ' \r\n ' + 
                    'Subtotal: ' + total + ' \r\n\n ' +
                    '\r Payment Details: Payment Done In Full \r';
    
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'ticket_goAirLines.txt';
    
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if(window.webkitURL != null){
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else{
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = 'none';
            document.body.appendChild(newLink);
        }
        newLink.click();
   }
}
$(document).ready(function(){
    //populateTable();
    $('#tbody').on('click', 'td a.myHref', selectFlight);
});


