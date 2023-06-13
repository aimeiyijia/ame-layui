import { AmeButton } from './modules/index'
import { AmeInput } from './modules/index'

import ame from './vendor/ame'

const template = `
      <ame-input> 主要按钮
        <div v-slot:prepend>1234</div>
      </ame-input>
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
    handleTestEvent() {
      this.model++
      console.log('主 test-event')
      this.$render()
    }
  }
})
