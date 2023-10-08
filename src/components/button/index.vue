<template>
  <div class="stu-button">
    <button :class="`stu-button stu-button--${type} stu-button--${size}`">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  type: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  size: 'large' | 'small' | 'mini' | 'normal'
}

withDefaults(defineProps<IProps>(), {
  type: 'default',
  size: 'normal'
})
</script>
<style scoped lang="less">
.stu-button {
  position: relative;
  display: inline-block;
  padding: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  &--primary {
    background-color: #1989fa;
    border: 1px solid #1989fa;
  }
  &--success {
    background-color: #07c160;
    border: 1px solid #07c160;
  }
  &--warning {
    background-color: #ff976a;
    border: 1px solid #ff976a;
  }
  &--danger {
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }
  &--default {
    background-color: #fff;
    color: black;
    border: 1px solid #f5f5f5;
  }
  &--large {
    width: 328px;
    height: 50px;
    font-size: 16px;
  }
  &--small {
    width: 66px;
    height: 32px;
    font-size: 12px;
  }
  &--mini {
    width: 58px;
    height: 24px;
    font-size: 12px;
  }
  &--normal {
    width: 88px;
    height: 44px;
    font-style: 14px;
  }
  &:active::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
