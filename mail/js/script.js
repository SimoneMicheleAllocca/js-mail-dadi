//test
//alert("Ciao")

//bottone

const sendBtn = document.getElementById("send"); // object | null
console.log(sendBtn);


//email autorizzate
const email = ["email@gmail.com", "email2@gmail.com", "email3@gmail.com"]


sendBtn.addEventListener("click", function () {
    

    const mailInput = document.getElementById("user-email").value; // string
    console.log(mailInput);

let autorizzato= false

    if (isNaN(mailInput) === true) {

        for (let i = 0; i <= email.length; i++) {
            
            if (mailInput == email[i]) {
                autorizzato = true
            }
        }
        
        if(autorizzato == true){
            document.getElementById("result").innerHTML = "Accesso consentito";
        }else {
            document.getElementById("result").innerHTML = "Non è consentito l'accesso";
        }
        
    } else {
        document.getElementById("result").innerHTML = "Inserisci un'email";
    }


})
