new Vue({
    el  : '#vue-app',
    data: {
        name      : 'Shaun',
        website   : 'google.com',
        websiteTag: '<a href="google.com">websiteTag link</a>',
        age       : 26,
        x         : 0,
        y         : 0,
        available : false,
        success   : false,
        TodoList  : [
            {title:'entry1', time:'time1'},
            {title:'entry2', time:'time2'},
            {title:'entry3', time:'time3'},
        ]
    },
    methods:{
        greet: function(time){
            return 'Good ' + time + ' ' + this.name
        },
        add: function(increment){
            this.age += increment
        },
        subtract: function(decrement){
            this.age -= decrement
        },
        updateXY: function(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        clickLink: function(){
            alert('i am here')
        },
    },
    computed:{
        compClasses: function(){
            return {
                available : this.available,
            }
        }
    },
});