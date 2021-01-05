btnCompteDepart.addEventListener('click', () => {
    if(verifInputCompteDepart()){
        montantCompte.innerHTML = inCompteDepart.value;
        ative = true;
        initCompte.remove();
    }
});

btnAdd.addEventListener('click', () => {
    if(verifInput()){
        console.log(active);
        createEl('tr', null, null, null, document.getElementById('table'));

        let contents = document.getElementsByTagName('tr');
        for(let content of contents){
            if(content.childElementCount === 0){
                createEl('td', inName.value, null,null, content);
                if(inDebit.value === ""){
                    createEl('td', inCredit.value + " €", null,null, content);
                    createEl('td', "0 €", null,null, content);
                }else{
                    createEl('td', "0 €", null,null, content);
                    createEl('td', inDebit.value + " €", null,null, content);
                }
            }
        }

        nom.push(inName.value);
        if(inCredit.value === ""){
            debit.push(inDebit.value);
            addSoustraction();
        }else{
            credit.push(inCredit.value);
            addSomme();
        }
    }
});

function addSomme(){
    montantCompte.innerHTML = parseFloat(montantCompte.innerHTML) + parseFloat(inCredit.value);

    montantCredit.innerHTML = parseFloat(montantCredit.innerHTML) + parseFloat(inCredit.value);
}

function addSoustraction(){
    montantCompte.innerHTML = parseFloat(montantCompte.innerHTML) - parseFloat(inDebit.value);

    montantDebit.innerHTML = parseFloat(montantDebit.innerHTML) - parseFloat(inDebit.value);
}