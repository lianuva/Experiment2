  
document.addEventListener("DOMContentLoaded", function(debug=true) {
    //define variables
    let body = document.getElementsByClassName("otree-body")[0];
    //Hidden Next Button
    let EndButton               = document.getElementsByClassName('otree-btn-next btn btn-primary')[0];
    EndButton.style.visibility  = 'hidden'; 
    
    button = document.getElementById("submit");

    button.addEventListener("click", function checkfunction() {
        var getSelectedValue = document.querySelector(   
                'input[name="controlquestion"]:checked');   
                
            if(getSelectedValue != null) {   
                if (getSelectedValue.value == "Click" || getSelectedValue.value == "Look") {
                    document.getElementById("text1").innerHTML = "Incorrect";
                } else if (getSelectedValue.value == "Hover") {
                    document.getElementById("text1").innerHTML = "Correct";
                }  
            }   
            else {   
                document.getElementById("text1").innerHTML   
                    = "You have not selected any option";   
            }   
        
        var getSelectedValue2 = document.querySelector(   
            'input[name="controlquestion2"]:checked');   
            
        if(getSelectedValue2 != null) {   
            if (getSelectedValue2.value == "12" || getSelectedValue2.value == "5") {
                document.getElementById("text2").innerHTML = "Incorrect";
            } else if (getSelectedValue2.value == "10") {
                document.getElementById("text2").innerHTML = "Correct";
            }  
        }   
        else {   
            document.getElementById("text2").innerHTML   
                = "You have not selected any option";   
        }   

        var getSelectedValue3 = document.querySelector(   
            'input[name="controlquestion3"]:checked');   
            
        if(getSelectedValue3 != null) {   
            if (getSelectedValue3.value == document.getElementById("treatment").value) {
                document.getElementById("text3").innerHTML = "Correct";
            } else {
                document.getElementById("text3").innerHTML = "Incorrect";
            }  
        }   
        else {   
            document.getElementById("text3").innerHTML   
                = "You have not selected any option";   
        }   


        if (getSelectedValue.value == "Hover"& getSelectedValue2.value == "10" & getSelectedValue3.value == document.getElementById("treatment").value){
            document.getElementById("text4").innerHTML = "Alle antwoorden zijn correct!  Vanaf hier zal het experiment weer in het engels zijn, maar er zal niet veel tekst meer volgen. Klik 'next' om door te beginnen met het experiment.";
            // participants are also noted that from here the experiment will continue in English
            EndButton.style.visibility  = 'visible';  
        }            
    });


    //! Hotkey for testing
    window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
    }
    switch (event.key) { 
    case "x":
        document.getElementsByClassName('otree-btn-next btn btn-primary')[0].click();
        break;
    default:
        return; // Quit when this doesn't handle the key event.
    
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
    }, true);

});
