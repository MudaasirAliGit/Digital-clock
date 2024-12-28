setInterval(function(){
    let date = new Date();
    let day = date.getDay();
    let weekdays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // get elements by id
    let days = document.getElementById("days")
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let AmORpm = document.getElementById("ampm");

    let amORpm ="AM";
    
    if(hour<10){
        hour = "0"+hour;    
    }
    if(minute<10){
        minute = "0"+minute;
    }
    if(second<10){
        second = "0"+second;
    }
    
    if(hours>12){
        amORpm = "PM";
    }
    days.textContent = weekdays[day];
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
    AmORpm.textContent = amORpm;
},1000);