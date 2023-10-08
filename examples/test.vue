<template>
  <div class="test">
    <!-- <stu-switch /> -->
    <stu-popover>
      <template #reference>
        <stu-button type="primary" style="margin-left: 100px; margin-top: 100px"
          >主要按钮</stu-button
        >
      </template>
      <template #default> 22 </template>
    </stu-popover>
  </div>
</template>
<script setup ts="lang">
import { stuPopover, stuButton } from '../dist/bundle.mjs'
</script>
<style scoped>
.switch {
  margin-top: 20px;
}
</style>
