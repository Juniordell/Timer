function troca() {
    var inputTime = document.querySelector("#time").value
    var now = new Date().getTime()
    var time = new Date(inputTime).getTime()
    console.log()

    if (time - now < 0 || !(inputTime[0] == 0 || inputTime[0] == 1 || inputTime[0] == 2 || inputTime[0] == 3)) {
        var error = document.querySelector('.error')
        return error.style.display = 'block'
    }

    else {
        localStorage.setItem('inTime', inputTime)
        window.location = '/time'
    }

}

function troca2() {
    window.location = '/'
}