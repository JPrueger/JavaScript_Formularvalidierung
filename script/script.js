window.addEventListener('load', function(){


    // Referenz in Variable speichern (Class j-form in HTML vergeben)
    var form = document.querySelector('.j-form');


    form.addEventListener('submit', function(event){

        // ###################### (4 Eingabefelder) FULL NAME ######################

        var isValid = true;

        var input = document.querySelector('.j-input_full_name');

        var text = input.value;
        
        // Alle Leerzeichen in FULL NAME entfernen:
        if(text.trim() === "") {
            // Wenn Eingebefeld leer ist, soll das Abschicken verhindert werden
            event.preventDefault();
            // Fehler der ausgegeben wird, wenn Feld leer ist
            document.querySelector('.j-error_full_name').textContent = "Full name cannot be left blank!";
            document.querySelector('.j-input_full_name').classList.add('j-error_full_name_input');
            isValid = false;
        }
        else {
            // wenn im Nachhinein dann doch etwas eingegeben wird, soll Error Message "Full name cannot be left blank!" und roter Rahmen verschwinden
            document.querySelector('.j-input_full_name').classList.remove('j-error_full_name_input');
            document.querySelector('.j-error_full_name').textContent = "";
        }



        // ###################### (4 Eingabefelder) ADDRESS ######################

        var input = document.querySelector('.j-input_address');
    
        var text = input.value;
        
        // Alle Leerzeichen in ADDRESS entfernen:
        if(text.trim() === "") {
            // Wenn Eingebefeld leer ist, soll das Abschicken verhindert werden
            event.preventDefault();
            // Fehler der ausgegeben wird, wenn Feld leer ist
            document.querySelector('.j-error_address').textContent = "Adress cannot be left blank!";
            document.querySelector('.j-input_address').classList.add('j-error_address_input');
            isValid = false;
        }
        else {
            // wenn im Nachhinein dann doch etwas eingegeben wird, soll Error Message "Adress cannot be left blank!" und roter Rahmen verschwinden
            document.querySelector('.j-input_address').classList.remove('j-error_address_input');
            document.querySelector('.j-error_address').textContent = "";
        }
    


        // ###################### (4 Eingabefelder) EMAIL ADDRESS ######################

        var email_input = document.querySelector('#email');

        var email = email_input.value;

        var first_at_index = email.indexOf('@');
       
        // Abfrage ob ein @ in Eingabefeld vorhanden ist
        if(email.indexOf('@') === -1) {
            event.preventDefault();
            // Fehler der ausgegeben wird, wenn kein @ vorhanden ist
            document.querySelector('.j-error_email').textContent = "Please insert a valid Email address!";
            document.querySelector('.j-input_email').classList.add('j-error_email_input');
            isValid = false;
        } 

        // Abfrage ob eingegebenes @ an erster Stelle, oder an letzter Stelle ist
        else if(email.charAt(0) === '@' || email.charAt(email.length - 1) === '@' ) {
            event.preventDefault();
            // Fehler der ausgegeben wird, wenn @ an erste Stelle, oder an letzter Stelle steht
            document.querySelector('.j-error_email').textContent = "Please insert a valid Email address!";
            document.querySelector('.j-input_email').classList.add('j-error_email_input');
            isValid = false;
        } 

        // Abfrage ob mehr als ein @ eingegeben wurde
        else if(email.indexOf('@', first_at_index + 1) !== -1) {
            event.preventDefault();
            // Fehler der ausgegeben wird, wenn mehr als ein @ eingegeben worden ist
            document.querySelector('.j-error_email').textContent = "Please insert a valid Email address!";
            document.querySelector('.j-input_email').classList.add('j-error_email_input');
            isValid = false; 
        }

        else {
            // wenn im Nachhinein dann doch etwas eingegeben wird, soll Error Messages und roter Rahmen verschwinden
            document.querySelector('.j-input_email').classList.remove('j-error_email_input');
            document.querySelector('.j-error_email').textContent = "";
        }



        // ###################### (4 Eingabefelder) TELEPHONE NUMBER ######################

        var input = document.querySelector('.j-input_tel');
    
        var text = input.value;

        var validCharacters = "+1234567890";

         // Alle Leerzeichen in TELEPHONE NUMBER entfernen:
        if (text.trim() === "") {
            // Wenn Eingebefeld leer ist, soll das Abschicken verhindert werden
            event.preventDefault();
            // Fehler der ausgegeben wird, wenn Feld leer ist
            document.querySelector('.j-error_tel').textContent = "Telephone number cannot be left blank!";
            document.querySelector('.j-input_tel').classList.add('j-error_tel_input');
            isValid = false;
        }

        else  {
            // wenn im Nachhinein dann doch etwas eingegeben wird, soll Error Message "Telephone number cannot be left blank!" und roter Rahmen verschwinden
            document.querySelector('.j-input_tel').classList.remove('j-error_tel_input');
            document.querySelector('.j-error_tel').textContent = "";
            
        }
  
        // Mittels Schleife überprüfen, ob sich validCharacters (in Variable deklariert) im Eingabefeld befinden
        for(var i = 0; i < text.length; i++) {
            var c = text.charAt(i); 
        
            if(validCharacters.indexOf(c) === -1) { 
                // Fehler der ausgegeben wird, wenn keine validChracters eingegeben wurden
                document.querySelector('.j-error_tel').textContent = "Please insert a valid telephone number!";
                document.querySelector('.j-input_tel').classList.add('j-error_tel_input');
                isValid = false;
            }

            else if(validCharacters.indexOf(c) !== -1) { 
                // wenn im Nachhinein dann doch validCharacters eingegeben wurden, soll Error Message "Please insert a valid telephone number!" und roter Rahmen verschwinden
                document.querySelector('.j-input_tel').classList.remove('j-error_tel_input');
                document.querySelector('.j-error_tel').textContent = "";
            }
        }

        

        // ###################### (2 Radiobuttons) BUSINESS ADDRESS YES OR NO ######################

        var businessAdressRadios = document.querySelectorAll('input[name="businessadress"]');

        var checked = false; // Weil wir davon ausgehen, dass kein Radiobutton angehakt wurde

        // Mittels for Schleife alle Radiobuttons durchgehen
        for(var i = 0; i < businessAdressRadios.length; i++) { 
            if(businessAdressRadios[i].checked === true) { 
                checked = true; // Wenn true: ein Radiobutton wurde angehakt
                break; // Schleife kann abgebrochen werden, weil eh nur ein Radiobutton angehakt werden muss/kann
            }
        }
        if(!checked) { 
            // Fehler der ausgegeben wird, wenn Radiobutton angehakt wurde
            document.querySelector('.j-error_radio').textContent = "Please let us know if it's your business address!";
            isValid = false;
        } else {
            // wenn im Nachhinein dann doch ein Radibutton angehakt wurde, soll Error Message "Please let us know if it's your business address!" verschwinden
            document.querySelector('.j-error_radio').textContent = "";
        }



        // ###################### (1 Auswahlliste) CHOOSE SHIPPING SERVICE ######################

        var shippingService = document.querySelector('#shipping_service');

        if(shippingService.options[shippingService.selectedIndex].value === "") { 
            // Fehler der ausgegeben wird, wenn kein Shipping Service ausgewählt wurde
            document.querySelector('.j-error_checked').textContent = "Please choose your preferred shipping service!";
            isValid = false;
        } else {
            // wenn im Nachhinein dann doch ein Shipping Service ausgewählt, soll Error Message "Please choose your preferred shipping service!" verschwinden
            document.querySelector('.j-error_checked').textContent = "";
        }



        // ###################### (2 Checkboxen) SERVICE PRIVAY POLICY AGREED? ######################
    
        var serviceAndPrivacyPolicy = document.querySelector('#checkbox_service_privacy_policy');

        if(!serviceAndPrivacyPolicy.checked) {
        // Fehler der ausgegeben wird, wenn Service Privacy Policy nicht auf "I agree" gesetzt wurde
        document.querySelector('.j-error_service_privacy_policy').textContent = "Service and Privacy Policy cannot be left blank!";
            event.preventDefault();
            isValid = false;
        } else {
        // wenn im Nachhinein dann doch Service Privacy Policy auf "I agree" gesetzt wurde, soll Error Message "Service and Privacy Policy cannot be left blank!" verschwinden
        document.querySelector('.j-error_service_privacy_policy').textContent = "";
        }



        // ###################### (2 Checkboxen) FAVOURITE CATEGORIES FOR NEXT DELIVERY? ######################

        // nicht validiert, weil es sich bei diesen Checkboxen nicht um ein Pflichtfeld handelt


        if(!isValid) { // Wenn eine Überprüfung auf isValid == false gesetzt wurde mit preventDefault NICHT abschicken!
            event.preventDefault(); 
        }
        
    });    

});


