import {createVNode,render} from 'vue'
import yMessage from './message.vue'
const Message = {
  name:'message',
  success:function(text,type,timeout){
    let timer = null
    const div = document.createElement('div')
    document.body.appendChild(div)
    const node = createVNode(yMessage,{text,type,timeout}) 
    render(node,div)
    clearTimeout(timer);timer = setTimeout(()=>{ 
      render(null,div)
      document.body.removeChild(div)
      clearTimeout(timer)
    },timeout || 2500)
  }
}

export default Message