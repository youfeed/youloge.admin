export const isDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}