var map = [];
 
map[0] = "Corner Kingdom";
map[1] = "Dwarf Forest";
map[2] = "Elf Empire";
map[3] = "Fairy Kingdom";
map[4] = "Hidden Place";
map[5] = "Northern Kingdom";
map[6] = "Red Riding Hood Kingdom";
map[7] = "Corner Kingdom";
map[8] = "Sleeping Kingdom";
map[9] = "Troll Goblin Territory";




var images = [];

images[0] = "cornerKingdom.jpg";
images[1] = "dwarfForest.png";
images[2] = "elfIEmpire.png";
images[3] = "fairyKingdom.jpg";
images[4] = "hiddenPlace.jpg";
images[5] = "northernKingdom.jpg";
images[6] = "redRidingHoodKingdom.jpg";
images[7] = "cornerKingdom.jpg";
images[8] = "sleepingKingdom.jpg";
images[9] = "trollGoblinTerritory.jpeg";

var passengerInput = 4;
var prize = 0;
var prizemessage = "<br>" +"Congradulation, You've got a prize thet you'll use it later on :";
var regretMessage = "<br>" +"Oh! no we don't have such a prize";
var finalprizemessage = "<br>" +"The total acumulated points are :";
var totalScore =0;
var prizeItems = ["key", "shovel", "coins"];

var keyFound = false;
var shovelFound = false;
var coinsFound = false;

var prizeImages=[];   
prizeImages[0] = "key.png";
prizeImages[1] = "shovel.png";
prizeImages[2] = "coins.png";
    


var imagesView = document.getElementById("display");
imagesView.textContent = map[passengerInput];

 //main image        
var imagesView_2 = document.getElementById("image");
 //prize images
var imageView_3 = document.getElementById("img_2");
 //improuved boat image
var imageUse =document.getElementById("boat");
    
 //treasure hunt boxes   
var imageUse_2 =document.getElementById("trH");
 //image of help  
var helpOptions =document.getElementById("emP");
var userInput = "";

var usePrize_img= [];  
var displayMessage = "";

usePrize_img[0] ="boat.png";
usePrize_img[1] ="inHome.png";
usePrize_img[2] ="treasureHn.png"; 
    
    
var history = "";
var backpack =[];
var removed ="";
var index="";
    
var blockedRoadMessage ="The road ahead is blocked.";
var directions =["north","east","west","south","prize","help","use"];
var choosedirection = "";

var jsonSTR = JSON.stringify(prizeItems);
    
var gameInput = document.querySelector("#input");
var button = document.querySelector("button");
var saveMyGame =  document.querySelector("save");
var getMyGame = document.querySelector("getAllGame");
    
button.style.cursor = "pointer";


button.addEventListener ("click",handlerEvent, false);

  
         
render();
         
function handlerEvent(){
    game();
}
function game() {
    
    userInput = gameInput.value;
    userInput = userInput.toLowerCase();
    
    displayMessage ="";
    choosedirection = "";
    
    for(var i =0; i <directions.length;i++){
        
        if (userInput.indexOf(directions[i]) !== -1){    
    
    
         choosedirection = directions[i];
         console.log ("User decided to go "+ choosedirection);
         break;
    
        }
    }
 
     switch(choosedirection)  
     {
         case "use":
             useItems(); 
             render();
             break;
         case "help":
         
            helpUser();
        
             break;
         case "prize":
             findPrize();
             break;
    
         case "north":
       
            if(passengerInput >=3 ) {
             
             passengerInput -=3;
             }
             else{
                 displayMessage = "<br>" +blockedRoadMessage
                 history += displayMessage+'<br>';
             }
             break;
         case "east":
             if (passengerInput %3 != 2){
         
             passengerInput +=1;
             }
             else{
                 displayMessage ="<br>" +blockedRoadMessage + '<br>';
                 history += displayMessage + '<br>';
             }
             break;
         case "south":
             if (passengerInput <6){
             passengerInput +=3;
             }
             else{
                 displayMessage = "<br>" +blockedRoadMessage;
                 history += displayMessage + '<br>';
             }
             break;
         case "west":
       
             if(passengerInput %3 !=0){
             passengerInput -=1;
             }
             else{
                 displayMessage ="<br>" +blockedRoadMessage; 
                 history += displayMessage + '<br>';
             }
             break;
         default:
             {
                displayMessage = "<br>"+"I don't know what that means." 
            
             
             }
         
        }
     console.log('Game() Function. Display message: ' + displayMessage);   
     render();      

}
function Hide()
{

imageUse.style.visibility="hidden";
}
function Hide_2()
{

imageUse_2.style.visibility="hidden";
}  
function useItems() {
    console.log('useItems function called.');
    if (passengerInput == 4 && coinsFound) {
        console.log("Location 4 to display BOAT?");
       
        displayMessage ="<br>" +"Wow you could improve your boat!" ;
        imageUse.src ="../Advanture_Game/game_images/"+usePrize_img[0];
        setTimeout(function(){Hide()}, 5000);       

        
        
    }
      
    if(passengerInput ==2 && keyFound){ 
      
       displayMessage ="<br>" +"Wow you entered the inside of the castle now!"+"<br>"+"path" ;
    }
    if(passengerInput ==3 && shovelFound) {
        
        displayMessage ="<br>"+"You found a treasure hunt.";
        imageUse_2.src = "../Advanture_Game/game_images/"+usePrize_img[2];
        setTimeout(function(){Hide_2()}, 5000); 
    } 
      
  }  
 
 function helpUser() {
     console.log("Do you need help?");
     displayMessage = "<br>"+"You can take a look at the map to figure out where to go." 
     helpOptions.src = "../Advanture_Game/game_instruction.png";
     helpOptions.style.visibility = "visible";   
 }  
function changeImage(){
    
      
        imagesView_2.src ="../Advanture_Game/game_images/"+usePrize_img[1];
      
}    
 
function render(){
        console.log("Are you in render?");
        imagesView.textContent =map[passengerInput];
    
    //changing the big and main image
        imagesView_2.src= "../Advanture_Game/game_images/" + images[passengerInput];
    if(passengerInput ==2 && keyFound){
        setTimeout(function(){changeImage()}, 2000);
        
    }
        
        imagesView.innerHTML += displayMessage ;
        
}  
    
function findPrize() {
    
   
    console.log('Display Message inside findprize: ' + displayMessage);
                
             if(passengerInput== 1){
                 console.log("Your prize is Key");
                 prize += +5;
                 displayMessage = "<br>" + prizemessage+ "<br>" + finalprizemessage + prize;
                 console.log("Please let us know if you can read this message" +displayMessage);
                 history += displayMessage;
                 imageView_3.innerHTML += '<img src=../Advanture_Game/game_images/' + prizeImages[0] +'>';
                 pickUpPrize();
                 keyFound = true;
                 console.log('Found Key ');
               
                 
             }
            if(passengerInput ==6){
                 console.log("Your prize is Shovel");
                 prize += +5;
                 
                
                 displayMessage="<br>" +prizemessage+"<br>"+finalprizemessage + prize;
                      console.log("findPrize function called. PassengerInput and prize value: " + displayMessage );
                 history += displayMessage;
                 //show the small prizes images
                 imageView_3.innerHTML += '<img src =../Advanture_Game/game_images/' + prizeImages[1]+ '>';  
                 pickUpPrize();
                 shovelFound = true;
                 console.log('Found Shovel ');
                
             }
            if(passengerInput ==8){
                 console.log("Your prize is Coin");
                 prize += +5;
                 
                 
                 displayMessage="<br>" + prizemessage +"<br>"+finalprizemessage + prize;
                 history += displayMessage + '<br>';
                 imageView_3.innerHTML += '<img src =../Advanture_Game/game_images/' + prizeImages[2]+'>';
                
                 pickUpPrize();
                 coinsFound = true;
                 console.log('Found Coin ');
                 
             }

               else if (passengerInput !=8 && passengerInput !=6  && passengerInput !=1){
        displayMessage = "<br>"+"There is no prize in this room try the other room!";
        console.log(displayMessage);
    }
            
    

}
    
    
function pickUpPrize(){
    
    if(passengerInput ==1){
    index = prizeItems.indexOf("key");
        console.log("the index of key is: "+index);
                     if(index ==0){
                         removed = prizeItems.shift();
                         
                         console.log("The removed item is: "+removed);
                     }
                     backpack.push(removed);
                     console.log("The collected prize are: " +backpack);
                     //displayMessage = "<br>"+"Your backpack contains: "+backpack;
                     
                    }
  
    
    if(passengerInput ==6){
    index = prizeItems.indexOf("shovel");
                     if(index >-1){
                         removed = prizeItems.splice(index,1);
                         
                         console.log("The removed item is: "+removed);
                     }
                     backpack.push(removed);
                     console.log("The collected prize are: " +backpack);
                     //displayMessage = "<br>"+"Your backpack contains: "+backpack;
                     
                    }
    if(passengerInput ==8){
     index = prizeItems.indexOf("coins");
                     if(index >-1){
                        removed = prizeItems.splice(index,1);
                         
                         console.log("The removed item is: "+removed);
                     }
                     backpack.push(removed);
                     console.log("The collected prize are: " +backpack);
                     //displayMessage = "<br>"+"Your backpack contains: "+backpack;    
        
        
    }
   
}

window.saveGame = function(){
    console.log("Did you go to this function?");
    

    var saveGameVar = [passengerInput, prize, prizemessage, regretMessage, finalprizemessage, totalScore,
        userInput, displayMessage, history, blockedRoadMessage, choosedirection, removed, index, keyFound, shovelFound, coinsFound];
        
        var saveVars = localStorage.setItem('gameVars', JSON.stringify(saveGameVar));
       // var test = localStorage.setItem('Keys', JSON.stringify(prizeItems));
        //localStorage.setItem("keys", prizeItems);
        
}
window.getGame = function() {
        console.log("Did you go to this function 2?");
   
        var gameVarsSTR = localStorage.getItem('gameVars');
     console.log ("The gameVarSTR is :" + gameVarsSTR);
        var jsonSTR = localStorage.getItem('keys');
    console.log("The jasonSTR is: "+jsonSTR);
        var getGameVars= JSON.parse(gameVarsSTR);
    console.log("The getGameVars is: "+getGameVars);
//        var getGameP = JSON.parse(jsonSTR);
//        console.log("The getGameP is:" + getGameP);

        passengerInput = getGameVars[0];
        prize = getGameVars[1];
        prizemessage = getGameVars[2];
        regretMessage = getGameVars[3];
        finalprizemessage = getGameVars[4];
        totalScore = getGameVars[5];
        userInput = getGameVars[6];
        history = getGameVars[7];
        blockedRoadMessage = getGameVars[8];
        choosedirection = getGameVars[9];
        removed = getGameVars[10];
        index = getGameVars[11];
        keyFound = getGameVars[12];
        shovelFound = getGameVars[13];
        coinsFound = getGameVars[14];
        
        render();
        if (keyFound) {
            imageView_3.innerHTML += '<img src=../Advanture_Game/game_images/' + prizeImages[0] + '>';
        }
        if (shovelFound) {
            imageView_3.innerHTML += '<img src =../Advanture_Game/game_images/' + prizeImages[1] + '>';
        }
        if (coinsFound) {
            imageView_3.innerHTML += '<img src =../Advanture_Game/game_images/' + prizeImages[2] + '>';
        }

    }
