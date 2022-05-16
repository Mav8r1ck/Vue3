const AppAlone = {
    data(){
        return{
            placeholderStringA: 'Тапни тут',
            title:'Одинокий h1',
            inputValue:''
        }
    },
    methods: {
        inputChangeHandler(event){
            console.log('inputChangeHandler', event.target.value)
            this.inputValue = event.target.value
        }
    }
}

const app1 = Vue.createApp(AppAlone).mount('#app1')