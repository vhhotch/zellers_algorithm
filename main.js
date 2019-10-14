/* If I was to recreate this again I would:
Change the switch statement to a lookup object like this

 let dayLookup = {
        0: 'Sunday',
        1: 'Monday'
    };

    let day = dayLookup[x];

*/
//these variables are declared globally but not defined globally because they are dependent upon user input via prompt.

let dayOfMonth; 

let month;

let year; 


//this is this initialising function to run the calculator and draws in the other functions. 

const startZellersAlogorithm = () =>{
    alert ("Welcome to Zeller's Algorithm! Do you know on what day of the week you were born? No? Not a problem, we can tell you! Press enter to continue.")
    askDayNo()
}


//function to prompt the user for day of the month they were born
const askDayNo = () =>{
    dayOfMonth = prompt ("What day of the month were you born?")
        if (dayOfMonth.length < 1 || dayOfMonth.length > 2) {
            alert ("That is not a valid entry, please try again.")
            askDayNo();
        }
    askMonth();
}

//function to prompt the user for the month they were born
// need to adjust the prompt box as not all the options display!
const askMonth = () => {
    month = prompt ("Please enter the month you were born, for example April would be 4 and August would be 8.")
        if (parseInt(month) == 0 || parseInt(month) > 12) {
            alert ("That is not a valid entry, please try again")
            askMonth();
        }
    askYear();
}

const askYear = () => {
    year = prompt ("Please enter the year you were born as 4 digits. For example, please put 1989 not 89.")
        if (year.length != 4) {
            alert ("That is not a valid entry, please enter 4 digits.")
            askYear();
        }
    zellerCalculator()
}

const convertToNums = () => {
    dayOfMonth = parseInt (dayOfMonth);
    month = parseInt (month);
    year = parseInt (year);
}

const checkMonth = () => {
    if (month < 3) {
        month += 12;
        year -= 1;
    }
}

const zellerCalculator = () => {
    convertToNums();
    checkMonth ();
    let f = Math.floor(year/100);
    console.log (f)
    let l = year - 100 * f;
    console.log (l)
    let s = Math.floor ((2.6 * month) - 5.39) + Math.floor (l/4) + Math.floor (f/4) + dayOfMonth + l - (2*f);
    console.log (s)
    let x = s - (7 * (Math.floor (s/7)));
    console.log (x)

    switch (x) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
alert (`Great! You were born on ${day}! Thank you for taking part.`)
}

startZellersAlogorithm();

