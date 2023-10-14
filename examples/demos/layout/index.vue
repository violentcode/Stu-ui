<template>
  <div class="layout-demo">
    <div class="title">基础用法</div>
    <div class="source">
      <stu-row>
        <stu-col span="24">span：24</stu-col>
      </stu-row>
      <stu-row>
        <stu-col span="12">span：12</stu-col>
        <stu-col span="12">span：12</stu-col>
      </stu-row>
      <stu-row>
        <stu-col span="8">span：8</stu-col>
        <stu-col span="8">span：8</stu-col>
        <stu-col span="8">span：8</stu-col>
      </stu-row>
      <stu-row>
        <stu-col span="6">span：6</stu-col>
        <stu-col span="6">span：6</stu-col>
        <stu-col span="6">span：6</stu-col>
        <stu-col span="6">span：6</stu-col>
      </stu-row>
    </div>
    <div class="title">列元素间距</div>
    <div class="source">
      <stu-row gutter="20">
        <stu-col span="8"> span：8 </stu-col>
        <stu-col span="8">span：8</stu-col>
        <stu-col span="8">span：8</stu-col>
      </stu-row>
    </div>
    <div class="title">对齐方式</div>
    <div class="source">
      <stu-row gutter="20" justify="center">
        <stu-col span="6"> span：6 </stu-col>
        <stu-col span="6">span：6</stu-col>
        <stu-col span="6">span：6</stu-col>
      </stu-row>
      <!-- 右对齐 -->
      <stu-row justify="end">
        <stu-col span="6">span: 6</stu-col>
        <stu-col span="6">span: 6</stu-col>
        <stu-col span="6">span: 6</stu-col>
      </stu-row>

      <!-- 两端对齐 -->
      <stu-row justify="space-between">
        <stu-col span="6">span: 6</stu-col>
        <stu-col span="6">span: 6</stu-col>
        <stu-col span="6">span: 6</stu-col>
      </stu-row>

      <!-- 每个元素的两侧间隔相等 -->
      <stu-row justify="space-around">
        <stu-col span="6">span: 6</stu-col>
        <stu-col span="6">span: 6</stu-col>
        <stu-col span="6">span: 6</stu-col>
      </stu-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { stuRow, stuCol } from '../../../dist/bundle.mjs'
</script>
<style scoped lang="less">
.layout-demo {
  color: #fff;
  font-size: 14px;
}

:deep(.stu-row) {
  margin-bottom: 10px;
}

:deep(.stu-col) {
  text-align: center;
  line-height: 36px;
  height: 36px;
  // border-radius: 4px;
  background-clip: content-box;
}

:deep(.stu-col):nth-child(2n) {
  background-color: #215e21;
}

:deep(.stu-col):nth-child(2n + 1) {
  background-color: #238e23;
}
</style>
