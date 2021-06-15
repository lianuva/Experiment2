
// ----------------------------------------------------- //
const OtreeBody     = document.getElementsByClassName("_otree-content")[0];

// Time and Click variables
var sPreviousPress  = 'Start';
var dPreviousTime   = new Date().getTime();
var now             = new Date().getTime();
var StartTime       = new Date().getTime();
var diff            = 0;

// Other variables
let chosen          = 0;
let data            = js_vars.data;
let round_number    = js_vars.round_number;
let rownr           = js_vars.rownr;
let category        = js_vars.category;

//save vars
document.getElementById("rownr").value        = rownr + 2;
console.log(rownr + 2);

document.getElementById("chosen").value       = 0;
document.getElementById("category").value     = category;

//display round number to html
document.getElementById("text2").innerHTML    = round_number;

// Create hidden input (Pressed Buttons)
let sButtonClick        = document.createElement("input");
sButtonClick.type       = 'hidden';
sButtonClick.name       = 'sButtonClick';
sButtonClick.id         = 'sButtonClick';
sButtonClick.value      = '';

// Create hidden input (Time Buttons)
let sTimeClick   = document.createElement("input");
sTimeClick.type  = 'hidden';
sTimeClick.name  = 'sTimeClick';
sTimeClick.id    = 'sTimeClick';
sTimeClick.value = '';

//Hidden Next Button
let EndButton               = document.getElementsByClassName('otree-btn-next btn btn-primary')[0];
EndButton.style.visibility  = 'hidden';   

// Game-Wrapper
let GameBody        = document.createElement('div');
GameBody.className  = 'game-body';

// ----------------------------------------------------- //

//get buttons
let clickparticipant1 = document.getElementById("b7.2");
let clickparticipant2 = document.getElementById("b7.3");

//add eventlistener to buttons
clickparticipant1.addEventListener("click", function buttonfunction(){
  clickparticipant1.style.background='rgb(200, 200, 200)';
  document.getElementById("chosen").value = 1;
  EndButton.click();   
});

clickparticipant2.addEventListener("click", function buttonfunction(){
  clickparticipant2.style.background='rgb(200, 200, 200)';
  document.getElementById("chosen").value = 2;
  EndButton.click(); 

});

document.addEventListener("DOMContentLoaded", function(debug=true) {
  OtreeBody.appendChild(GameBody);
  GameBody.appendChild(sButtonClick);
  GameBody.appendChild(sTimeClick);

});

//repeat treatment for participants
treatment = document.getElementById("treatment").value;
language = document.getElementById("language").value;
if (treatment == 1 & language == "English") {
  document.getElementById("treatmenttext").innerHTML = "Remember: The chance that the math task is chosen is 25%, the chance that the verbal task is chosen is 75%";
} else if (treatment == 2 & language == "English") {
  document.getElementById("treatmenttext").innerHTML = "Remember: The chance that the math task is chosen is 75%, the chance that the verbal task is chosen is 25%";
} else if (treatment == 3 & language == "English") {
  document.getElementById("treatmenttext").innerHTML = "Remember: The chance that the math task is chosen is 50%, the chance that the verbal task is chosen is 50%";
} else if (treatment == 1 & language == "Dutch") {
  document.getElementById("treatmenttext").innerHTML = "Onthoud: De kans dat de math task wordt gekozen is 25%, de kans dat de verbal task wordt gekozen is 75%.";
} else if (treatment == 2 & language == "Dutch") {
  document.getElementById("treatmenttext").innerHTML = "Onthoud: De kans dat de math task wordt gekozen is 75%, de kans dat de verbal task wordt gekozen is 25%.";
} else if (treatment == 3 & language == "Dutch") {
  document.getElementById("treatmenttext").innerHTML = "Onthoud: De kans dat de math task wordt gekozen is 50%, de kans dat de verbal task wordt gekozen is 50%.";
} else {
  document.getElementById("treatmenttext").innerHTML = "Remember: The chance that the math task is chosen is 50%, the chance that the verbal task is chosen is 50%";
}

// get values from csv string
Genderp1    = data.split("[")[1].split(",")[rownr];
Matrixp1    = data.split("[")[2].split(",")[rownr];
Verbalp1    = data.split("[")[3].split(",")[rownr];
Agep1       = data.split("[")[4].split(",")[rownr];
Occupp1     = data.split("[")[5].split(",")[rownr];
Genderp2    = data.split("[")[6].split(",")[rownr];
Matrixp2    = data.split("[")[7].split(",")[rownr];
Verbalp2    = data.split("[")[8].split(",")[rownr];
Agep2       = data.split("[")[9].split(",")[rownr];
Occupp2     = data.split("[")[10].split(",")[rownr];

//set gender to text
if (Genderp1 == 1){
  Genderp1 = 'Male'
} else if (Genderp1 == 2){
  Genderp1 = 'Female'
}

if (Genderp2 == 1){
  Genderp2 = 'Male'
} else if (Genderp2 == 2) {
  Genderp2 = 'Female'
}

//set occupation to text
if (Occupp1 == 1 ){
  Occupp1 = 'Working 36-40hrs'
} else if (Occupp1 == 2){
  Occupp1 = 'Working <36hrs'
} else if (Occupp1 == 3){
  Occupp1 = 'Parttime job'
} else if (Occupp1 == 4){
  Occupp1 = 'Looking for job'
} else if (Occupp1 == 5){
  Occupp1 = 'Not looking for job'
} else if (Occupp1 == 6){
  Occupp1 = 'Retired'
} else if (Occupp1 == 7){
  Occupp1 = 'Student'
} else if (Occupp1 == 8){
  Occupp1 = 'Student with parttime job'
} else if (Occupp1 == 9){
  Occupp1 = 'Not able to work'
} else if (Occupp1 == 10){
  Occupp1 = 'Unknown'
}
if (Occupp2 == 1){
  Occupp2 = 'Working 36-40hrs'
} else if (Occupp2 == 2){
  Occupp2 = 'Working <36hrs'
} else if (Occupp2 == 3){
  Occupp2 = 'Parttime job'
} else if (Occupp2 == 4){
  Occupp2 = 'Looking for job'
} else if (Occupp2 == 5){
  Occupp2 = 'Not looking for job'
} else if (Occupp2 == 6){
  Occupp2 = 'Retired'
} else if (Occupp2 == 7){
  Occupp2 = 'Student'
} else if (Occupp2 == 8){
  Occupp2 = 'Student with parttime job'
} else if (Occupp2 == 9){
  Occupp2 = 'Not able to work'
} else if (Occupp2 == 10){
  Occupp2 = 'Unknown'
}
//normalize score
Matrixp1 = ((Matrixp1 / 12) * 10).toFixed(1);
Matrixp2 = ((Matrixp2 / 12) * 10).toFixed(1);
Verbalp1 = ((Verbalp1 / 75) * 10).toFixed(1);
Verbalp2 = ((Verbalp2 / 75) * 10).toFixed(1);

//function get random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

randomvar = getRandomInt (1,3); //random number between 1,2
document.getElementById("randomvar").value = randomvar;

//display veriables to buttons
if (randomvar == 1) {
  document.getElementById("mathp1").textContent = Matrixp1;
  document.getElementById("verbalp1").textContent = Verbalp1;
  document.getElementById("agep1").textContent = Agep1;
  document.getElementById("genderp1").textContent = Genderp1;
  document.getElementById("occupationp1").textContent = Occupp1;
  document.getElementById("mathp2").textContent = Matrixp2;
  document.getElementById("verbalp2").textContent = Verbalp2;
  document.getElementById("agep2").textContent = Agep2;
  document.getElementById("genderp2").textContent = Genderp2;
  document.getElementById("occupationp2").textContent = Occupp2;
} else if (randomvar ==2) {
  document.getElementById("mathp1").textContent = Matrixp2;
  document.getElementById("verbalp1").textContent = Verbalp2;
  document.getElementById("agep1").textContent = Agep2;
  document.getElementById("genderp1").textContent = Genderp2;
  document.getElementById("occupationp1").textContent = Occupp2;
  document.getElementById("mathp2").textContent = Matrixp1;
  document.getElementById("verbalp2").textContent = Verbalp1;
  document.getElementById("agep2").textContent = Agep1;
  document.getElementById("genderp2").textContent = Genderp1;
  document.getElementById("occupationp2").textContent = Occupp1;
} else {
  document.getElementById("mathp1").textContent = Matrixp1;
  document.getElementById("verbalp1").textContent = Verbalp1;
  document.getElementById("agep1").textContent = Agep1;
  document.getElementById("genderp1").textContent = Genderp1;
  document.getElementById("occupationp1").textContent = Occupp1;
  document.getElementById("mathp2").textContent = Matrixp2;
  document.getElementById("verbalp2").textContent = Verbalp2;
  document.getElementById("agep2").textContent = Agep2;
  document.getElementById("genderp2").textContent = Genderp2;
  document.getElementById("occupationp2").textContent = Occupp2;
}



// if (
//   document.fullscreenElement || /* Standard syntax */
//   document.webkitFullscreenElement || /* Safari and Opera syntax */
//   document.msFullscreenElement /* IE11 syntax */
// ) {
//   var fullscreen = 1;
// } else {
//   var fullscreen = 0;
// }

// console.log(fullscreen);


//!from here: code alejandro:
// ----------------------------------------------------- //
//  Function:       1. Creates inputs necessary for Visual Trace
// 
//  Inputs:
//    - btn      : Target button, where evenlistener will be added 
//    - sValue   : String, value
// ----------------------------------------------------- //
function InitializeVT(Body,sNameButtonClicks='sButtonClick',sNameTimeClicks='sTimeClick') {
  if (isEmpty(Body)) {
    Body = document.getElementsByTagName('body')[0];
  }
  // Create hidden input (Pressed Buttons)
  var sButtonClick        = document.createElement("input");
  sButtonClick.type       = 'hidden';
  sButtonClick.name       = sNameButtonClicks;
  sButtonClick.id         = sNameButtonClicks;
  sButtonClick.value      = '';

  // Create hidden input (Time Buttons)
  var sTimeClick   = document.createElement("input");
  sTimeClick.type  = 'hidden';
  sTimeClick.name  = sNameTimeClicks;
  sTimeClick.id    = sNameTimeClicks;
  sTimeClick.value = '';

  // Append Inputs
  Body.appendChild(sButtonClick);
  Body.appendChild(sTimeClick);
}


// ----------------------------------------------------- //
//  Function:       1.  scans all buttons with specific class 
//                      and converts them to Visual-Tracing Buttons 
//  Inputs:
//    - sButtonClass      : class that encompases buttons to add event listener
//    - sActivation       : Target button, where evenlistener will be added 
//    - sDisplayClass     : string with classes that should be activated.
//                          If empty, then activates itself
//  Outputs:
//    - vVT_Buttons : array with all buttons with Visual-Tracing certain visual tracing class
// ----------------------------------------------------- /

function ConvertButtons2VT(sButtonClass,sActivation='click', sDisplayClass) {
  vVT_Buttons = document.getElementsByClassName(sButtonClass);
  //console.log(vVT_Buttons);
  for (let j=0; j<vVT_Buttons.length; j++) {
    //console.log('Added '+sActivation+' to activate '+sDisplayClass);
    AddVisualTracer(vVT_Buttons[j],sActivation,sDisplayClass);
  };
  return vVT_Buttons;
}

// ----------------------------------------------------- //
//  Function:       1. Looks at string value and detects form "img:Name"  
//                  2. In case of image, replaces value for image Tag
//                  3. Adds cleaned value to button 
//  Inputs:
//    - btn      : Target button, where evenlistener will be added 
//    - sValue   : String, value
// ----------------------------------------------------- //
function CheckImage(btn,sValue) {
  // Check if Image:
  
  if (sValue.substring(0, 4)=='img:') {
    //console.log(btn.id+' is image')
    let ButtonImage = document.createElement('img');
    ButtonImage.src = '/static/EcoLabels/'+sValue.substring(4);
    ButtonImage.className = 'button-img'
    btn.appendChild(ButtonImage);
    return 
  } else {
    //console.log(btn.id+' is other')
    btn.innerHTML = sValue;
  }
  
};
// ----------------------------------------------------- //
//  Function:      1. Checks is string is empty and/or undefined
//  Inputs:
//    - str      : Target button, where evenlistener will be added 
//  Output: 
//    - Boolean, true if element is empty and/or undefined
// ----------------------------------------------------- //
function isEmpty(str) {
  return (!str || str.length === 0 );
};

// ----------------------------------------------------- //
//  Function:       1. Adds OnClick or Mouseover/Mouseout  
//                  2. Records Times and Clicks Accordingly
//  Inputs:
//    - btn             : Target button, where evenlistener will be added 
//    - sActivation     : String, activation method for button
//    - DisplayClass    : String, class combination that will be activated
// ----------------------------------------------------- //

function AddVisualTracer(btn,sActivation='click',sDisplayClass) { 
    // add ID as a class
    btn.classList +=' '+btn.id;
    // If there is no activation class, use self id. 
    if (isEmpty(sDisplayClass)) {
      sDisplayClass = btn.id;
    }

  if (sActivation=='click') {
    // If click
    btn.addEventListener('click', function() {
      // Check it's not double click
      if (btn.id != sPreviousPress) {
          // Record new time
          now = new Date().getTime();
          // display specific content and hide rest
          HideEverything();
          DisplayContent(sDisplayClass);
          // record button pressed  
          if (sButtonClick.value) {
            sButtonClick.value = sButtonClick.value+';'+btn.id;
          } else {
            sButtonClick.value = btn.id;
          };
          // change previous to new
          sPreviousPress = btn.id;
          //console.log(sButtonClick.value);
        
        // Check if there was lost of focus
        if (typeof bCheckFocus !== 'undefined' && bCheckFocus==true && TBlur>=dPreviousTime) {
          // substract the blurred time
          diff = (now-dPreviousTime)-(TFocus-TBlur);
        } else {
          diff = (now-dPreviousTime);
        }
        // Add Time
        if (sTimeClick.value) {
          sTimeClick.value = sTimeClick.value+';'+ diff;
        } else {
          sTimeClick.value = diff;
        };
        // Replace previous time
        dPreviousTime = now;
      }
      //console.log(sTimeClick.value);  
    });
    
  } else if (sActivation=='mouseover') {
    // mouseover
    btn.addEventListener('mouseover', function() {
      // Check that new element is pressed
      if (btn.id != sPreviousPress) {
        // Record new time
        dPreviousTime = new Date().getTime();
        // display specific content and hide rest
        HideEverything();
        DisplayContent(sDisplayClass);
        
        // record button pressed  
        if (sButtonClick.value) {
          sButtonClick.value = sButtonClick.value+';'+btn.id;
        } else {
          sButtonClick.value = btn.id;
        };
        // change previous to new
        sPreviousPress = btn.id;
        console.log(sButtonClick.value);
      }
    });
    // Mouseout
    btn.addEventListener('mouseout', function() {
      // Record Event Time
      now   = new Date().getTime();
      // Hide the content & Reset previous item
      sPreviousPress = ' ';
      HideEverything();
      // Check if there is focus checks
      if (typeof bCheckFocus !== 'undefined' && bCheckFocus==true && TBlur>=dPreviousTime) {
        // substract the blurred time
        diff = (now-dPreviousTime)-(TFocus-TBlur);
      } else {
        diff = (now-dPreviousTime);
      }
      // Add Time
      if (sTimeClick.value) {
        sTimeClick.value = sTimeClick.value+';'+ diff;
      } else {
        sTimeClick.value = diff;
      };
      console.log(sTimeClick.value);  
  });
} else {
  console.log('"'+sActivation+'"'+' is not a valid Activation method')
}

};

// ----------------------------------------------------- //
//  Function:    Display Contents from a specific class  
//  Inputs:
//    - DisplayClass    : String, class combination that will be activated
// ----------------------------------------------------- //

function DisplayContent(DisplayClass) {
  let x = document.getElementsByClassName(DisplayClass);
  for(let i = 0; i<x.length; i++) {
    x[i].classList.remove('hidden');
    x[i].classList.add('non-hidden');
  }
};

// ----------------------------------------------------- //
//  Function:     Hide all elements in the table  
// ----------------------------------------------------- //

function HideEverything() {
  let x = document.getElementsByClassName("button-outcome");
  // console.log(x);
  for(let i = 0; i<x.length; i++) {
    x[i].classList.remove('non-hidden');
    x[i].classList.add('hidden');
  }
};