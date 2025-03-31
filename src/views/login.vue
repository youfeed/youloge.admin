<template>
    <div class="h-full w-full bg-gray-100">

        <div
            class="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex justify-center items-center min-h-screen">
            <h1
                class="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                登录</h1>

        </div>
    </div>
</template>

<script setup>
import usePlus from "youloge.plus"
defineOptions({ name: 'you-login', inheritAttrs: false });
const router = useRouter(), route = useRoute();
console.log(router, route)
const state = reactive({
    show: false,
    hash: `#${Math.random().toString(36)}`,
    form: null
})
const config = reactive(useConfig())

onMounted(() => {
    let { hash } = state; state.show = true;
    let auth = useAuth();
    let plus = usePlus();
    auth ? router.push('/') : plus.login({ close: false }).then(profile => {
        console.log(profile)
        useStorage('profile', profile);
        router.push('/')
    }).catch(err => {
        // console.log(err)
    });
})

const { show, form, hash } = toRefs(state)
</script>

<style lang="scss">
.login {
    margin: 40px auto;
    border-radius: 4px;
    padding: 20px;
    height: 400px;
    width: 500px;

    iframe {
        border: 0;
        height: 100%;
        width: 100%;
    }
}

bodys {
    /* 设置容器尺寸 - 原理1 */
    // width: 400px;
    // height: 400px;
    /* 背景渐变色 - 原理2 */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /* 背景尺寸 - 原理3 */
    background-size: 600% 600%;
    /* 循环动画 - 原理4 */
    animation: gradientBG 5s ease infinite;
}

/* 动画，控制背景 background-position */
@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>