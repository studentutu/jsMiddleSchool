// Creating Background with random Shapes - Unions of vectors
// with canvas



// first make big div  - site;

var div1=document.createElement("div");
document.body.appendChild(div1);

  // Align Center!!!
    {
        div1.id="div1";
        div1.style.width="85%";
        div1.style.padding="0";
        div1.style.margin="auto";
        div1.style.height="750px";
    }
//div1.style.display="block";
//div1.style.position ="relative";
// all works like the upper!

div1.style.border="2px solid";
div1.style.backgroundColor=" rgb(123,123,123)";
//document.body.style.height="600px";




// Now Create Canvas  --
//                      Background  of body -- doesn't work this way, just make it canvas {
//position:absolute;
//top:0;
//left:0;
//width:100%;
//height:100%;
//z-index:-1;
//}
//                                  Canvas
//                                      setIntervar(updateFunc, millisec)
//                                              updateFunc(){  code here.... }
var canvasMy=document.createElement("canvas");
var context = canvasMy.getContext("2d");

      document.body.appendChild(canvasMy);
      canvasMy.style.border="2px solid";
      canvasMy.style.position ="absolute";
      canvasMy.style.top= "0";
      canvasMy.style.left= "0";
      canvasMy.style.width="100%";
      canvasMy.style.height= "800px";
      canvasMy.style.zIndex= "-1";
//createFlakesAll();
//firstParticle();
//doMagic();

coolStuff();

//createAdvanced Particles
function doMagic() {

      var number=55;
      var ParticlesArr=[];
      var PartIndex=0;

      for(let i=0;i<number;i++){

          //ParticlesArr.push(new Particle());
          new Particle();
      }


      function Particle() {

          this.x=Math.round(Math.random()*canvasMy.width);
          this.y=Math.round(Math.random()*canvasMy.height);
          this.gravity=1;

          if(Math.random() < 0.5){

                this.velX=Math.random()*-3;
                this.velY=Math.random()*-2;
          } else{

                this.velX=Math.random()*3;
                this.velY=Math.random()*2;
          }


          ParticlesArr[PartIndex]=this;
          PartIndex++;
      }

      Particle.prototype.draw = function () {
            context.fillStyle="rgb(200,200,200)";
            context.fillRect(this.x, this.y, 2,2);
            this.x+=this.velX;
            this.y+=this.velY;
            this.velY+=this.gravity;
            if(this.y> 100){
                this.velY*=-0.5;
            }

      };

      function Upgrade() {

            context.fillStyle="#000";
            context.rect(0,0, canvasMy.width, canvasMy.height);// start x , y , width, height
            context.fill();


                for(let i=0;i<ParticlesArr.length;i++){
                    ParticlesArr[i].draw();
                  }
      }

      setInterval(Upgrade, 50);

}














//create Something like Particles
function firstParticle() {


            var PosX=10;
            var PosY=canvasMy.height/2;

            // to make velocity and gravity
            var velY=- 10; // goes up
            var velX=+1;
            var gravity = +1; // goes down

            setInterval(particlePrimitiv, 30);

            function particlePrimitiv() {

                // clear
                context.fillStyle="#000";
                context.rect(0,0, canvasMy.width, canvasMy.height);// start x , y , width, height
                // draw "FILL"
                context.fill();

                // crate Physics!!!
                      {
                        PosY+=velY;
                        PosX+=velX;
                        //velY+=gravity; // start fizzing around!!!
                      }

                  // bounce Effect
                        {
                          if( PosY> 100){
                             //just bounce
                              //  velY*=-1;
                            // damp
                              velY*=-0.5;
                              PosY=100;

                              // slow down with x
                              velX*=0.5;
                           }


                        }
                      velY+=gravity;
                  context.fillStyle="rgb(255,255,255)";
                  context.fillRect(PosX,PosY, 10,10);
                  //context.fill();

}
}




















function createFlakesAll(){
      var flakes=150;
      var SFlake=new Image();
      SFlake.src="http://stitchontime.com/osc/images/snowflakes102.gif";
      //can make Scale direct in drawImage!
      //SFlake.width="5";
      //SFlake.height="5";
      //console.log(SFlake.width);
      var x=0;
      var  y=0;
      var vel=0;

      var FlakeArr=[];
            {
            "use strict";
            for (let i = 0; i < flakes; i++) {
              FlakeArr.push(new createFlake);
            }
      }


      setInterval(updateFunc, 30);
      // updateFunc  don't use it with  setInterval inside - made crazy shit!
      function createFlake() {
            this.x=Math.round(Math.random() * canvasMy.width);
            this.y =Math.round(Math.random() * canvasMy.height);
            this.vel=Math.round(Math.random()*2 +1);
      }
      //now to make it all move with function updateFunc
      function updateFunc() {

            //reset Image
            context.fillStyle="#000";
            context.rect(0,0, canvasMy.width, canvasMy.height);// start x , y , width, height
            // draw "FILL"
            context.fill();

            for (let i = 0; i <FlakeArr.length; i++) {
                  let smallFl=FlakeArr[i];

                  context.drawImage(SFlake, smallFl.x, smallFl.y, 30,30); // 20,20 (src , posX,posY )  (src, Posx,PosY, scaleWidth, scaleHeight)
                  smallFl.y+=smallFl.vel;
                  if(smallFl.y >= canvasMy.height){
                    smallFl.y= 0;
                  }
            }

            //requestAnimationFrame(updateFunc);

      }
}




// real cool Stuff

function coolStuff(){

        var canvas = canvasMy,
            c = canvas.getContext("2d"),
            size = canvas.width,
            centerX = size / 2,
            centerY = canvas.height / 2,
            rotX = 0, rotY = 0,
            perspective = 200,
            currX, currY,
            pointNum = 1500,
            points = [],
            radius = 130, x, y, z,
            TWO_PI = Math.PI * 2,
            angleA = 0, angleB = 0;



        c.fillStyle = "black";
        c.fillRect(0, 0, size, size);

        for (var i = 0; i < pointNum; i++){
          angleA = TWO_PI * Math.random();
          angleB = TWO_PI * Math.random();
          x = radius * Math.cos(angleA) * Math.sin(angleB);
          y = radius * Math.sin(angleA) * Math.sin(angleB);
          z = radius * Math.cos(angleB);
          points.push(x, y, z);
        }


        setInterval(function(){
          rotX += 0.05;
          rotY += 0.05;
          c.fillStyle = "black";
          c.fillRect(0, 0, size, size);

          c.fillStyle = "rgba(255,255,255,0.5)";

          for (var i = 0; i < pointNum; i+=3){
            point3d(points[i], points[i + 1], points[i + 2]);
            c.fillRect(currX, currY, 5, 5);
          }

        }, 30);

        // based on code by Andries Odendaal - www.wireframe.co.za
        function point3d(x, y, z){
          var cosX = Math.cos(rotX),
              cosY = Math.cos(rotY),
              sinX = Math.sin(rotX),
              sinY = Math.sin(rotY);

          var posZ = z * cosX - x * sinX,
              posX = z * sinX + x * cosX,
              posY = y * cosY - posZ * sinY,
              posZ = y * sinY + posZ * cosY,
              depth = 1/(posZ/perspective+1);

          currX = posX * depth + centerX;
          currY = posY * depth + centerY;
        }


}
    //






//

// Initialisation

//var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#888',
  background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
  interactive: true,
  speed: 'medium',
  density: 'high'
};
//var particleCanvas = new ParticleNetwork(canvasMy, options);
