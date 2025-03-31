import { defineConfig,presetWind,presetWind3,presetAttributify } from 'unocss'
export default defineConfig({
    Theme:{
        // 主题配置 
    },
    presets:[
        presetWind(), //预设Uno
        presetWind3(), //预设wind3
        presetAttributify(), //预设属性化
    ],
    // rules:[
    // ]
});