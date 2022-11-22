<template>
  <div class="y-input">
    <input :id="uuid" :type="itype" :placeholder="placeholder" :value="modelValue" @input="onInput"/>
    <label :for="uuid">{{label}}</label>
  </div>
</template>

<script>
export default { name:'yInput'}
</script>
<script setup>
import { ref,defineEmits, computed} from 'vue'
const emit = defineEmits(['update:modelValue','clear','focus','blur','input','change'])
const props = defineProps({
  modelValue:[String,Number],
  type:String,
  placeholder:String,
  disabled:Boolean,
  readyonly:Boolean,
  label:String
})
// const state = reactive({
  
// })
// const solt = useSlots()
const uuid = computed(()=>{
  // return new Math.round().toString(32).
  return '__'+Math.random().toString(32).substring(2,)
})
const itype = ref(props.type)
const onInput = (e) => {
  emit('update:modelValue',e.target.value)
  emit('input',e.target.value)
}
console.log(props)
// const {value} = state
</script>
<style lang="scss">
.y-input{
  position: relative;
  border: 1px solid #d1d5db;
  border-radius: .25rem;
  input{
    outline: 0;
    border: 0;
    padding: .5rem;
    height: 100%;
  }
  input:not(:placeholder-shown) + label {
    background: rgba(255, 255, 255, 0.278);
    transform: translate(0, -200%);
    opacity: 1;
  }
  label{
    left: 1rem;
    position: absolute;
    top: 100%;
    opacity: 0;
    transition: all 200ms;
    padding: 0 .5rem;
  }
}
</style>