<template>
  <Transition name="slide-fade">
    <div :class="['y-message']" v-show="isShow">
      <span class="text">{{text}}</span>
    </div>
    <div> {{style.info.color}}</div>
  </Transition>
</template>
<script>
export default { name:'yMessage' }
</script>
<script setup>
import {onMounted, reactive, ref} from 'vue'
const props = defineProps({
  text:{ 
    type:[String,Object],
    default:''
  },
  type:{
    type:String,
    default:'info'
  },
  icon:String,
})
const state = reactive({
  style:{
    info:{
      color:'#505050',
      backgroundColor: 'rgb(229 227 224)',
      borderColor: 'rgb(229 227 224)'
    }
  },
  
})
const isShow = ref(false)
const { style } = state
console.log('1',props)
onMounted(()=>{
  isShow.value = true
})
</script>

<style lang="scss">
.y-message{
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  height: auto;
  display: flex;
  align-items: center;
  min-height: 45px;
  padding: 5px 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 8px;
    vertical-align: middle;
    font-size: 16px;
    height: 100%;
    display: inline-block;
    float: left;
  }
  .text {
    vertical-align: middle;
    font-size: 14px;
    line-height: 22px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
div.slide-fade-enter-from,
div.slide-fade-leave-to {
  transform: translate3d(-50%, -75px, 0);
}
</style>