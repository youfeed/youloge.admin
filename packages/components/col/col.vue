<template>
  <div :class="iclass" :style="istyle"><slot></slot></div>
</template>
<script>
  export default { name:'yCol' }
</script>
<script setup>
import {ref, computed, inject} from 'vue'
const props = defineProps({
  span:{ type:Number,default:24 },
  offset:{ type:Number,default:0 },
  xs:{ type:Number },
  sm:{ type:Number },
  md:{ type:Number },
  lg:{ type:Number },
  xl:{ type:Number },
}) 
const width = ref(props.span <= 24 ? props.span % 1 == 0 ?(100/24) * props.span + '%' :'':'')
const offset = ref(props.offset<=24?props.offset %1 == 0 ?(100/24) * props.offset+'%':'':'')
const {gutter} = inject('gutter',{gutter:computed(()=>0)})
console.log('gutter',gutter)
const iclass = computed(()=>['y-col'])
const istyle = computed(()=>[`padding-left:${gutter.value / 2}px`,`padding-right:${gutter.value / 2}px`])
</script>
<style lang="scss">
.y-col{
  width: v-bind(width);
  float: left;
  margin-left: v-bind(offset);
}
</style>