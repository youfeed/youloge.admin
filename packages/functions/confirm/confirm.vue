<template>
  <Teleport>
      <div :class="['y-confirm']">queren</div>
  </Teleport>
</template>

<script>
// import { defineProps } from 'vue'
  export default { name:'yConfirm' }
</script>
<script setup>
const porps = defineProps({
  title:{
    type:String,
    default:'提示'
  }
})
console.log(porps)

</script>
<style>

</style>