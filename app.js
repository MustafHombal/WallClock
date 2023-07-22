const hour1 = document.querySelector(".hour");
const minute1 = document.querySelector(".minute")
const second1 = document.querySelector(".second");


function updateClock() {
    const currentDate = new Date();
    // setTimeout(updateClock,1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12 ) * 360;
    hour1.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute / 60 ) * 360;
    minute1.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second / 60 ) * 360;
    second1.style.transform = `rotate(${secondDeg}deg)`;
}
// updateClock();

setInterval(updateClock, 1000);

// console.log(updateClock);

