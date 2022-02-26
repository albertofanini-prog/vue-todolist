console.log('Hello Vue!');

//Stampare all'interno di una lista un item per ogni todo
    //Se è true visualizzare il testo del todo sbarrato
//Visualizzare a fianco ad ogni item una "X". Cliccando su di essa il ToDo verrà rimosso.
//Predisporre un campo di input testuale e un pulsante "aggiungi"
    //Cliccando sudi esso il testo digitato viene usato per creare un nuovo ToDo.

const app = new Vue ({
    el: '#app',
    data: {
        items:[
            'mela',
            'pera',
        ],
    },
    methods: {
        addToDo(){
            this.items.push(this.newToDo);
            this.newToDo="";
        },
    },
})