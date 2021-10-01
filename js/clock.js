function askName() {
    let name = prompt("Adınızı giriniz:")
    let myName = document.querySelector("#myName")
    myName.innerHTML = name
}
function showTime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day = date.getDay()
    switch (true) {
        case day == 1:
            day = "Pazartesi"
            break;
        case day == 2:
            day = "Salı"
            break;
        case day == 3:
            day = "Çarşamba"
            break;
        case day == 4:
            day = "Perşembe"
            break;
        case day == 5:
            day = "Cuma"
            break;
        case day == 6:
            day = "Cumartesi"
            break;
        case day == 7:
            day = "Pazar"
            break;

    }
    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    console.log(`${hour} : ${minute} : ${second} ${day}`)
    document.querySelector("#myClock").innerHTML = `${hour} : ${minute} : ${second} ${day}`
    setTimeout(showTime, 1000);
}

askName()
showTime()