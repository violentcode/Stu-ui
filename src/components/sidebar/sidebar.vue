<template>
  <div class="stu-sidebar">
    <div class="stu-sidebar__list">
      <template v-for="(item, index) in sidebars" :key="item ? item.title:  index">
        <div :class="{
          'stu-sidebar__item': true,
          'stu-sidebar__item--select': index === currentIndex
        }" @click="handleClickItem(index)">
          {{ item ? item.title:  '' }}
        </div>
      </template>
    </div>
    <div class="stu-sidebar__panel">
      <component :is="renderContent" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface IProps {
  modelValue: number | string
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0
})

const emit = defineEmits<{
  'update:modelValue': [modelValue: number | string]
}>()

const slots = defineSlots<{
  default(): any
}>()

// 获取默认插槽里面真实的内容，通过for循环遍历有可能存在fragment
let childrenSlot: any[] = []
function getDefaultSlot(slots: any) {
  for (const item of slots) {
    if (item.type === Symbol.for('v-fgt')) {
      getDefaultSlot(item.children)
    }else {
      childrenSlot.push(item)
    }
  }
}
getDefaultSlot(slots.default())

interface ISidebars {
  title: string
  to: string
}
const sidebars = ref<ISidebars[]>()
onMounted(() => {
  sidebars.value = childrenSlot.map((item: any) => item.props)
})

const currentIndex = ref<number>(+props.modelValue)
function handleClickItem(index: number) {
  currentIndex.value = index
  emit('update:modelValue', index)
}

const renderContent = () => {
  return childrenSlot[currentIndex.value]
}
</script>
<style scoped lang="less">
.stu-sidebar {
  display: flex;

  &__item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 80px;
    height: 60px;
    background-color: #f7f8fa;
    cursor: pointer;

    color: #323233;
    font-size: 14px;
    padding-left: 10px;

    &--select {
      background-color: #fff;
      font-weight: 700;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 16px;
        background-color: #1989fa;
      }
    }

    &:not(.stu-sidebar-item--select):hover {
      color: #1989fa;
    }
  }

  &__panel {
    padding: 20px;
  }
}
</style>
