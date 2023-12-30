export const isDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
export const useConfig = ()=>{
  return JSON.parse(sessionStorage.getItem('config') || '{}')
}
export const setConfig = (item)=>{
  let config = useConfig()
  Object.assign(config,item);
  return sessionStorage.setItem('config',JSON.stringify(config))
}
export const useStorage = ()=>{
  return JSON.parse(localStorage.getItem('youloge') || '{}')
}
export const setStorage = (item)=>{
  let storage = useStorage();
  Object.assign(storage,item);
  return localStorage.setItem('youloge',JSON.stringify(storage));
}

export const useAuth = ()=>{
  let {expire,signature} = useStorage();
  return signature && expire > new Date().getTime() / 1000 >> 0;
}