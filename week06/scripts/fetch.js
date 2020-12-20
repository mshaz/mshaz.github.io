function GetBookings(){
    let url = 'https://api.sheety.co/e4e1e3ba7d813589a03b055bfb0ae62f/bookingApp/bookings';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.bookings);
});

}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click",function(){
    GetBookings();

})