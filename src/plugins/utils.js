
/**
 * 判断是否颜色主题模式。
 * @param {('dark'|'light')} [mode='dark'] - 颜色模式默认('dark')
 * @returns {boolean} 是否颜色主题模式
 * @version 1.0.0
 * @since 0.0.0
 */
export const colorScheme = (mode='dark') => {
    return window.matchMedia(`(prefers-color-scheme: ${mode})`).matches
}

