// is in html?
console.log("Hello?");


//console.log(document.documentElement);// WHOLE HTML IN TEXT --- YESSS

var protoDiv=document.createElement("div");
protoDiv.id="DivDemo";
protoDiv.width=800;
protoDiv.height=400;
//protoDiv.style.position = "absolute";
protoDiv.style.border   = "2px solid";

var canvas=document.createElement("canvas");
canvas.id="CanvasDemo";
canvas.width =500;
canvas.hight=300;
//canvas.style.position = "absolute";
canvas.style.border   = "2px solid";

// always add objects to document!!!!!!!!!!!!!!!!
protoDiv.appendChild(canvas);

document.body.appendChild(protoDiv);
//document.body.appendChild(canvas);


//var canvas1 = document.getElementById("canvasDemo");
var context= canvas.getContext("2d");
context.strokeStyle="green";

var globalWidth=5;

var hype=(function (x,y) {  // initialize IIFE

        var nextPosX=x;
        var nextPosY=y;
        return function DropOfRain(PosX,PosY) {

          context.moveTo(nextPosX,nextPosY);
          context.lineTo(nextPosX+globalWidth,nextPosY +globalWidth );
          context.stroke();
          nextPosX+=globalWidth;
          nextPosY+=globalWidth;

          }

  })(20,20)

for (let i=0;i<20;i++){
    hype(hype.nextPosX,hype.nextPosY);
}

var firePicture = document.createElement("img");
firePicture.src = "C:/JSstuff/fireplace.jpg" ;
//protoDiv.appendChild(firePicture);
protoDiv.style.backgroundImage="url('C:/JSstuff/fireplace.jpg')";
protoDiv.style.backgroundRepeat ="no-repeat";
//firePicture.style.position = "fixed";
//firePicture.style.left=8;
//canvas.style.position="fixed";
//canvas.style.left=500;
//firePicture.style.top=5;

//firePicture.style.zIndex=-20;

//for(let i=0;i< 20;i++){
//DropOfRain(nextPosX,nextPosY);

//}
//context.moveTo(0,0);
//context.lineTo(145,120);
//context.stroke();
