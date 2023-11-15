<template>
  <div class="stu-sidebar">
    <div class="stu-sidebar__list">
      <template v-for="(item, index) in sidebars" :key="item ? item.title : index">
        <div :class="{
          'stu-sidebar__item': true,
          'stu-sidebar__item--select': index === modelValue,
          'stu-sidebar__item--disabled': isDisabled(item.disabled as (string | boolean)) // 只传递disabled实际传递的是disabled = ''
        }" @click="() => isDisabled(item.disabled as (string | boolean)) ? '': handleClickItem(index)">
          {{ item ? item.title : '' }}
        </div>
      </template>
    </div>
    <div class="stu-sidebar__panel">
      <component :is="renderContent" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type ISideBarProps, type ISideBarSlots, sideBarProps } from './sidebar'
import { type ISideBarItemProps } from "../sidebarItem/sidebarItem"
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<ISideBarProps>(), sideBarProps)

const emit = defineEmits(['update:modelValue'])

const slots = defineSlots<ISideBarSlots>()

// 获取默认插槽里面真实的内容，通过for循环遍历有可能存在fragment
let childrenSlot: any[] = []
function getDefaultSlot(slots: any) {
  for (const item of slots) {
    if (item.type === Symbol.for('v-fgt')) {
      getDefaultSlot(item.children)
    } else {
      // 不push注释
      if (item.type !== Symbol.for('v-cmt')) {
        childrenSlot.push(item)
      }
    }
  }
}
getDefaultSlot(slots.default())


const sidebars = ref<ISideBarItemProps[]>()
onMounted(() => {
  sidebars.value = childrenSlot.map((item: any) => item.props)
})

function handleClickItem(index: number) {
  emit('update:modelValue', index)
}

const renderContent = ref<any>(() => {
  return childrenSlot[0]
})

watch(() => props.modelValue, (newVal: any) => {
  renderContent.value = () => {
    return childrenSlot[newVal]
  }
})

// 判断是否是disabled
function isDisabled(disabled: string | boolean) {
  return disabled === true || disabled === ''
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
        background-color: var(--stu-primary-color);
      }
    }

    &--disabled {
      color: #c8c9cc;
      cursor: not-allowed;
    }

    &:not(.stu-sidebar__item--select, .stu-sidebar__item--disabled):hover {
      color: #1989fa;
    }
  }

  &__panel {
    padding: 20px;
  }
}
</style>
