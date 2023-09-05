const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const birthdayDate = document.querySelector(".my-bithday");
const deadline = document.querySelector(".deadline");
const list = document.querySelectorAll(".deadline-format h4");

let futureBirthday = new Date(2023, 8, 20, 0, 0);
// console.log(futureBirthday);

let year = futureBirthday.getFullYear();
let month = months[futureBirthday.getMonth()];
let day = weekdays[futureBirthday.getDay()];
let date = futureBirthday.getDate();

birthdayDate.textContent = `My Birthday is on ${day}, ${date}th of ${month} ${year}`;

// calculating future time in miliseconds,we would use it to get the no of days,hoursand minutes
const FutureTime = futureBirthday.getTime();

// Calculating our futuredate and the current date i.e today.
function remainingTime() {
  let currentTime = new Date().getTime();
  let totalTime = FutureTime - currentTime;

  // calcuating the millseconds in a day,hours and minutes
  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;

  //dividing the futuretime in milliseconds with the no of milliseconds found in a day,hour and minute.
  let days = Math.floor(totalTime / oneday);
  let hours = Math.floor((totalTime % oneday) / onehour);
  let minutes = Math.floor((totalTime % onehour) / oneminute);
  let seconds = Math.floor((totalTime % oneminute) / 1000);

  let value = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  list.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
  });
  if (totalTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h3>Your Birthday has passed😂😒</h3>`;
  }
}
// countdown seconds
let countdown = setInterval(remainingTime, 1000);
remainingTime();
