import {createApp} from 'vue'
import Login from './login.vue';
const options = {
  close:()=>{
    console.log('close')
    YouLogin.hide()
  }
}
const instance = createApp(Login,options);
const Frag  = document.createDocumentFragment();
const YouLogin = {
  show(){
    console.log('show')
    const apps = instance.mount(Frag);
    document.body.appendChild(Frag);
    console.log(apps)
  },
  hide(){
    instance.visible = false;
    instance.unmount();
    // document.body.removeChild(Frag);
  }
}
export default YouLogin;