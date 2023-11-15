<template>
    <div class="todoList-demo">
        <div class="title">基础用法</div>
        <div class="source">
            <stuTodoList />
        </div>
        <div class="title">自定义大小</div>
        <div class="source">
        </div>
        <div class="title">自定义颜色</div>
        <div class="source">
        </div>
    </div>
</template>
<script  lang="ts" setup>
import { stuTodoList } from "../../../dist/bundle.mjs"
</script>
<style scoped>
.home {
    color: black;
}
</style>