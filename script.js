let time = document.getElementById('time');

setInterval(() => {
    let toDay = new Date();
    let milli = toDay.getMilliseconds();
    let sec = toDay.getSeconds();
    let min = toDay.getMinutes();
    let hour = toDay.getHours();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    if (hour === 0) {
        hour = 12;
    }    
    if (milli < 10) {
        milli = '00' + milli;
    } else if (milli < 100) {
        milli = '0' + milli;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    
    if (min < 10) {
        min = '0' + min;
    }
    
    if (hour < 10) {
        hour = '0' + hour;
    }

    time.innerHTML = `${hour}:${min}:${sec}:${milli} ${ampm}`;
}, 1);
