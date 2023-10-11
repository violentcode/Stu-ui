<template>
  <div class="button-demo">
    <div class="title">按钮类型</div>
    <div class="source">
      <stuButton type="primary">主要按钮</stuButton>
      <stuButton type="success">成功按钮</stuButton>
      <stuButton type="default">默认按钮</stuButton>
      <stuButton type="warning">警告按钮</stuButton>
      <stuButton type="danger">危险按钮</stuButton>
    </div>
    <div class="title">按钮尺寸</div>
    <div class="source">
      <stuButton type="primary" size="large">大号按钮</stuButton>
      <stuButton type="primary" size="normal">普通按钮</stuButton>
      <stuButton type="primary" size="small">小型按钮</stuButton>
      <stuButton type="primary" size="mini">迷你按钮</stuButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { stuButton } from '../../../dist/bundle.mjs'
</script>
<style scoped></style>
