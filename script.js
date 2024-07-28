const counter = document.getElementById("counter");

// All of the current date data

let current_time = new Date();
let month = current_time.getMonth();
let day = current_time.getDate();
let hour = current_time.getHours();
let minute = current_time.getMinutes();

// Birthday time

let birthday = new Date(2024, 6, 30, 23, 59);
let birthday_month = birthday.getMonth();
let birthday_day = birthday.getDate();
let birthday_hour = birthday.getHours();
let birthday_minute = birthday.getMinutes();

let months_left = birthday_month - month;
let days_left = birthday_day - day;
let hours_left = birthday_hour - hour;
let minutes_left = birthday_minute - minute;

if (current_time === birthday) {
  counter.innerHTML =
    "Woohoo!!!!!!!! Nice job making it so far! Double digits.";
} else {
  counter.innerHTML = `${months_left} month(s), ${days_left} day(s), ${hours_left} hour(s), ${minutes_left} minute(s) left until your birthday!`;
}
