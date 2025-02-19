<template>
  <div>
    <h1>overview</h1>
  </div>
  <t-row :gutter="[16, 24]" >
    <t-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
      <t-card>
        <div>
          仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
        </div>
      </t-card>
    </t-col>
    <t-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <t-card>Col</t-card>
    </t-col>
  </t-row>
</template>

<script setup>
import { onMounted } from "vue"
onMounted(()=>{
  apiFetch('drive','overview', {}).then(data=>{
    console.log(data)
  })
})
</script>

<style>

</style>