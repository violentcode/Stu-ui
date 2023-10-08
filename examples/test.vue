<template>
  <div class="test">
    <stu-switch />
    <stu-popover>
      <template #reference>
        <stu-button >按钮</stu-button>
      </template>
      <template #default> 22 </template>
    </stu-popover>
  </div>
</template>
<script setup ts="lang">
import { stuSwitch, stuPopover, stuButton } from '../dist/bundle.mjs'
</script>
<style scoped>
.switch {
  margin-top: 20px;
}
</style>
