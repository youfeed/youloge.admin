import { computed } from "vue";

/**
 * 
 * 全局 loading
 */
const _loadCount = ref(0);
export const useLoading = () => computed({
    get(){
        return _loadCount.value > 0;
    },
    set(val){
        _loadCount.value += val ? 1 : -1;
        _loadCount.value = Math.max(_loadCount.value,0);
    }
})