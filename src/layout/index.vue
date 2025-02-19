<template>
  <t-layout>
    <t-header>
      <t-head-menu value="item0" height="120px">
        <template #logo>
          <div  @click="changeCollapsed">
            <t-button class="t-demo-collapse-btn" variant="text" shape="square">
              <template #icon><t-icon name="menu-fold" /></template>
            </t-button>
            Youloge·开发者
            <!-- <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" /> -->
          </div>
        </template>
        <template v-for="(item,index) in left" :key="index">
          <t-menu-item :value="`item${index}`" @click="menuClick(item)"> <t-icon :name="item.icon" />{{item.name}} </t-menu-item>
        </template>
        <template #operations>
          <template v-for="(item,index) in right" :key="index">
            <t-button variant="text" shape="square"  @click="menuClick(item)">
              <template #icon><t-icon :name="item.icon" /></template>
            </t-button>
          </template>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside style="border-top: 1px solid var(--component-border)">
        <t-menu theme="light" :value="state.active" :collapsed="collapsed" @onChange="onChange">
          <template  v-for="item in aside" :key="item.id">
            <t-menu-item :value="item.path" :to="item.path">
              <template #icon>
                <t-icon :name="item.icon" />
              </template>
              {{item.name}}
            </t-menu-item>
          </template>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content style="padding: 10px;">
          <div> <RouterView></RouterView></div>
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>
<script setup>
import { onMounted,computed , toRefs,reactive,ref } from "vue";
import menuConfig from "@/config/menu.js"
defineOptions({name:'you-layout'});
const state = reactive({
  left:[],
  right:[],
  menu:0,
  aside:[],
  MenuValue:''
})
onMounted(()=>{
  Object.assign(state,menuConfig);
  console.log('onMounted',state);
})
const useMenu = computed(()=>{
  return menuConfig.left
})
const useAside = computed(()=>{
  // let {menu} = state
  return useMenu[0].children
})
const menuClick = (item)=>{
  state.aside = item.children
  console.log('menuClick',item);
}
const asideClick = (index)=>{
  state.aside = index
}
const collapsed = ref(false);

const iconName = computed(() => (collapsed.value ? 'chevron-right' : 'chevron-left'));

const onChange = ()=>{

}
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const { menu,aside,left,right } = toRefs(state);
</script>

<style>

</style>