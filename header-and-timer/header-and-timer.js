document.addEventListener('DOMContentLoaded' , () =>{
    const event = new Date('September 21 2023 00:00:00');
    
    const daysVal = document.querySelector('.time-count-days .time-count-val');
    const hoursVal = document.querySelector('.time-count-hours .time-count-val');
    const minVal = document.querySelector('.time-count-min .time-count-val');
    const secVal = document.querySelector('.time-count-sec .time-count-val');

    const timeCount = () =>{
        let now = new Date();
        let leftUntil = event - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minVal.textContent = minutes;
        secVal.textContent = seconds;
    }

    timeCount();
    setInterval(timeCount, 1000);
});