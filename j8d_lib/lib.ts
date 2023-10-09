/* J8D Lite Library */
/*  By Devpz  */

let j8_mainWindow=null;
let j8_lineWidth=1;

let j8_keys={
    "a":false,
    "b":false,
    "c":false,
    "d":false,
    "e":false,
    "f":false,
    "g":false,
    "h":false,
    "i":false,
    "j":false,
    "k":false,
    "l":false,
    "m":false,
    "n":false,
    "o":false,
    "p":false,
    "q":false,
    "r":false,
    "s":false,
    "t":false,
    "u":false,
    "v":false,
    "w":false,
    "x":false,
    "y":false,
    "z":false,
    " ":false,
    "Enter":false,
    "Shift":false,
    "ArrowUp":false,
    "ArrowDown":false,
    "ArrowLeft":false,
    "ArrowRight":false
};

document.addEventListener("keydown",(e)=>{
    j8_keys[e.key]=true;
});

document.addEventListener("keyup",(e)=>{
    j8_keys[e.key]=false;
});

const j8_plot=(x,y,col)=>{
    j8_mainWindow.strokeStyle=col;
    j8_mainWindow.beginPath();
    j8_maiRnWindow.moveTo(x,y);
    j8_mainWindow.lineTo(x+1,y+1);
    j8_mainWindow.stroke();
};

const j8_lineRect=(x,y,w,h,col)=>{
    j8_mainWindow.strokeStyle=col;
    j8_mainWindow.beginPath();
    j8_mainWindow.lineWidth=j8_lineWidth;
    j8_mainWindow.rect(x,y,w,h);
    j8_mainWindow.stroke();
};

const j8_fillRect=(x,y,w,h,col)=>{
    j8_mainWindow.fillStyle=col;
    j8_mainWindow.fillRect(x,y,w,h);
};

const j8_ofRect=(x,y,w,h,ocol,fcol)=>{
    j8_mainWindow.lineWidth=j8_lineWidth;
    j8_mainWindow.fillStyle=fcol;
    j8_mainWindow.strokeStyle=ocol;
    j8_mainWindow.beginPath();
    j8_mainWindow.rect(x,y,w,h);
    j8_mainWindow.fill();
    j8_mainWindow.stroke();
}

const j8_clearRect=(x,y,w,h)=>{
    j8_mainWindow.clearRect(x,y,w,h);
};

const j8_arc=(x,y,r,sA,eA,col)=>{
    j8_mainWindow.strokeStyle=col;
    j8_mainWindow.lineWidth=j8_lineWidth;
    j8_mainWindow.beginPath();
    j8_mainWindow.arc(x,y,r,sA,eA);
    j8_mainWindow.stroke();
};

const j8_lineCircle=(x,y,r,col)=>{
    j8_arc(x,y,r,0,2*Math.PI,col);
};

const j8_fillCircle=(x,y,r,col)=>{
    j8_mainWindow.fillStyle=col;
    j8_mainWindow.beginPath();
    j8_mainWindow.arc(x,y,r,0,2*Math.PI);
    j8_mainWindow.fill();
};

const j8_ofCircle=(x,y,r,ocol,fcol)=>{
    j8_mainWindow.lineWidth=j8_lineWidth;
    j8_mainWindow.strokeStyle=ocol;
    j8_mainWindow.fillStyle=fcol;
    j8_mainWindow.beginPath();
    j8_mainWindow.arc(x,y,r,0,2*Math.PI);
    j8_mainWindow.fill();
    j8_mainWindow.stroke();
};

const j8_line=(x,y,ex,ey,col)=>{
    j8_mainWindow.lineWidth=j8_lineWidth;
    j8_mainWindow.strokeStyle=col;
    j8_mainWindow.beginPath();
    j8_mainWindow.moveTo(x,y);
    j8_mainWindow.lineTo(ex,ey);
    j8_mainWindow.stroke();
};

const j8_setLoopFunction=(func,rate)=>{
    setInterval(func,rate);
};

const j8_setBGColor=(col)=>{
    j8_mainWindow.fillStyle=col;
    j8_mainWindow.beginPath();
    j8_mainWindow.fillRect(0,0,256,240);
};

const j8_drawText=(x,y,font,col,text)=>{
    j8_mainWindow.font=font;
    j8_mainWindow.strokeStyle=col;
    j8_mainWindow.lineWidth=j8_lineWidth;
    j8_mainWindow.beginPath();
    j8_mainWindow.strokeText(text,x,y);
};
