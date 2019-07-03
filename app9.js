new Vue({
    el:'#vue-app9',
    data:{
        age:20,
        a:0,
        b:0
    },
    methods:{
        // addToA: function(){
        //     return this.age + this.a;
        // },
        // addToB: function(){
        //     return this.age + this.b;
        // }

    },
    computed:{
        addToA: function(){
            console.log('addToA');
            return this.age + this.a;
        },
        addToB: function(){
            console.log('addToB');
            return this.age + this.b;
        }
    }
})