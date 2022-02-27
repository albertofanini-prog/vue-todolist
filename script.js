console.log('Hello Vue!');

//Stampare all'interno di una lista un item per ogni todo
    //Se è true visualizzare il testo del todo sbarrato
//Visualizzare a fianco ad ogni item una "X". Cliccando su di essa il ToDo verrà rimosso.
//Predisporre un campo di input testuale e un pulsante "aggiungi"
    //Cliccando sudi esso il testo digitato viene usato per creare un nuovo ToDo.

const app = new Vue ({
    el: '#app',
    data: {
        newToDo: '',
        items:[
            {
                text: 'Welcome to Vue ToDoList!',
                done: true,
            },
            {
                text: 'This is a free ToDoList.',
                done: true,
            },
            {
                text: 'Made by a real web developer.',
                done: false,
            }
        ],
    },
    methods: {
        /*addToDo(){
            this.items.push(this.newToDo);
            this.newToDo="";
        },*/
        addToDo: function () {
            if (this.NewToDo !== ''){
                this.items.push({
                    text: this.newToDo,
                    done: true,
                });
            };
            this.newToDo='';
        // },
        // doneToDo: function(){
        //     if(this === true){
        //         item.classList.add("line-through");
        //     } return;
        },
        deleteToDo: function(item){
            //console.log(this.deleteToDo);
            this.items.splice(item, 1);
        }
    },
})