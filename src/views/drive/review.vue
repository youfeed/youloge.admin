<template>
  <div>审核文件：</div>
</template>

<script setup>
import { onMounted } from "vue"
onMounted(()=>{
  apiFetch('drive','moderated', {}).then(data=>{
    console.log(data)
  })
})
</script>

<style>

</style>