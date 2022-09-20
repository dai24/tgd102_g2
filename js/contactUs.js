new Vue({
    el:'#app2',
    data:{
        isShow:false,
    },
    methods: {
        open(){
            this.isShow =!this.isShow
        },
        close(){
            this.isShow =!this.isShow
        },
    },
})