<template>
  <!-- <t-space direction="vertical"> -->
    <t-row justify="center" align="center" :gutter="16" class="gradient">
      <t-col :span="12">
        <div class="login">
          <div>开发者登录-如何成为开发者</div>
          <iframe src="https://open.youloge.com/login#hello"></iframe>
        </div>
      </t-col>
      <t-col :span="12">
        <div>开发者配置：</div>
        <div>APIURL:{{ config.APIURL }}</div>
        <div>VIPURL:{{ config.VIPURL }}</div>
        <div>WWWURL:{{ config.WWWURL }}</div>
        <div>UKEY:{{ config.UKEY }}</div>
      </t-col>
    </t-row>
  <!-- </t-space> -->
</template>

<script setup>
defineOptions({ name: 'you-login',inheritAttrs:false });
import {useConfig} from '@/utils'
import { onMounted, reactive, toRefs,markRaw } from 'vue';
const state = reactive({
  form:null
})
const config = reactive(useConfig())
const formData = reactive({
  account: '',
  password: ''
})

onMounted(()=>{
  // console.log(config)
  // window.addEventListener('message',({origin,source,data})=>{
  //   let {method} = data['#hello'];
  //   if(method === 'ready'){
  //     let params = {ukey:config.UKEY,close:false};
  //     source.postMessage({['#hello']:{method:'init',params:params},origin})
  //     console.log(params)
  //   }
  // })
})

const {form} = toRefs(state)
</script>

<style lang="scss">
.login{
  margin-top: 20px;
  // border: 1px solid #e9e9e9;
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
body {
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