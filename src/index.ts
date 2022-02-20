import './index.css';
import { Watch } from './watch';

/*------------ Watch ------------- */
const myWatch = new Watch();

setInterval(updateTime, 1000);

function updateTime() {
    var time = myWatch.getComputedTime().join(":");
    document.getElementById("watchTime").innerHTML = time;
}
/*------------- Buttons ------------*/

// change time increment mode
document.getElementById("changeModeBtn").addEventListener("click", 
    function () {
        myWatch.changeMode();
        var textDisplay = "";
        switch(myWatch.getModificationModeEnum()) {
            case ModificationModeEnum.HOURS :
                textDisplay = "+H";
                break;
            case ModificationModeEnum.MINUTES : 
                textDisplay = "+M";  
                break;
            default : 
                break;
        }
    document.getElementById("modeDisplay").innerText = textDisplay;
    }
);

// increment time
document.getElementById("incrementTimeBtn").addEventListener("click", 
    function () {
        myWatch.incrementTime();
        updateTime();
    }
);

//change light
document.getElementById("lightBtn").addEventListener("click", 
    function () {
        myWatch.switchLight();
        var watchScreen = document.getElementById("watchScreen"); 
        if(myWatch.getIsLightOn()) {
            watchScreen.classList.add("lightOn") ;
        }
        else {
            watchScreen.classList.remove("lightOn");
        }
    }
);
