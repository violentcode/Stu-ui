<template>
    <div class="switch-demo">
        <div class="title">基础用法</div>
        <div class="source">
            <stu-switch />
        </div>
        <div class="title">自定义大小</div>
        <div class="source">
            <stu-switch size="34"/>
        </div>
        <div class="title">自定义颜色</div>
        <div class="source">
            <stu-switch activeColor="red" inactiveColor="green"/>
        </div>
    </div>
</template>
<script  lang="ts" setup>
import { stuSwitch } from "../../../dist/bundle.mjs"
</script>
<style scoped>
.home {
    color: black;
}
</style>