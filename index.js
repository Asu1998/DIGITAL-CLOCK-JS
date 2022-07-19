function clock(){
    var hms = new Date();
    var hour = hms.getHours();
    var min = hms.getMinutes();
    var sec = hms.getSeconds();
    var apm = document.getElementById("apm");

    if(hour >= 12){
        apm.innerText = 'PM';
    }
    else{
        apm.innerText = 'AM';
    }
    if(hour > 12){
        hour = hour - 12;
    }
    if(hour < 10){
        "0" + hms.getHours();
    }
    if(min < 10){
        "0" + hms.getMinutes();
    }
    if(sec < 10){
        "0" + hms.getSeconds;
    }
    // const elementOne = document.createElement("img");


    document.getElementById("hour").innerHTML = hour + `<br>hour`;
    document.getElementById("min").innerHTML = min + `<br>min`;
    document.getElementById("sec").innerHTML = sec + `<br>sec`;

    setTimeout(clock,1000);
};
clock();

function clockOne(){
    var date = new Date();
    var hourOne = date.getHours();

    let hr = hourOne;
    let pTwo = document.getElementsByClassName("p2");
    let pFour = document.getElementsByClassName("rp4");
    let dFive = document.getElementsByClassName("rdv5");

    if((hr > 7 && hr < 12)){
        pTwo[0].innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
        pFour[0].innerText = "GOOD MORNING !! WAKE UP !!";
        dFive.style.backgroundImage ="url('mrng.png')";
    }
    else if((hr > 12 && hr < 16)){
        pTwo[0].innerText = "LET'S HAVE SOME LUNCH !!!";
        pFour[0].innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        dFive.style.backgroundImage ="url('lunch.png')";
    }
    else if((hr > 16 && hr < 20)){
        pTwo[0].innerText = "GOOD EVENING !!!";
        pFour[0].innerText = "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING";
        dFive.style.backgroundImage ="url('tea.png')";
    }
    else if((hr > 20 && hr < 26)){
        pTwo[0].innerText = "GOOD NIGHT !!!";
        pFour[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        dFive.style.backgroundImage ="url('sleep.png')";
    }
    // setTimeout(clockOne,1000);
}
clockOne();

let button = document.getElementById('lbt1');
let bfrHover = () =>{
    button.innerHTML = "Party Time !!";
    button.style.backgroundImage = "linear-gradient(to right, #6E54EC 0%, #CB52F8 25%, #FC5EFF 75%, #F1A7C5 100%)";
}

let aftHover = () => {
    button.innerHTML = "Set Alarm";
    button.style.backgroundImage = "linear-gradient(to right, #6E54EC 0%, #CB52F8 25%, #FC5EFF 75%, #F1A7C5 100%)";
}
