import { AmeButton } from './modules/index'
import { AmeInput } from './modules/index'

import ame from './vendor/ame'

{
  /* <ame-button border="red" size="lg">主要按钮</ame-button> */
}

const template = `
      <ame-input size="lg" v-model="789" @input="handleInput"></ame-input>
    `
var div = document.createElement('div')
div.innerHTML = template
var app = document.getElementById('app')
app.appendChild(div)

ame.component('ame-button', AmeButton)
ame.component('ame-input', AmeInput)

var vm = new ame({
  el: '#app',
  data: {
    model: '123'
  },
  methods: {
    handleInput(val) {
      console.log('input', val)
    },
    handleTestEvent() {}
  }
})
