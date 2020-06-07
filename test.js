var d = new Date("06/08/2021").getTime()
var now = new Date().getTime()
var distance = (d - now).toFixed()


console.log(d)
console.log(now)
console.log(distance)

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

console.log(days + ' ' + hours + ' ' + minutes + ' ' + seconds)