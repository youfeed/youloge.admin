<template>
  <div class="popup">
    <div class="signin">
      <div class="close" @click="close">x</div>
      <div class="head">
        <h1>登录·注册</h1>
      </div>
      <div class="body">
        <label for="pass">账号</label>
        <input type="mail" id="pass" v-model="pass" placeholder="安全邮箱或手机号"/>
        <button @click="next" class="next" :disabled="mailed">获取验证码</button>
      </div>
      <div class="body">
        <label for="word">密码</label>
        <input type="text" id="word" v-model="word" placeholder="验证码"/>
        <button @click="login" class="login" :disabled="worded">登录</button>
      </div>
      <div class="tips">*暂时无法使用手机号登录</div>
    </div>
  </div>
</template>
<script>
import $fetch from '../fetch/index.js'
export default {
  name: "you-login",
  data(){
    return {
      pass:'',
      word:'',
      sign:'',
      mailed:true,
      worded:true,
      grecaptcha:null,
      render: '6Lc3es8gAAAAAHsggFTMlcHsjlLEXyrCV1IbCZxx'
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    close:{
      type:Function,
      default:()=>{}
    }
  },
  mounted(){
    Window.onlogin = this.onlogin()
    Window.grecaptcha ? this.onlogin() : this.loadscript();
    console.log(Window,Window.onlogin)
  },
  methods:{
    onlogin(){
      this.grecaptcha = window.grecaptcha
      console.log('onlogin',this.grecaptcha);
    },
    async next(){
      this.mailed = true;
      console.log(this.pass,this.word);
      let token = await this.execute()
      let maild = await $fetch.api('mail',{token:token,pass:this.pass})
      this.mailed = false;
      console.log(maild)
    },
    async login(){
      let token = await this.execute()
      let login = await $fetch.api('login',{token:token,word:this.word})
      console.log(login)
    },
    execute(action='base64'){
      return this.grecaptcha.execute(this.render,{action:action}).then(token=>token)
    },
    loadscript(){
      if(!Window.grecaptcha){
        let script = document.createElement('script')
            script.src = `https://www.recaptcha.net/recaptcha/api.js?render=${this.render}`
        document.body.appendChild(script)
        script.onload = ()=>{
          console.log('script loaded');
          script.remove()
          this.onlogin()
        }
      }
    },
  },
  watch:{
    pass(val){
      let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      this.mailed = !regEmail.test(val)
    },
    word(val){
      this.worded = val.length != 6
    }
  }
};
</script>
<style>
.popup{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(100,100,100,.75);
  display: flex;
  align-items: center;
  justify-content: center;
}
.signin{
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  position: relative;
}
.close{
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.next{

}
.next:disabled {
  pointer-events: none;
  cursor: no-drop;
  opacity: .5;
}
.body{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  border: 1px solid #9e9e9e;
  margin: 10px 0;
  padding: 5px;
}
.body input{
  flex: auto;
  border: 0;
  background: transparent;
  outline: 0;
  margin-left: 5px;
  font-size: 16px;
}
</style>
