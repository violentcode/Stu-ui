<template>
  <div class="stu-switch">
    <input
      type="checkbox"
      v-model="currentCheck"
      class="stu-switch__checkbox"
    />
    <div
      :class="{
        'stu-switch__core': true,
        'stu-switch__core--on': currentCheck,
        'stu-switch__core--off': !currentCheck
      }"
      :style="{
        backgroundColor: currentCheck ? activeColor : inactiveColor,
        transform: `scale(${+String(size).replace('px', ' ') / 26})`
      }"
      @click="handleChangeSwitch"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { type ISwitchProps, switchProps } from './switch'
import { ref } from 'vue'

withDefaults(defineProps<ISwitchProps>(), switchProps)

const currentCheck = ref(false)
const handleChangeSwitch = () => {
  currentCheck.value = !currentCheck.value
}
</script>
<style scoped lang="less">
.stu-switch {
  position: relative;
  &__checkbox {
    position: absolute;
    width: 0;
    height: 0;
  }
  &__core {
    position: relative;
    width: 55px;
    height: 30px;
    border-radius: 26px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &::after {
      position: absolute;
      top: 2px;
      content: '';
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: #fff;
      transition: left 0.5s ease;
    }
    &--on {
      &::after {
        left: calc(100% - 28px);
      }
    }

    &--off {
      &::after {
        left: 2px;
      }
    }
  }
}
</style>
