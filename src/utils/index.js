export const isDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
export const useConfig = ()=>{
  return JSON.parse(sessionStorage.getItem('config') || '{}')
}
export const setConfig = (key,item)=>{
  let config = useConfig()
  config[key] = item;
  return sessionStorage.setItem('config',JSON.stringify(config))
}
export const useStorage = ()=>{
  return JSON.parse(localStorage.getItem('youloge') || '{}')
}

export const useAuth = ()=>{
  let {expire,signature} = useStorage();
  return signature && expire > new Date().getTime() / 1000 >> 0;
}