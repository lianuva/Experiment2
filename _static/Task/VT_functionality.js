
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
let length          = js_vars.length;
let category        = js_vars.category;
document.getElementById("chosen").value = 0;

// console.log (data)

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

let clickparticipant1 = document.getElementById("b7.2");
let clickparticipant2 = document.getElementById("b7.3");

clickparticipant1.addEventListener("click", function buttonfunction(){
  document.getElementById("chosen").value = 1;
  EndButton.click(); 
});

clickparticipant2.addEventListener("click", function buttonfunction(){
  document.getElementById("chosen").value = 2;
  EndButton.click(); 
});

document.addEventListener("DOMContentLoaded", function(debug=true) {
  OtreeBody.appendChild(GameBody);
  GameBody.appendChild(sButtonClick);
  GameBody.appendChild(sTimeClick);

});

treatment = document.getElementById("treatment").value;

if (treatment == 1) {
  document.getElementById("treatmenttext").innerHTML = "The chance that the math task is chosen is 25%, the chance that the verbal task is chosen is 75%";
} else if (treatment == 2) {
  document.getElementById("treatmenttext").innerHTML = "The chance that the math task is chosen is 75%, the chance that the verbal task is chosen is 25%";
} else if (treatment == 3) {
  document.getElementById("treatmenttext").innerHTML = "The chance that the math task is chosen is 50%, the chance that the verbal task is chosen is 50%";
} else {
  document.getElementById("treatmenttext").innerHTML = "The chance that the math task is chosen is 50%, the chance that the verbal task is chosen is 50%";
}

//get random rownumber for string
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  //console.log(Math.floor(Math.random() * (max - min) + min));
  //console.log("test");
}

let row = getRandomInt(1, length);

console.log(row);

// get values from csv string

Genderp1    = data.split("[")[1].split(",")[row];
Matrixp1    = data.split("[")[2].split(",")[row];
Verbalp1    = data.split("[")[3].split(",")[row];
Agep1       = data.split("[")[4].split(",")[row];
Occupp1     = data.split("[")[5].split(",")[row];
Genderp2    = data.split("[")[6].split(",")[row];
Matrixp2    = data.split("[")[7].split(",")[row];
Verbalp2    = data.split("[")[8].split(",")[row];
Agep2       = data.split("[")[9].split(",")[row];
Occupp2     = data.split("[")[10].split(",")[row];

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


console.log(category);
console.log(Genderp1);
console.log(Matrixp1);
console.log(Verbalp1);
console.log(Agep1);
console.log(Occupp1);
console.log(Genderp2);
console.log(Matrixp2);
console.log(Verbalp2);
console.log(Agep2);
console.log(Occupp2);


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