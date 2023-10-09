<template>
  <div class="stu-popover">
    <Transition name="stu-popover">
      <div ref="popperRef" v-show="showPopper" :class="`stu-popover__popper stu-popover__popper--${placement}`">
      <!-- 优先展示插槽进来的内容 / 如果没插槽再考虑props传递进来的title -->
        <template v-if="slots.default">
          <slot></slot>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </div>
    </Transition>
    <div ref="wrapperRef" class="stu-popover__wrapper">
      <slot name="reference"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const slots = defineSlots<{
  default: any
  reference: any
}>()
// console.log(slot);
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

const popperRef = ref<HTMLElement>()
const wrapperRef = ref<HTMLElement>()

let popperLeft = 0
let popperTop = 0

onMounted(() => {
  // 获取传递进来的触发者/popver
  const referenceEl = wrapperRef.value?.children[0] as HTMLElement
  const popperEl = popperRef.value as HTMLElement

  bindListening(referenceEl)
  compPopoverPosition(referenceEl, popperEl)
})

function bindListening(referenceEl: HTMLElement) {
  const { trigger } = props

  switch (trigger) {
    case 'click':
      referenceEl.addEventListener('click', (e) => {
        showPopper.value = !showPopper.value
        e.stopPropagation()
      })
      document.addEventListener('click', e => {
        if (e.target !== popperRef.value) {
          showPopper.value = false
        }
      })
      break
    case 'hover':
      referenceEl.addEventListener('mouseenter', () => {
        showPopper.value = true
      })
      referenceEl.addEventListener('mouseleave', () => {
        showPopper.value = false
      })
      break
    case 'focus':
      referenceEl.addEventListener('mousedown', () => {
        showPopper.value = true
      })
      referenceEl.addEventListener('mouseup', () => {
        showPopper.value = false
      })
      break
  }
}

// 计算popover的位置
function compPopoverPosition(referenceEl: HTMLElement, popperEl: HTMLElement) {

  // 计算出触发者的位置
  const referenceLeft = referenceEl.offsetLeft
  const referenceTop = referenceEl.offsetTop
  const referenceWidth = referenceEl.offsetWidth
  const referenceHeight = referenceEl.offsetHeight

  // 计算popper的宽高
  popperEl.style.display = 'block'
  const popperWidth = popperEl.offsetWidth
  const popperHeight = popperEl.offsetHeight
  popperEl.style.display = 'none'
  console.log(referenceLeft, referenceTop, referenceWidth, referenceHeight, popperWidth, popperHeight);
  switch (props.placement) {
    case 'top':
      popperLeft = referenceLeft - popperWidth / 2 + referenceWidth / 2
      popperTop = referenceTop - popperHeight - 12
      break;
    case 'bottom':
      popperLeft = referenceLeft - popperWidth / 2 + referenceWidth / 2
      popperTop = referenceTop + referenceHeight + 12
      break;
    case 'left':
      popperLeft = referenceLeft - popperWidth - 12
      popperTop = referenceTop - popperHeight / 2 + referenceHeight / 2
      break;
    case 'right':
      popperLeft = referenceLeft + referenceWidth + 12
      popperTop = referenceTop - popperHeight / 2 + referenceHeight / 2
      break;
  }
}

// 当popper显示时，就设置位置
watch(showPopper, (newVal) => {
  if (newVal) {
    const popperEl = popperRef.value as HTMLElement
    popperEl.style.left = popperLeft + 'px'
    popperEl.style.top = popperTop + 'px'
  }
})


</script>
<style scoped lang="less">
.stu-popover {
  position: relative;

  &__popper {
    position: absolute;
    padding: 18px 12px;
    width: 200px;
    min-width: 150px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    font-size: 14px;
    color: rgb(96, 98, 102);
    line-height: 19.6px;

    &::after {
      position: absolute;
      content: '';
    }

    &--top::after {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #fff;
      left: 50%;
      bottom: -6px;
      transform: translateX(-50%);
    }

    &--bottom::after {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fff;
      left: 50%;
      top: -6px;
      transform: translateX(-50%);
    }

    &--left::after {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #fff;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
    }

    &--right::after {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #fff;
      top: 50%;
      left: -6px;
      transform: translateY(-50%);
    }
  }
}

.stu-popover-enter-from,
.stu-popover-leave-to {
  opacity: 0;
}

.stu-popover-enter-to,
.stu-popover-leave-from {
  opacity: 1;
}

.stu-popover-enter-active,
.stu-popover-leave-active {
  transition: all 0.5s ease;
}
</style>
