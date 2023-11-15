<template>
  <div class="stu-button">
    <button :class="`stu-button stu-button--${type} stu-button--${size}`">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { buttonProps, type IButtonProps } from './button'

withDefaults(defineProps<IButtonProps>(), buttonProps)
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
    background-color: var(--stu-primary-color);
    border: 1px solid var(--stu-primary-color);
  }
  &--success {
    background-color: var(--stu-success-color);
    border: 1px solid var(--stu-success-color);
  }
  &--warning {
    background-color: var(--stu-warning-color);
    border: 1px solid var(--stu-warning-color);
  }
  &--danger {
    background-color:  var(--stu-danger-color);
    border: 1px solid  var(--stu-danger-color);
  }
  &--default {
    background-color: var(--stu-white);
    color: var(--stu-black);
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
