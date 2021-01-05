let active = false;

let inName = document.getElementById('name');
let inCredit = document.getElementById('credit');
let inDebit = document.getElementById('debit');
let btnAdd = document.getElementById('add');

let montantCompte = document.getElementById('montantCompte');
let montantDebit = document.getElementById('montantDebit');
let montantCredit = document.getElementById('montantCredit');

let errorM = false;

let inCompteDepart = document.getElementById('compteDepart');
let btnCompteDepart = document.getElementById('btnCompteDepart');

let initCompte = document.getElementById('init-compte');

let nom = [];
let credit = [];
let debit = [];

function createEl(balise, texte, id, className, parent){
    let element = document.createElement(balise);
    element.innerHTML = texte;
    element.id = id;
    element.className = className;
    parent.append(element);
}

function verifInput(){
    if(inCompteDepart.value === "" && active === false){
        message("Merci de renseigner votre solde de départ !", 3000);
    }else{
        if((inName.value && inCredit.value) === "" && (inName.value && inDebit.value) === ""){
            message("Merci de renseigner les champs (nom, crédit ou débit) !", 3000);
        }else if(inCredit.value !== "" && inDebit.value !== ""){
            message("Merci de remplir soit le champs crédit soit le champ débit !", 3000);
        }else if(isNaN(inCredit.value) || isNaN(inDebit.value)){
            message("Nous autorisons que les chiffres dans les champs crédit et débit", 3000);
        }else{
            return true;
        }
    }
}

function verifInputCompteDepart(){
    if(inCompteDepart.value === ""){
        message("Merci de renseigner votre solde de départ !", 3000);
    }else if(isNaN(inCompteDepart.value)){
        message("Nous autorisons que les chiffres dans le champ solde de départ", 3000);
    }else{
        return true;
    }
}

function message(texte, time){
    if(!errorM){
        new createEl('span', texte, 'errorMessage', null, document.getElementById('right-content'));
        let errorMessage = document.getElementById('errorMessage');
        errorMessage.style.color = 'red';
        errorM = true
        let clearError = setInterval(() => {
            errorMessage.remove();
            errorM = false;
            clearInterval(clearError);    
        }, time);
    }
}