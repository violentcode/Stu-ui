<template>
  <div class="stu-popover">
    <Transition>
      <div ref="popperRef" v-show="showPopper" class="stu-popover__popper">
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
  placement: 'bottom'
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
<style scoped>
.stu-popover__popper {
  padding: 12px;
}
</style>
