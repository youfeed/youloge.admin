/**
 * 判断是否为登录状态
 * @param {string} [key='profile'] - 主键(默认：'profile'中的`access_token`与`expire`)
 * @returns {Boolean} 是否登录有效
 * @version 1.0.0
 * @since 0.0.0
 */
export const useAuth = (key='profile')=>{
    let {expire,access_token} = useStorage(key);
    return access_token && expire > new Date().getTime() / 1000 >> 0;
}