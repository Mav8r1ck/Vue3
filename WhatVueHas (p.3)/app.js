Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 app</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Ivan',
            lastName: 'Ivanov',
            age: 100500
        },
        items: [1, 2]
    }),
    methods: {
        addItem() {
            console.log(this.$refs.mI.value)
            this.items.push(this.$refs.mI.value)
            this.$refs.mI.value = ''
        },
        remove(i){
            this.items.splice(i,1)
        },
        log(item){
            console.log(item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')