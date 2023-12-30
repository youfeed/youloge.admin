<template>
  <t-layout>
    <t-header>
      <t-head-menu value="item1" height="120px">
        <template #logo>
          <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
        </template>
        <template v-for="item in menu" :key="item.id">
          <t-menu-item value="item1" @click="menuClick(item)"> <t-icon :name="item.icon" />{{item.title}} </t-menu-item>
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside style="border-top: 1px solid var(--component-border)">
        <t-menu theme="light" :value="MenuValue" :collapsed="collapsed" @onChange="onChange">
          <template  v-for="item in aside" :key="item.id">
            <t-menu-item :value="item.path" :to="item.path">
              <template #icon>
                <t-icon :name="item.icon" />
              </template>
              {{item.name}}
            </t-menu-item>
          </template>
          <template #operations>
            <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
              <template #icon><t-icon :name="iconName" /></template>
            </t-button>
          </template>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content>
          <div> <RouterView></RouterView></div>
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>
<script setup>
import { onMounted,computed , toRefs,reactive,ref } from "vue";
import { useFetch } from "@/api/index.js"
defineOptions({name:'you-layout'});
const state = reactive({
  menu:[],
  aside:[],
  MenuValue:''
})
onMounted(()=>{
  console.log('onMounted');
  useFetch('config','menu',{},true).then(data=>{
    state.menu = data
    console.log(data);
  })
})
const collapsed = ref(false);

const iconName = computed(() => (collapsed.value ? 'chevron-right' : 'chevron-left'));

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};
const menuClick = (item)=>{
  state.aside = item.list
  console.log(item);
}
const { menu,aside,MenuValue } = toRefs(state);
</script>

<style>

</style>