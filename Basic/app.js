const App = {
    data() {
        return{
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue:'',
            notes:['Note 1', 'Note 2']
        }
    },
    methods:{
        addNewNote(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue),
                this.inputValue = ''
            }
        },
        ToUpperCase(item){
            return item.toUpperCase()
        },
        deleteNote(index){
            this.notes.splice(index, 1)
        }
    },
    computed:{
        doubleCountComputed(){
            return this.notes.length * 2
        }
    },
    watch:{
        inputValue(value){
            if (value.length > 10){
                this.inputValue = ''
            }
            console.log('Input value changed', value)
        }
    }
}

const app = Vue.createApp(App).mount('#app')
