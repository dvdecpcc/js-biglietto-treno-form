const userDom = document.getElementById("data_user");
const kmDom = document.getElementById("km");
const ageDom = document.getElementById("user_age");
const nameDom = document.getElementById("name");
let promoDom = document.getElementById("promo");
let coachDom = document.getElementById("coach_number");
let ticket_codeDom = document.getElementById("ticket_code");
let priceDom = document.getElementById("price");
const createDom = document.getElementById("create");
const deleteDom = document.getElementById("delete");
const ticketDom = document.getElementById("ticket_section").classList;


createDom.addEventListener('click' ,
    function() {

        ticketDom.add("show");
        ticketDom.remove("hide");

        nameDom.innerHTML = userDom.value; 

        coachDom.innerHTML = Math.floor((Math.random() * 15 + 1));

        ticket_codeDom.innerHTML = Math.floor((Math.random() * 10000) + 90000);

        let prezzo_intero = (parseInt(kmDom.value) * 0.21);
        
        if (ageDom.value == "Minorenne") {
            let sconto = prezzo_intero -= (prezzo_intero * 0.2);
            priceDom.innerHTML = sconto.toFixed(2);
            promoDom.innerHTML = "Biglietto scontato del 20%"
        } else if (ageDom.value == "Over 65") {
            let sconto = prezzo_intero -= (prezzo_intero * 0.4);
            priceDom.innerHTML = sconto.toFixed(2);
            promoDom.innerHTML = "Biglietto scontato del 40%"
        } else if (ageDom.value == "-") {
            priceDom.innerHTML = "Scegliere età!"
        }
        else {
            priceDom.innerHTML = prezzo_intero;
            promoDom.innerHTML = "Biglietto standard"
        }

    }
);

deleteDom.addEventListener('click' , 
    function() {

        userDom.value = '';
        kmDom.value = '';
        ageDom.value = '-';
        ticketDom.add("none");
        ticketDom.remove("show");
    }
)