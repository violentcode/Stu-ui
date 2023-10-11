<template>
  <div class="stu-sidebar-item">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { type ISideBarItemProps, sideBarItemProps } from './sidebarItem'
withDefaults(defineProps<ISideBarItemProps>(), sideBarItemProps)
</script>
<style scoped lang="less">
.stu-sidebar-item {
  color: black;
}
</style>
