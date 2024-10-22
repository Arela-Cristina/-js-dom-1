//prima chiamiamo il elemento del DOM che contiene il botone
const onButton = document.getElementById('onButton');

//chiamiamo il elemento del DOM che contiene la lampadina
const offBulb = document.getElementById('offBulb');
console.log(offBulb)


//test click onButton
onButton.addEventListener('click', function () {
    console.log('Hai cliccato');
    //propieta .src per consultare il atributo src della immagine
    //metodo includes per consultare se essiste una determinata 'stringa' nel atributo src.
    //essiste (includes.) 'img/white_lamp.png' nel elemento offBulb?
    if (offBulb.src.includes('img/white_lamp.png')){
        //se essiste ed e spenta accenderla, al click/ Proprieta src. ancora per manipoalre il atributo
        offBulb.src = 'img/yellow_lamp.png';
        //proprieta textContent. per modificare il testo del bottone
        onButton.textContent = 'Spegni'
    } else {
        //se e accesa la spegniamo
        offBulb.src = 'img/white_lamp.png';
        //proprieta textContent. per modificare il testo del bottone
        onButton.textContent = 'Accendi'
    }
});
