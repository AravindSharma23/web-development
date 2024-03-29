const currentTime = document.querySelector("h2");
let selectMenu = document.querySelectorAll("select");
let setAlarmBtn = document.querySelector("button");
let content = document.querySelector(".content");
let alarmTime,isAlarmSet = false;
let ringtone = new Audio("Alarm_ringtone.mp3");
for(let i=12; i>0;i--){
    i= i<10 ? "0"+i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i=59; i>=0;i--){
    i= i<10 ? "0"+i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i=2; i>0;i--){
   let  ampm = i ==1 ? "AM": "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval( ()=>{
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h>=12){
        h = h-12;
        ampm = "PM";
    }
    //IF Hour val is 0 set it as 12
    h = h==0 ? h = 12 : h;

    //adding 0 before hr,min,secs if this val less than 0

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

   currentTime.innerText =`${h}:${m}:${s} ${ampm}`;


   if(alarmTime == `${h}:${m} ${ampm}`){
    ringtone.play();
    ringtone.loop = true;
   }
    
},1000);


function setAlarm(){
        if(isAlarmSet){ // if isAlarmSet is true
            alarmTime=""; // clear the value of Alarm time
            ringtone.pause(); // pause the alarm sound
            content.classList.remove("disable"); // removing disable class from class list
            setAlarmBtn.innerText = "Set Alarm"; 
            return isAlarmSet = false ;
        }



    //getting hour,minute,ampm select tag value;
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please select a valid time to set Alarm")
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");

    setAlarmBtn.innerText = "Clear Alarm";
}


setAlarmBtn.addEventListener("click",setAlarm);


