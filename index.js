console.log('This  is  Digital clock');

window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const currentTime = new Date();
	let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
	currentHour =(currentHour<10 ? "0" : "") + currentHour;
    currentMinutes =(currentMinutes<10 ? "0" : "") + currentMinutes;
    currentSeconds =(currentSeconds<10 ? "0" : "") + currentSeconds;
	
    document.querySelector("#hour").innerHTML = currentHour;
	document.querySelector("#minute").innerHTML = currentMinutes;
	document.querySelector("#second").innerHTML = currentSeconds;


    const dateEl = document.querySelector("#date");
    let date = currentTime.getDate();
    if(date >=0 && date <= 9) date = "0" + date;
    let month = currentTime.getMonth() + 1;
    if(month >=0 && month <= 9) month = "0" + month;
    let year = currentTime.getFullYear()
    if(year >=0 && year <= 9) year = "0" + year;
    dateEl.innerHTML = `${date}/${month}/${year}`;

	
	const week = [
		"Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
	];
	
	document.querySelector("#day").innerHTML = week[currentTime.getDay()];
}
