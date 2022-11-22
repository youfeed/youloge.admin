<template>
  <div>Loading...</div>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const gotoPath = route.params.path;
  router.replace({ path: String(gotoPath) });
</script>

<style scoped lang="less"></style>
