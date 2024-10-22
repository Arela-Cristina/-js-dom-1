//prima chiamiamo il elemento del DOM che contiene il botone
const button = document.getElementById('button');

//chiamiamo il elemento del DOM che contiene la lampadina
const bulb = document.getElementById('bulb');
console.log(bulb)


//test click button
button.addEventListener('click', function () {
    console.log('Hai cliccato');
    //propieta .src per consultare il atributo src della immagine
    //metodo includes per consultare se essiste una determinata 'stringa' nel atributo src.
    //essiste (includes.) 'img/white_lamp.png' nel elemento offbulb?
    if (bulb.src.includes('img/white_lamp.png')){
        //se essiste ed e spenta accenderla, al click/ Proprieta src. ancora per manipoalre il atributo
        bulb.src = 'img/yellow_lamp.png';
        //proprieta textContent. per modificare il testo del bottone
        button.textContent = 'Spegni'
    } else {
        //se e accesa la spegniamo
        bulb.src = 'img/white_lamp.png';
        //proprieta textContent. per modificare il testo del bottone
        button.textContent = 'Accendi'
    }
});
