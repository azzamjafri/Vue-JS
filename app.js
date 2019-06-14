new Vue({
    el:'#vue-app',
    data:{
        name:'Random',
        job:'Intern'
    },
    methods:{
            greet:function(time){
                return 'Good ' + time + this.name;
            }
    }
})