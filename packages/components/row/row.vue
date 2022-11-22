<template>
  <div :class="iclass"><slot/></div>
</template>
<script>
  export default{name:'yRow'}
</script>
<script setup>
import { computed, provide } from 'vue'
const props = defineProps({
  gutter:{type:Number,default:0},
  justify:{type:String,default:'start'},
  align:{type:String,default:'top'}
})
const gutter = computed(()=>props.gutter)
const iclass = computed(()=>['y-row',`justify-${props.justify}`,`align-${props.align}`])
provide('gutter',{gutter})
</script>
<style lang="scss">
  .y-row{width:100%;height:auto;box-sizing: border-box;overflow: hidden;}
</style>