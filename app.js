let time = document.querySelector(".time");
let date = document.querySelector(".date");
let button = document.querySelector(".gettime");

function display(){
    

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
if (month.toString().length == 1) {
  month = "0" + month;
}
if (day.toString().length == 1) {
  day = "0" + day;
}
if (hour.toString().length == 1) {
  hour = "0" + hour;
}
if (minute.toString().length == 1) {
  minute = "0" + minute;
}
if (second.toString().length == 1) {
  second = "0" + second;
}
// return dateTime =
//   year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
return[datenow=year + "/" + month + "/" + day,timenow=hour + ":" + minute + ":" + second]

}
function change() {
//   date.innerHTML = display();
  date.innerHTML = `Date is ${display()[0]}`
  time.innerHTML=`Time is ${display()[1]}`
  
}
button.addEventListener('click',function(){
    setInterval(change,1000)
    button.style.opacity = "0"
})


