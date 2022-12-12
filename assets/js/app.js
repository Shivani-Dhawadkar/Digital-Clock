alert("hello, its Shivani!")
let cl = console.log;



function dClock(){let digitalClock= document.getElementById("digitalclock");

let d = new Date();    //object of current date


let hr = d.getHours();
let sec = d.getSeconds();
let min = d.getMinutes();
let session = "AM";

//hr = setZero(hr);
//min = setZero(min);
//sec = setZero(sec);

if (hr >= 12){
    session = "PM"
};
if(hr >= 12){
    hr = hr -12
};
hr = (hr < 10) ? ('0' + hr) : hr;
min = (min < 10) ? ('0' + min) : min;
sec = (sec < 10) ? ('0' + sec) : sec;



//function setZero(num){
  //  return (num < 10) ? ('0' + num) : num;
//};


let result = `${hr} : ${min} : ${sec} ${session}`
cl(hr, min, sec);



digitalClock.innerHTML = result;
setTimeout(dClock, 1000);
}


dClock();