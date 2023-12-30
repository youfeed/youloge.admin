<template>
  <div class="error">
    <div class="error-page">
      <div class="error-page-content">
        <div class="error-page-img">
          <img src="" alt="">
        </div>
        <div class="error-page-text">
          <h1>404</h1>
          <p>页面未找到</p>
          <p>请检查您输入的网址是否正确</p>
          <router-link to="/">返回首页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.error{
  margin-top: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>