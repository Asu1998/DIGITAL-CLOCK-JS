function clock(){
    var hms = new Date();
    var hour = hms.getHours();
    var min = hms.getMinutes();
    var sec = hms.getSeconds();
    var apm = document.getElementById("apm");
    var hours = hms.getHours();

    if(hour >= 12){
        apm.innerText = 'PM';
    }
    else{
        apm.innerText = 'AM';
    }
    if(hour > 12){
        hour = hour - 12;
    }
    if((hour+"").length === 1){
        hour = "0"+hour;
    }
    if((min+"").length === 1){
        min = "0"+min;
    }
    if((sec+"").length === 1){
        sec = "0"+sec;
    }

    if(dropOne == hours){
        document.getElementsByClassName("p2").innerText = "GOOD MORNING !! WAKE UP !!";
        document.getElementsByClassName("rp4").innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('mrng.png')";
        
    }
    else if(dropTwo == hours){
        document.getElementsByClassName("p2").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP !!";
        document.getElementsByClassName("rp4").innerText = "LET'S HAVE SOME LUNCH !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('lunch.png')";
        
    }
    else if(dropThree == hours){
        document.getElementsByClassName("p2").innerText = "GOOD EVENING !!";
        document.getElementsByClassName("rp4").innerText = "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('tea.png')";
        
    }
    else if(dropFour == hours){
        document.getElementsByClassName("p2").innerText = "GOOD NIGHT !!";
        document.getElementsByClassName("rp4").innerText = "CLOSE YOUR EYES AND GO TO SLEEP !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('sleep.png')";
        
    }
    else{
        document.getElementsByClassName("p2").innerText = "GOOD MORNING !! WAKE UP !!";
        document.getElementsByClassName("rp4").innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('mrng.png')";
        
    }

    document.getElementById("hour").innerHTML = hour + `<br>hour`;
    document.getElementById("min").innerHTML = min + `<br>min`;
    document.getElementById("sec").innerHTML = sec + `<br>sec`;

    
};
setInterval(clock,1000);

var morning = document.getElementById("up");
var afternoon = document.getElementById("lunch");
var code = document.getElementById("play");
var night = document.getElementById("sleep");

var dropOne = morning.options[morning.selectedIndex].text;
var dropTwo = afternoon.options[afternoon.selectedIndex].text;
var dropThree = code.options[code.selectedIndex].text;
var dropFour = night.options[night.selectedIndex].text;

var playOne = morning.options[morning.selectedIndex].value;
var playTwo = afternoon.options[afternoon.selectedIndex].value;
var playThree = code.options[code.selectedIndex].value;
var playFour = night.options[night.selectedIndex].value;

function realPlay(){
    dropOne = morning.options[morning.selectedIndex].text;
    dropTwo = afternoon.options[afternoon.selectedIndex].text;
    dropThree = code.options[code.selectedIndex].text;
    dropFour = night.options[night.selectedIndex].text;

    playOne = morning.options[morning.selectedIndex].value;
    playTwo = afternoon.options[afternoon.selectedIndex].value;
    playThree = code.options[code.selectedIndex].value;
    playFour = night.options[night.selectedIndex].value;
    
    document.getElementById("wt").innerText = dropOne;
    document.getElementById("lt").innerText = dropTwo;
    document.getElementById("nt").innerText = dropThree;
    document.getElementById("ngt").innerText = dropFour;
};
realPlay();

let button = document.getElementById("lbt1");

let bfrHover = () =>{
    button[0].innerHTML = "Party Time !!";
    button.style.backgroundImage = "linear-gradient(to right, #6E54EC 0%, #CB52F8 25%, #FC5EFF 75%, #F1A7C5 100%)";
}

let aftHover = () => {
    button[0].innerHTML = "Set Alarm";
    button.style.backgroundImage = "linear-gradient(to right, #6E54EC 0%, #CB52F8 25%, #FC5EFF 75%, #F1A7C5 100%)";
}
