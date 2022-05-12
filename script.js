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
                text: 'You can remove your Todos clicking the red button.',
                done: true,
            },
            {
                text: 'You can remove your Todo clicking the button on the right.',
                done: true,
            },
        ],
        number: function (){
            if(this.items.length <= 3){
                return this.items.length;
            }   else{
                return 'sono troppi!';
            }
        },
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
                    done: false,
                    id:'',
                });
            };
            this.newToDo= {text:'', done: false}
        // },
        // doneToDo: function(){
        //     if(this === true){
        //         item.classList.add("line-through");
        //     } return;
        },
        toggle: function (i){
            const {done} = this.items[i];
            //console.log(done);
            this.items[i].done = !done; 
        },
        deleteToDo: function(item){
            //console.log(this.deleteToDo);
            this.items.splice(item, 1);
        },
        removeAll: function(items){
            this.items.splice(items);
        },
    },
})