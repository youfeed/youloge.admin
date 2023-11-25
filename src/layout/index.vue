<template>
  <el-container>
      <el-header>
        <YouHeader></YouHeader>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <YouAside></YouAside>
        </el-aside>
        <el-container>
          <el-main>
            <YouMain><slot></slot></YouMain>
          </el-main>
          <el-footer>
            <YouFooter></YouFooter>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>
<script setup>
defineOptions({name:'you-layout'});
import YouHeader from './header.vue'
import YouAside from './aside.vue'
import YouMain from './main.vue'
import YouFooter from './footer.vue'
</script>

<style>

</style>