let hour = document.querySelector('.hours');
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');


function getCurrentTime(){
    let getDate = new Date();
    let getHour = getDate.getHours();
    let getSeconds = getDate.getSeconds();
    let getMinutes = getDate.getMinutes();

    hour.innerText = (getHour < 10) ? `0${getHour}` : `${getHour}`;
    minutes.innerText = (getMinutes < 10) ? `0${getMinutes}` : `${getMinutes}`;
    seconds.innerText = (getSeconds < 10) ? `0${getSeconds}` : `${getSeconds}`;
}

getCurrentTime();

setInterval(getCurrentTime, 1000);