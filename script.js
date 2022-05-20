console.log('Hello Vue!');

//Stampare all'interno di una lista un item per ogni todo
    //Se è true visualizzare il testo del todo sbarrato
//Visualizzare a fianco ad ogni item una "X". Cliccando su di essa il ToDo verrà rimosso.
//Predisporre un campo di input testuale e un pulsante "aggiungi"
    //Cliccando sudi esso il testo digitato viene usato per creare un nuovo ToDo.

const app = new Vue ({
    el: '#app',
    data: {
        add: 'Add to ToDoList',
        removeEverything: 'Remove all',
        empty:'ToDoList is empty.',
        newToDo: '',
        items:[
            {   
                id: 1,
                text: 'Welcome to Vue ToDoList!',
                done: false,
            },
            {
                text: 'This is a free ToDoList.',
                done: false,
            },
            {
                text: 'You can add your ToDo writing in the form and clicking the green button.',
                done: false,
            },
            {
                text: 'You can check it clicking on the ToDo.',
                done: false,
            },
            {
                text: 'You can remove your ToDos clicking the red button.',
                done: true,
            },
            {
                text: 'You can remove your ToDo clicking the red button on right.',
                done: true,
            },
        ],
    },
    methods: {
        addToDo: function () {
            if (this.NewToDo !== ''){
                this.items.push({
                    text: this.newToDo,
                    done: false,
                });
            }
            
            this.newToDo= ''
        },
        toggle: function (i){
            const {done} = this.items[i];
            // console.log(done);
            this.items[i].done = !done; 
        },
        deleteToDo: function(item){
            // console.log(this.deleteToDo);
            this.items.splice(item, 1);
        },
        removeAll: function(items){
            this.items.splice(items);
        },
    },
})