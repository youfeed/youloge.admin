<template>
    <div class="flex h-screen">
        <!-- 侧边栏 -->
        <div class="w-64 bg-gray-800 text-white">
            <div className="p-4"  p="y-2 x-4">
                <h1 className="text-xl font-bold">管理后台</h1>
            </div>
            <ul className="space-y-2 p-4">
                <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">仪表盘</a></li>
                <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">用户管理</a></li>
                <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">订单管理</a></li>
                <li><a href="#" className="block hover:bg-gray-700 p-2 rounded">设置</a></li>
            </ul>
            <!-- 版权 -->
            <div class="">Copyright @ 2019-{{ new Date().getFullYear() }}</div>
        </div>
        <!-- 主内容 -->
        <div class="flex-1 flex flex-col">
            <!-- 顶部导航栏 -->
            <div className="bg-white shadow-md p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">欢迎使用管理后台</h2>
                    <div>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">退出登录</button>
                    </div>
                </div>
            </div>
            <!-- 主要内容区域 -->
            <div className="p-4 flex-1 overflow-y-auto">
                <router-view></router-view>
            </div>
        </div>
    </div>
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