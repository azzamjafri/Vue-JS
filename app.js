new Vue({
    el:'#vue-app',
    data:{
        name:'Random',
        job:'Intern',
        website:'www.google.com ',
        websiteTag:'<a href="www.google.com">Go to Site</a>'
    },
    methods:{
            greet:function(time){
                return 'Good ' + time + this.name   ;
            }
    }
})

new Vue({
    el:'#vue-app5',
    data:{
        age:20,
        x:0,
        y:0,
    },
    methods:{
        add:function(inc){
            this.age += inc;
        },
        subtract:function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            //  console.log(event)
            this.x= event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('Going to Google !');
        }
    }
})


new Vue({
    el:'#vue-app7',
    data:{
        name:'',
        age:''

    },
    methods:{
        logName: function(){
            console.log('You entered your name !')
        },
        logAge: function(){
            console.log('You entered your age !')
        }
    }
})