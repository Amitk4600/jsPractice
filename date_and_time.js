// // // let date = new Date()
// // // console.log(date);
// // // console.log(date.toString());
// // // console.log(date.toDateString());
// // // console.log(date.toLocaleString());
// // // console.log(typeof date);

// // // let d = new Date("october 17 , 2023 3:48:00")
// // // console.log(d);

// // // 6 number use for year, month, day, hour, minute, second

// // const myDate = new Date(2018, 11, 24, 10, 33, 30);
// // console.log(myDate);

// // // 5 number use for year, month, day, hour, minute
// // const newDAte = new Date(2023, 11, 24, 10, 33);
// // console.log(newDAte);
// // // 4 number use for year, month, day, hour
// // const newDAte1 = new Date(2023, 11, 24, 10);
// // console.log(newDAte1);
// // // 3 number use for year, month, day
// // const newDAte2 = new Date(2023, 11, 24);
// // console.log(newDAte2);
// // // 2 number use for year, month
// // const newDAte3 = new Date(2023, 11);
// // console.log(newDAte3);

// // const newDAte4 = new Date(2023);
// // console.log(newDAte4);

// // const newDAte5 = new Date(99, 10, 18);
// // console.log(newDAte5);

// // const createDate = new Date(100000000000)
// // console.log(createDate);
// // const createDate1 = new Date(0)
// // console.log(createDate1);

// // // METHODS

// const mDate = new Date()

// console.log(mDate.toString()); // Wed Oct 18 2023 15:12:57 GMT+0530 (India Standard Time)
// console.log(mDate.toLocaleString()); // 18/10/2023, 3:49:47 pm
// console.log(mDate.toDateString()); //Wed Oct 18 2023
// console.log(mDate.toUTCString()); // Wed, 18 Oct 2023 09:43:47 GMT
// console.log(mDate.toISOString()); // 2023-10-18T09:44:32.587Z



// const fDate =  Date.now();
// console.log(fDate); // 1697622881879

// const date = new Date("2023-10-18");
// console.log(date.getTime()); //1697587200000
// console.log(date.getDate()); // 18
// console.log(date.getDay()); // 3
// console.log(date.getMonth()); //  2023
// console.log(date.getFullYear()); //

// // convert ms to sec 

// console.log(Math.floor(Date.now()/1000)); //1697623380
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// console.log(year);         // 2023


// const month = currentDate.getMonth(); // 0-based (0 = January, 11 = December)
// console.log(month); //9


// const day = currentDate.getDate();
// console.log(day);   //18


// const hours = currentDate.getHours();
// console.log(hours);  // 15


// const minutes = currentDate.getMinutes();
// console.log(minutes); // 40


// const seconds = currentDate.getSeconds();
// console.log(seconds); // 11


// const milliseconds = currentDate.getMilliseconds();
// console.log(milliseconds); //126

// const zone = currentDate.getTimezoneOffset();
// console.log(zone); // -330 (the time zone difference in minute)


// const formatDate = currentDate.toLocaleString('default',{

//    weekday : 'long',
//    year : "2-digit",
//    day:   '2-digit'
// })
// console.log(formatDate); //Wednesday 18 23

const myDate = new Date();


myDate.setFullYear(2023);    // Set the year to 2023
console.log(myDate);

myDate.setMonth(11);        // Set the month to December (0-based, so 11 represents December)
console.log(myDate);

myDate.setDate(25);         // Set the day of the month to the 25th
console.log(myDate);

myDate.setHours(14);        // Set the hours to 14 (2 PM)
console.log(myDate);

myDate.setMinutes(30);      // Set the minutes to 30
console.log(myDate);

myDate.setSeconds(0);       // Set the seconds to 0
console.log(myDate);

myDate.setMilliseconds(0);  // Set the milliseconds to 0

console.log(myDate);

