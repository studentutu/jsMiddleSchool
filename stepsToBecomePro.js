// Creating Nav-Bar, Side-Bar, Main-PostScreen


// First - All Body into Gray
document.body.style.backgroundColor= "#ffffff";


// Create big Container in the middle of page!
var divContainer= document.createElement("div");
    divContainer.id= "container";
    document.body.appendChild(divContainer);
    //divContainer.style.border= "2px solid  blue ";
    divContainer.style.position="relative"; // need to be positioned  -- non absolute-- --non fixed-- relative
    divContainer.style.margin= "auto";
    divContainer.style.width="90%";

//created big Div Container in the middle of the page!
createNavBar();
createSideBarWithMainPost();

function createSideBarWithMainPost(){
//using many div tags!
// div Container
//          div block Side-Bar
//                div Upper
//                        <ul>...</ul>
//
//                div lower
//          div Main-PostScreen
//
    let divAllInHere=document.createElement("div");
        divAllInHere.id="AllInHere";
        divContainer.appendChild(divAllInHere);
        //divAllInHere.style.border="2px solid #550055";


    let anotherDiv=document.createElement("div"); // just to align

        anotherDiv.id="centerDiv";
        divAllInHere.appendChild(anotherDiv);
        anotherDiv.style.margin="auto";
        anotherDiv.style.width = "80%";
        anotherDiv.style.padding="0";
        anotherDiv.style.borderRadius="0px 0px 10px 10px";
        //anotherDiv.style.textAlign="center";
        //anotherDiv.style.border= "2px solid  red ";
        //anotherDiv.style.height="100px";

// now create left side and Main Side
    let leftSide=document.createElement("div");
      //leftSide.style.position="absolute";
        leftSide.id="allForLeft";
        leftSide.style.display="block";
        leftSide.style.float="left";
        leftSide.style.width = "20%";
        leftSide.style.padding="0";
        leftSide.style.margin="0";

        createSideBar( leftSide);


        anotherDiv.appendChild(leftSide);
        leftSide.style.height="600px";
        leftSide.style.backgroundColor = "grey";
        //leftSide.style.border="2px solid #550000";

    let mainSide =document.createElement("div");
        mainSide.id="allForMainSide";
        mainSide.style.display="block";
        mainSide.style.float="left";
        mainSide.style.padding="0";
        mainSide.style.margin="0";
        mainSide.style.width = "80%";

        let imgMain=document.createElement("img");
        imgMain.src="https://img-9gag-fun.9cache.com/photo/a888Vj6_700b.jpg";
        mainSide.appendChild(imgMain);
        imgMain.style.height="auto";
        imgMain.style.width="100%";

        anotherDiv.appendChild(mainSide);
        mainSide.style.height ="600px";
        mainSide.style.backgroundColor = "#123456";
        //mainSide.style.border="2px solid #000055";


}

function createNavBar(){
//Creating Nav-Bar  -- <div> Nav-Bar
//                         <div> Yet another divNav-Bar    for proper align need div!
//                                <ul>  .... </ul>       inline,   text-align=center

let navigBar=document.createElement("div");

      navigBar.id="nav-bar";
      divContainer.appendChild(navigBar);
      navigBar.style.display="block";

      //navigBar.style.border="2px solid #550055";


let anotherDivNavBar=document.createElement("div"); // just to align

    anotherDivNavBar.id="centerDivNavBar";
    navigBar.appendChild(anotherDivNavBar);
    anotherDivNavBar.style.margin="auto";
    anotherDivNavBar.style.width = "80%";

    //anotherDivNavBar.style.border= "2px solid  red ";


let listForNavBar=document.createElement("ul");

    listForNavBar.id="inside-Nav-Bar";
    anotherDivNavBar.appendChild(listForNavBar);

    listForNavBar.style.height="40px";
    listForNavBar.style.listStyleType ="none";
    listForNavBar.style.margin= "0";
    listForNavBar.style.textAlign="center";
    listForNavBar.style.padding="0";
    listForNavBar.style.overflow="hidden";
    listForNavBar.style.backgroundColor="#aaaaaa";
    listForNavBar.style.borderRadius ="10px 10px 0px 0px";

    //listForNavBar.style.position="relative";
    //listForNavBar.style.display="block";
    //listForNavBar.style.width="50%";
    createLi("Homepage",listForNavBar);
    createLi("Outside",listForNavBar);
    createLi("Partners",listForNavBar);
    createLi("Exit",listForNavBar);


}// all inside a function createNavBar
var func1;
var func2;
function createLi(text, joinTo) {

      let newLi=document.createElement("li");

        newLi.style.textAlign="center";
        newLi.style.display="block";
        newLi.style.padding="12px";
        newLi.style.float="left";
        newLi.innerHTML= text;
        newLi.style.margin="0";
        joinTo.appendChild(newLi);

        //newLi.style.borderRadius ="10px 10px 0px 0px";
        //let newA=document.createElement("a");
        //newLi.appendChild(newA);
        // newLi.style.overflow="hidden";
        //newLi.style.position="relative";
        //newLi.style.float="left";


        newLi.addEventListener("mouseover",func1=function () {

            newLi.style.backgroundColor="#bbbbba";
        });

        newLi.addEventListener("mouseout", func2=function () {

          newLi.style.backgroundColor="#aaaaaa";
        });

    }//createLi

      function createSideBar(Side) {
        //create Upper side bar and lower side bar
          let UppperSide= document.createElement("div");
            UppperSide.id="Upper";
            UppperSide.style.display="block";
            UppperSide.style.width="100%";
            UppperSide.style.padding="0";
            UppperSide.style.margin="0";
            UppperSide.style.height="200px";
            Side.appendChild(UppperSide);

          let ulSide=document.createElement("ul");
            ulSide.id="ulInsideUpper";
            UppperSide.appendChild(ulSide);
            ulSide.style.listStyleType ="none";
            ulSide.style.margin= "0";
            ulSide.style.padding="0";

            //ulSide.style.textAlign="center";
            //ulSide.style.overflow="hidden";
            ulSide.style.backgroundColor="#aaaaaa";
                createLi("First",ulSide);
                createLi("Second",ulSide);
                createLi("Third",ulSide);
        //customize List Items to full width
        let child=ulSide.firstChild;
          while (child!= null){

            child.style.width ="100%";
            child.style.padding="5px";
            //child.style.color="red";

            child=child.nextSibling;
          }


          //ulSide.firstChild.style.width="100%";
          //  ulSide.firstChild.style.padding="5px";
          //ulSide.firstChild.nextSibling.style.width="100%";
          //  ulSide.firstChild.nextSibling.style.padding="5px";
          //ulSide.firstChild.nextSibling.nextSibling.style.width="100%";
          //  ulSide.firstChild.nextSibling.nextSibling.style.padding="5px";

          let LowerSide= document.createElement("div");
            LowerSide.id="Lower";
            LowerSide.style.display="block";
            LowerSide.style.width="100%";
            LowerSide.style.padding="0";
            LowerSide.style.margin="0";
            //LowerSide.style.height="200px";
            Side.appendChild(LowerSide);

            let imgSide=document.createElement("img");
            imgSide.src="https://cdn.shazoo.ru/152729_WFYFMcPjVi_vot_eto_povorot_yapfilesru.gif";
            imgSide.style.width="100%";
            imgSide.style.height="auto";
            LowerSide.appendChild(imgSide);


      }



//small Test of what is being used
(function () {
  let relativeWidth=0;
  let screenW=window.innerWidth;
  console.log(screenW);
//  if(screenW<)
})()
//small Test of what is being used
