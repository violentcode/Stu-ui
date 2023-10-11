<template>
  <div class="test">
    <stu-sidebar v-model="active">
      <template v-for="item in demos" :key="item.title">
        <stu-sidebar-item :title="item.title">
          <component :is="item.demo"></component>
        </stu-sidebar-item>
      </template>
    </stu-sidebar>
  </div>
</template>
<script setup lang="ts">
import demos from "./demos/index"
import { ref } from 'vue'
import { stuSidebar, stuSidebarItem } from "../dist/bundle.mjs";

const active = ref(0)


</script>
<style scoped>
:deep(.stu-sidebar__item) {
  width: 140px !important;
}
</style>

