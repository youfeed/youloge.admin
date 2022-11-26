import { createApp,watchEffect } from 'vue'
import yLoading from './loading.vue'

const obj = {
  show:false,
  text:'加载中...',
  target:'body',
  textColor:'#fff'
}
const $loading = createApp(yLoading, {obj}).mount(typeof document !== 'undefined'?typeof document.createElement !== 'undefined'?document.createElement('div'):'':'')

const Loading = {
  name:'loading',
  show(data){
    obj.show = true
    watchEffect(()=>{
      
    })
    document.body.appendChild($loading.$el)
  },
  hide(){
    obj.show = true
  }
}

export default Loading