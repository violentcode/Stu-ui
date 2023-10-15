<template>
  <div class="stu-loading">
    <svg class="circular" viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.circular {
  display: block;
  width: 100%;
  height: 100%;
  color: rgb(25, 137, 250);
  circle {
    animation: van-circular 1.5s ease-in-out infinite;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
  }
}

@keyframes van-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
