import { defineConfig } from 'unocss'
import { presetAttributify } from 'unocss'
export default defineConfig({
    presets:[
        // presetAttributify(),
    ],
    rules:[
        ['dialog', {border:'none',position: 'fixed'}]
    ]
})