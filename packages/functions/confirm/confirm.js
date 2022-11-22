import { createApp } from 'vue'
import yConfirm from './confirm.vue'

const config = {
  show:false,
  text:'加载中...',
  target:'body',
  textColor:'#fff'
}
const $load = createApp(yConfirm, {config}).mount(typeof document !== 'undefined'?typeof document.createElement !== 'undefined'?document.createElement('div'):'':'')

const Confirm = {
  name:'confirm',
  show:function(){
    document.body.appendChild($load.$el)
  }

}




export default Confirm