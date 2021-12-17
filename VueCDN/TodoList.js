new Vue({
    el  : '#vue-app',
    data: {
        todoItem    : {title:'', date:''},
        formShow    : false,
        notification: '',
        counter     : 0,
        todoList    : [
            {title:'Make a table', date:'2021-11-18T11:40', status: false},
            {title:'make a list', date:'2021-10-18T1:20', status: true},
            {title:'make buttons', date:'2021-9-18T2:00', status: false},
        ]
    },
    methods:{
        deleteTodoItem: function(index){
            this.todoList.splice(index, 1)
        },
        addTodoItem: function(){
            this.todoList.push({title: this.todoItem.title, date: this.todoItem.date, status: false})
        },
        changeStatusTodoItem: function(index){
            this.todoList[index].status = !this.todoList[index].status
        },
        striked: function(index){
            return {
                available : this.todoList[index].status,
            }
        }
    },
    computed: {
        todoListReversed() {
            return this.todoList.slice(0).reverse()
        }
    },
    watch: {
        todoList: {
            handler: function(){
                this.notification = 'TodoList Updated / ' + this.counter++
            },
            deep: true
        },
    }
});