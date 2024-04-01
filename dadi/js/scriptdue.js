// alert("ciao");
const sendBtnElem = document.getElementById("btn-user"); // object | null
console.log(sendBtnElem);


sendBtnElem.addEventListener("click", function () {

    const numberCpu = Math.floor(Math.random() * 6) + 1; //number
    console.log(numberCpu);
    document.getElementById("num-cpu").innerHTML = `punteggio del computer:  ${numberCpu}`;

    const numberUser = Math.floor(Math.random() * 6) + 1; //number
    console.log(numberUser);
    document.getElementById("num-user").innerHTML = `il tuo punteggio:  ${numberUser}`;

    let result = "";
    if (numberCpu == numberUser) {
        result = 0;
        document.getElementById("result").innerHTML = "Pareggio!";
    } else if (numberCpu < numberUser) {
        result = 1
        document.getElementById("result").innerHTML = "Hai vinto!";
    } else if (numberCpu > numberUser) {
        result = 2;
        document.getElementById("result").innerHTML = "Hai perso!";
    }


    
})