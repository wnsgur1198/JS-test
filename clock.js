const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTime(){
    const date = new Date();
    const minutes = addZero(date.getMinutes());
    const hours = addZero(date.getHours());
    const seconds = addZero(date.getSeconds());
    clockTitle.innerText = 
`${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();