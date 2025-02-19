/**
 * 获取或设置长期缓存
 * @param {string} key - 配置主键
 * @param {Array|Object} [value=false] - 新参数配置(覆盖原始配置)
 * @returns {Array|Object} 配置
 * @version 1.0.0
 * @since 0.0.0
 */
export const useStorage = (key,value=false)=>{
    let config = JSON.parse(localStorage.getItem(key) || '{}');
    value && (Object.assign(config, value),localStorage.setItem(key,JSON.stringify(config)))
    return config; 
  }