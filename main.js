const countdown = () => {
    const finalDate = new Date('March 31, 2022 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeGap = finalDate - currentTime;

    //How time works - muda unafanya vipi kazi
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculated time
    const textDay = Math.floor(timeGap / day);
    const textHour = Math.floor((timeGap % day) / hour);
    const textMinute = Math.floor((timeGap % hour) / minute);
    const textSecond = Math.floor((timeGap % minute) / second);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;
};

setInterval(countdown, 1000);

//Getting the modal
const modal = doument.getElementById('myModal');