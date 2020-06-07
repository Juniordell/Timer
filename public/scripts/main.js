var inputTime = localStorage.getItem('inTime')

var time = new Date(inputTime).getTime()

var x = setInterval( function() {
    var now = new Date().getTime()
    var t1 = document.querySelector('#t1')
    var t2 = document.querySelector('#t2')
    var t3 = document.querySelector('#t3')
    var t4 = document.querySelector('#t4')

    var distance = time - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    t1.innerHTML = days
    t2.innerHTML = hours
    t3.innerHTML = minutes
    t4.innerHTML = seconds
    
    if (distance < 0 ) {
        var falta = document.querySelector('.falta')
        var tempo = document.querySelector('.tempo')
        var timeOut = document.querySelector('.time-out')

        falta.style.display = 'none'
        tempo.style.display = 'none'
        timeOut.style.display = 'block'
    }
})
