  
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
            if (getSelectedValue3.value == "3") {
                document.getElementById("text3").innerHTML = "Correct";
            } else {
                document.getElementById("text3").innerHTML = "Incorrect";
            }  
        }   
        else {   
            document.getElementById("text3").innerHTML   
                = "You have not selected any option";   
        }   


        if (getSelectedValue.value == "Hover"& getSelectedValue2.value == "10" & getSelectedValue3.value == "3"){
            document.getElementById("text4").innerHTML = "Alle antwoorden zijn correct!  Vanaf hier zal het experiment weer in het engels zijn, maar er zal niet veel tekst meer volgen. Klik 'next' om te beginnen met het experiment.";
            // participants are also noted that from here the experiment will continue in English
            EndButton.style.visibility  = 'visible';  
        }            
    });
});
