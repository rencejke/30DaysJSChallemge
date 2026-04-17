   //exercise level 3

   //Write a program which tells the number of days in a month.
   //Write a program which tells the number of days in a month, now consider leap year.
   

   //1
   const dayMonth = prompt("Enter the month here").toLowerCase()

   if(dayMonth === "january" || dayMonth === "march" || dayMonth === "may" || dayMonth === "july" || dayMonth === "august" || dayMonth === "october" || dayMonth == "december") {
      alert(`${dayMonth} has 31 days.`)
   }
   else if(dayMonth === "april" || dayMonth === "june" || dayMonth === "september" || dayMonth === "november") {
      alert(`${dayMonth} has 30 days.`)
   }
   else if (dayMonth === "february") {
      alert(`${dayMonth} has 28 days.`)
   }
   else{
    alert(`Invalid Date`)
   }


   //2

   const userMonth = prompt("Enter the month here").toLowerCase()
   const yearToday = new Date().getFullYear()

   if(userMonth === "january" || userMonth === "march" || userMonth === "may" || userMonth === "july" || userMonth === "august" || userMonth === "october" || userMonth == "december") {
      alert(`${userMonth} has 31 days.`)
   }
   else if(userMonth === "april" || userMonth === "june" || userMonth === "september" || userMonth === "november") {
      alert(`${userMonth} has 30 days.`)
   }
   else if (userMonth === "february") {

        if (yearToday % 4 === 0) {
             alert(`${userMonth} has 29 days.`)
        } else {
             alert(`${userMonth} has 28 days.`)
            }
   }
   else{
    alert(`Invalid Date`)
   }
   


