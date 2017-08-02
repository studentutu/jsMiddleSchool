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
//document.body.style.textAlign ="center";

div1.style.border="2px solid";
div1.style.backgroundColor=" rgb(123,123,123)";




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

      document.body.appendChild(canvasMy);
      canvasMy.style.border="2px solid";
      canvasMy.style.position ="absolute";
      canvasMy.style.top= "0";
      canvasMy.style.left= "0";
      canvasMy.style.width="100%";
      canvasMy.style.height= "100%";
      canvasMy.style.zIndex= "-1";



//now to make it all move with function updateFunc
function updateFunc() {

    



}
