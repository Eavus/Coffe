/* Side bar */ 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
/* Formulár */
function validateForm() {
    var consentCheckbox = document.getElementById("consent");
    var consentError = document.getElementById("consentError");
    /* neúspešné vyplnenie formuláru (nezaškrtnutý checkbox) */
    if (!consentCheckbox.checked) {
        consentError.innerHTML = "Musíte súhlasiť so spracovaním osobných údajov.";
        return false;
    /* neúspešné vyplnenie formuláru */
    } else {       
        var userConsent = confirm("Ste si istý/á, že súhlasíte so spracovaním osobných údajov?");       
        if (userConsent) {
            consentError.innerHTML = "";
            return true;
        /* odmietnutie alertu */
        } else {   
            consentError.innerHTML = "Musíte potvrdiť súhlas so spracovaním osobných údajov!";
            return false;
        }
    }
}
/* Formulár accordion */
var acc = document.querySelector(".accordion");
var panel = document.querySelector(".panel");

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.querySelector(".accordion");
    var panel = document.querySelector(".panel");

    acc.addEventListener("click", function() {
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
/* Tabuľka */
function buyCoffee(coffeeName) { 
    alert('Káva ' + coffeeName + ' bola pridaná do nákupného košíku');
    
}
/* kreatívny bod */
function toggleDescription(coffeeName) {
    var descriptions = document.getElementById('descriptions');
    var existingDescription = document.getElementById('description-' + coffeeName);
    /* znovu kliknutie na názov kávy (schová div) */
    if (existingDescription) {
        existingDescription.remove();
    } else {
        /* vytvorenie div elementu */
        var description = document.createElement('div');
        description.id = 'description-' + coffeeName;
        description.className = 'description';
        description.innerHTML = getCoffeeDescription(coffeeName);
        descriptions.appendChild(description);
    }
}
/* Table výstup po kliknutí na názov kávy */
function getCoffeeDescription(coffeeName) {
    switch (coffeeName) {
        case 'Espresso':
            return `
                <div class="coffee-description">
                    <h1>Espresso</h1>
                    <br>
                    <div class="image" style="float: left; margin-right: 20px;">
                        <img src="img/espresso.jpg" style="width: 200px; display: inline-block; border-radius: 15px;" alt="Coffee Image">
                    </div>
                    <div class="text">
                        Espresso je silný a koncentrovaný kávový nápoj, ktorý pochádza z Talianska. Varí sa pretlačením horúcej vody cez jemne pomleté kávové zrná, výsledkom čoho je malý výstrel intenzívnej a aromatickej kávy. Proces varenia espressa kladie dôraz na extrakciu bohatých chutí a aromatických olejov z kávovej usadeniny, čím sa získa robustná a plná šálka. Espresso sa zvyčajne podáva v malých množstvách a tvorí základ pre rôzne kávové nápoje, ako sú latté, cappuccino a Americanos. Je to obľúbená voľba pre tých, ktorí oceňujú odvážne a intenzívne vlastnosti kávy.
                    </div>
                </div>
            `;
        case 'Cappuccino':
            return `
                <div class="coffee-description">
                    <h1>Cappuccino</h1>
                    <br>
                    <div class="image" style="float: left; margin-right: 20px;">
                        <img src="img/coffee-slideshow-1.jpg" style="width: 200px; display: inline-block; border-radius: 15px;" alt="Coffee Image">
                    </div>
                    <div class="text">
                        Cappuccino je klasický taliansky kávový nápoj, ktorý kombinuje dvojité espresso s rovnakým dielom napareného mlieka a napenenej mliečnej peny. Výsledkom je bohatá a krémová káva s luxusnou textúrou. Cappuccino je známe svojim vyváženým chuťovým profilom, ktorý spája intenzitu espressa s jemnosťou mliečnej peny. Často posypaný kakaom alebo škoricou je obľúbenou voľbou pre tých, ktorí ocenia harmonický a zhovievavý zážitok z kávy.
                    </div>
                </div>
            `;
        case 'Americano':
            return `
                <div class="coffee-description">
                    <h1>Americano</h1>
                    <br>
                    <div class="image" style="float: left; margin-right: 20px;">
                        <img src="img/Americano.jpg" style="width: 200px; display: inline-block; border-radius: 15px;" alt="Coffee Image">
                    </div>
                    <div class="text">
                        Americano je kávový nápoj vyrobený zriedením espressa horúcou vodou. Výsledkom je káva, ktorá má podobnú silu ako tradičná prekvapkávaná káva, ale odlišný chuťový profil. Americano je oceňované pre svoju jednoduchosť a ponúka priamy a jemný zážitok z kávy. S koreňmi siahajúcimi až do druhej svetovej vojny sa Americano stalo obľúbenou voľbou pre tých, ktorí uprednostňujú jemnejšiu, ale odvážnu šálku kávy.
                    </div>
                </div>
            `;
        default:
            return '';
    }
}

/* Slideshow */
/* sledovanie zobrazeneho obrázka */
let slideIndex = 0; 
showSlides(slideIndex);


function showSlides(x) {
    /* zmena indexu snímky*/
    let i;
    /* načítanie prvkov */
    let slides = document.getElementsByClassName("mySlides");
    if (x >= slides.length) { slideIndex = 0 } 
    if (x < 0) { slideIndex = slides.length - 1 } 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(x) {
    showSlides(slideIndex += x);
}