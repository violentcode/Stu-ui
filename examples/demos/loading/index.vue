<template>
  <div class="loading-demo">
    <div class="title">基础用法</div>
    <div class="source">
      <stu-loading></stu-loading>
    </div>
    <div class="title">自定义颜色</div>
    <div class="source">
      <stu-loading color="rgb(25, 137, 250)"></stu-loading>
    </div>
    <div class="title">自定义大小</div>
    <div class="source">
      <stu-loading size="40"></stu-loading>
    </div>
    <div class="title">加载文案</div>
    <div class="source">
      <stu-loading>加载中...</stu-loading>
    </div>
    <div class="title">垂直排列</div>
    <div class="source">
      <stu-loading vertical>加载中...</stu-loading>
    </div>
  </div>
</template>
<script setup lang="ts">
import { stuLoading } from "../../../dist/bundle.mjs"
</script>
<style scoped lang="less"></style>
