window.onload = function () {

const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;

let y = 50
let x = 50

function loop() {
    j8_clearRect(0,0,256,240);
    j8_setBGColor("lightskyblue");
    j8_lineWidth=2;
    j8_ofRect(x,y,10,10,"maroon","red");

    if(j8_keys.ArrowUp){
        y-=1;
    }
    if(j8_keys.ArrowDown){
        y+=1;
    }
    if(j8_keys.ArrowLeft){
        x-=1;
    }
    if(j8_keys.ArrowRight){
        x+=1;
    }
}

}

j8_setLoopFunction(loop,10);
