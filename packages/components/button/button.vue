<template>
  <button
    :class="inclass"
    :disabled="isdisabled"
  >
    <span><slot></slot></span>
    <span>I</span>
  </button>
</template>
<script>export default{name: "yButton"}</script>
<script setup>
  import {computed} from 'vue'
  // type、plain、round 和 circle
  const props = defineProps({
    type:{
      type:String,
      default:'default'
    },
    size:{
      type:String,
      default:''
    },
    icon:String,
    text:Boolean,
    link:Boolean,
    plain:Boolean,
    round:Boolean,
    circle:Boolean,
    disabled:Boolean,
    loading:Boolean
  })
  console.log(props)
  const inclass = computed(()=>{
    return [
      'y-button',
      `y-button-${props.type}`,
      {'y-button-text':props.text},
    ]
  })
  const isdisabled = computed(()=>{
    return props.disabled
  })
</script>
<style lang="scss">
.y-button-success {
  border: 1px solid $success;
  color: $info;
  background-color: $success;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:focus,
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
</style>