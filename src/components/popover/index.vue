<template>
  <div class="stu-popover">
    <Transition>
      <div
        ref="popperRef"
        v-show="showPopper"
        :class="`stu-popover__popper stu-popover__popper--${placement}`"
      >
        <slot></slot>
      </div>
    </Transition>
    <div ref="wrapperRef">
      <slot name="reference"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface IProps {
  trigger: 'click' | 'focus' | 'hover'
  title: string
  placement: 'top' | 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<IProps>(), {
  trigger: 'click',
  title: '',
  placement: 'top'
})

const showPopper = ref<boolean>(false)

const popperRef = ref<Element>()
const wrapperRef = ref<Element>()
onMounted(() => {
  const { trigger } = props
  // 获取传递进来的触发者
  const reference = wrapperRef.value?.children[0]
  switch (trigger) {
    case 'click':
      reference?.addEventListener('click', (e) => {
        showPopper.value = !showPopper.value
        e.stopPropagation()
      })
      document.addEventListener('click', () => {
        showPopper.value = false
      })
      break
    case 'focus':
      break
    case 'hover':
      break
  }
})
</script>
<style scoped lang="less">
.stu-popover {
  position: relative;
  &__popper {
    position: absolute;
    padding: 18px 12px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    &--top::after {
      position: absolute;
      content: '';
      border-left: 6px solid #f5f5f5;
      border-right: 6px solid #f5f5f5;
      border-top: 6px solid #fff;

      left: 50%;
      bottom: -12px;
      transform: translateX(-50%);
    }
    &--right::after {
      position: absolute;
      content: '';
    }
    &--bottom::after {
      position: absolute;
      content: '';
    }
    &--left::after {
      position: absolute;
      content: '';
    }
  }
}
</style>
