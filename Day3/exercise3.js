/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/


let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()
let currentDay = currentDate.getDate()
let currentHour = currentDate.getHours()
let currentMinute = currentDate.getMinutes() 

console.log(`${currentDay}/${currentMonth + 1}/${currentYear} ${currentHour < 10 ? '0' + currentHour : currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute}`) 
//14/4/2026 15:47