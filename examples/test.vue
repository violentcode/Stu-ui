<template>
  <div class="test">
    <!-- <stu-switch /> -->
    <stu-popover placement="top"  title="我是通过props传递进来的">
      <template #reference>
        <stu-button type="primary" style="margin-left: 300px; margin-top: 200px"
          >主要按钮</stu-button
        >
      </template>
      <template #default> 这是一段内容,这是一段内容,这是一段内容,这是一段内容。 </template>
    </stu-popover>
    <stu-switch ></stu-switch>
  </div>
</template>
<script setup ts="lang">
import { stuPopover, stuButton, stuSwitch } from '../dist/bundle.mjs'
</script>
<style scoped>
.switch {
  margin-top: 20px;
}
</style>
