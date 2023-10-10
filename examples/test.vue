<template>
  <div class="test">
    <stu-sidebar v-model="active">
      <stu-sidebar-item title="Switch开关" to="/button">
        <stu-switch />
      </stu-sidebar-item>
      <stu-sidebar-item title="Popover弹出框" to="/switch">
        <stu-popover placement="top" title="我是通过props传递进来的">
          <template #reference>
            <stu-button type="primary" style="margin-left: 300px; margin-top: 200px">主要按钮</stu-button>
          </template>
          <template #default> 这是一段内容,这是一段内容,这是一段内容,这是一段内容。 </template>
        </stu-popover>
      </stu-sidebar-item>
      <stu-sidebar-item title="Layout布局" to="/layout">
        开发中
      </stu-sidebar-item>
    </stu-sidebar>
  </div>
</template>
<script setup ts="lang">
import { ref } from 'vue';
import { stuPopover, stuButton, stuSwitch, stuSidebar, stuSidebarItem } from '../dist/bundle.mjs'

const active = ref(0)
</script>
<style scoped>
.switch {
  margin-top: 20px;
}

:deep(.stu-sidebar__item) {
  width: 140px !important;
}

</style>


