function testFucnction() {
    document.getElementById("page_title").innerHTML = "Sike, you need way more than HTML scrub"
    setTimeout(() => {
        document.getElementById("intro_paragraph").innerHTML = "We javascripting and CSSing now buddy"
    }, 3000);
  }

let myInterval;

function startPage(){
    document.getElementById("sans_display").style.display = "block";
    
    setTimeout(() => {
        myInterval = setInterval(displayText, 50);
    }, 1500);

}

let dialog =    ["* Bet you didn't expect to see me!", 
                "* No turtles this time I'm afraid",
                "* Ya'll ready for this?"];
displayedDialog = "";

function displayText() {
    displayedDialog += dialog[0].charAt(0);
    dialog[0] = dialog[0].substring(1);

    if(dialog.length %3 == 0){
        let audio = document.getElementById("sans_voice");
        audio.volume = 0.5;
        audio.play();
        document.getElementById("sans_text_top").innerHTML = displayedDialog;
    }else if(dialog.length %3 == 2){
        let audio = document.getElementById("sans_voice");
        audio.volume = 0.5;        audio.play();
        document.getElementById("sans_text_middle").innerHTML = displayedDialog;
    }else if(dialog.length %3 == 1){
        let audio = document.getElementById("sans_music");
        audio.volume = 0.5;
        audio.play();
        document.getElementById("sans_text_bottom").innerHTML = displayedDialog;
    }

    if(dialog[0] == ""){
        displayedDialog = "";
        pauseDialog();
    }
}

function pauseDialog(){
    clearInterval(myInterval);
    dialog.shift();

    if(dialog.length != 0){
        console.log(myInterval);
        setTimeout(() => {
            myInterval = setInterval(displayText, 50);
        }, 1500);
    }else{
        setTimeout(() => {
            showButton();
        }, 500);
    }
}

function showButton(){
    let audio = document.getElementById("sans_music");
    audio.volume = 0.2;
    audio.play();
    document.getElementById("wrapper").style.backgroundSize = "1800% 1800%";
    document.getElementById("start_button").style.display = "inline-block";
    document.getElementById("sans_dance").style.display = "inline-block";
    document.getElementById("sans").src = "sans_sans.jpg"
}

function openPage(){
    let audio = document.getElementById("sans_music");
    audio.pause();
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("sans_display").style.display = "none";
    document.getElementById("main_content").style.display = "block";
}
