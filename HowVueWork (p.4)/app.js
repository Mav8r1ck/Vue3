const h = Vue.h

const app = Vue.createApp({
    data() {
      return {
          title: 'Vue 3'
      }
    },
    methods:{
        changeTitle(){
            console.log(this.title)
            this.title = 'Готово!'
        }
    },
    // template:
    //     `<div class="card center">
    //         <h1>{{ title }}</h1>
    //         <button class="btn" @click="title = 'Готово!'">Изменить</button>
    //     </div>
    //     `
    render(){
        return h('div', {
            class:'card center'
        }, [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn',
                onclick: this.changeTitle
            }, 'Изменить')
        ])
    }
})

app.mount('#app')

//====
let title = 'Vue'
let message = 'Сообщение' + title

// console.log(message)
//
// title = 'Angular'
//
// console.log(message)

const data ={
    title: 'Vue',
    message: 'Сообщение: Vue'
}

//console.log(data)

const proxy = new Proxy(data, {
    // get(target, p) {
    //     console.log(target)
    //     console.log(p)
    // },
    set(target, p, value) {
        if(p === 'title'){
            target.message = 'Сообщение: ' + value
        }
        target[p] = value
    }
})

proxy.title = 'Angular'

console.log(proxy)