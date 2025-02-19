/**
 * 获取或设置临时缓存
 * @param {string} key - 配置主键
 * @param {Array|Object} [value=false] - 新参数配置(覆盖原始配置)
 * @returns {Array|Object} 配置
 * @version 1.0.0
 * @since 0.0.0
 */
export const useConfig = (key,value=false)=>{
    let config = JSON.parse(sessionStorage.getItem(key) || '{}');
    value && (Object.assign(config, value),sessionStorage.setItem(key,JSON.stringify(config)))
    return config;
  }