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
import { ref } from 'vue'

interface IProps {
  size: string | number
  activeColor: string
  inactiveColor: string
}

withDefaults(defineProps<IProps>(), {
  size: '26px',
  activeColor: '#1989fa',
  inactiveColor: 'rgba(120, 120, 128, 0.16)'
})

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
