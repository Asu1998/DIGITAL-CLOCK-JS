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
    
    if(hours < 12){
        document.getElementsByClassName("p2")[0].innerText = "GOOD MORNING !! WAKE UP !!";
        document.getElementsByClassName("rp4")[0].innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('mrng.png')";    
    }
    else if(hours >=12 && hours <17){
        document.getElementsByClassName("p2")[0].innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP !!";
        document.getElementsByClassName("rp4")[0].innerText = "LET'S HAVE SOME LUNCH !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('lunch.png')";    
    }
    else if(hours >=17 && hours <20){
        document.getElementsByClassName("p2")[0].innerText = "GOOD EVENING !!";
        document.getElementsByClassName("rp4")[0].innerText = "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('tea.png')";    
    }
    else if(hours >=20 && hours <24){
        document.getElementsByClassName("p2")[0].innerText = "GOOD NIGHT !!";
        document.getElementsByClassName("rp4")[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('sleep.png')";    
    }
    else{
        document.getElementsByClassName("p2")[0].innerText = "GOOD MORNING !! WAKE UP !!";
        document.getElementsByClassName("rp4")[0].innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('mrng.png')";    
    }
    document.getElementById("hour").innerHTML = hour + `<br>hour`;
    document.getElementById("min").innerHTML = min + `<br>min`;
    document.getElementById("sec").innerHTML = sec + `<br>sec`;    
};
setInterval(clock,1000);

var morning = document.getElementById('up');
var afternoon = document.getElementById("lunch");
var code = document.getElementById("play");
var night = document.getElementById("sleep");

// console.log(morning, afternoon, code, night);

var playOne = morning.options[up.selectedIndex].value;
var playTwo = afternoon.options[lunch.selectedIndex].value;
var playThree = code.options[play.selectedIndex].value;
var playFour = night.options[sleep.selectedIndex].value;

function realPlay(){
    document.getElementById("wt").innerText = morning.options[up.selectedIndex].text;
    document.getElementById("lt").innerText = afternoon.options[lunch.selectedIndex].text;
    document.getElementById("nt").innerText = code.options[play.selectedIndex].text;
    document.getElementById("ngt").innerText = night.options[sleep.selectedIndex].text;
}

let hover = () =>{
    document.getElementsByTagName("button")[0].innerText = "Party Time!!";
} 
let after = () =>{
    document.getElementsByTagName("button")[0].innerText = "Set Alarm";
} 