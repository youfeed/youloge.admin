<template>
  <t-space direction="vertical">
    <t-row justify="center" align="center" :gutter="16" class="gradient">
      <t-col :span="12">
        <div class="login">
          <div>开发者登录-如何成为开发者</div>
          <iframe :src="`https://open.youloge.com/login${hash}`" v-if="show"></iframe>
          <!-- <iframe :src="`http://localhost:5174/login.html${hash}`"></iframe> -->
        </div>
      </t-col>
      <t-col :span="12">
        <div>开发者配置：</div>
        <div>APIURL:{{ config.APIURL }}</div>
        <div>VIPURL:{{ config.VIPURL }}</div>
        <div>WWWURL:{{ config.WWWURL }}</div>
        <div>APIKEY:{{ config.APIKEY }}</div>
      </t-col>
    </t-row>
  </t-space>
</template>

<script setup>
defineOptions({ name: 'you-login',inheritAttrs:false });
import { onMounted, reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter(),route = useRoute();
console.log(router,route)
const state = reactive({
  show:false,
  hash:`#${Math.random().toString(36)}`,
  form:null
})
const config = reactive(useConfig())

onMounted(()=>{
  let {hash} = state;state.show = true
  // console.log(config)
  window.addEventListener('message',({origin,source,data})=>{
    let {method,params} = data[hash] || {};
    if(method){
      let action = {
        'ready':()=>{
          let init = {ukey:config.UKEY,close:false};
          source.postMessage({[hash]:{method:'init',params:init}},origin)
        },
        'success':()=>{
          let {signature,expire} = params
          setStorage(params);
          router.replace({ path: '/index' })
          console.log('success',params)
        }
      };action[method] ? action[method]() : null
    }
  })
})

const {show,form,hash} = toRefs(state)
</script>

<style lang="scss">
.login{
  margin: 40px auto;
  border-radius: 4px;
  padding: 20px;
  height: 400px;
  width: 500px;
  iframe{
    border: 0;
    height: 100%;
    width: 100%;
  }
}
bodys {
    /* 设置容器尺寸 - 原理1 */
    // width: 400px;
    // height: 400px;
    /* 背景渐变色 - 原理2 */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /* 背景尺寸 - 原理3 */
    background-size: 600% 600%;
    /* 循环动画 - 原理4 */
    animation: gradientBG 5s ease infinite;
  }
  /* 动画，控制背景 background-position */
  @keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
</style>