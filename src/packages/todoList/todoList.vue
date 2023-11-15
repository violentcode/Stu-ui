<template>
    <div class="stu-todo-list">
        stu-todoList
    </div>
</template>
<script  lang="ts" setup>
import {type ITodoListProps, todoListProps} from "./todoList"

withDefaults(defineProps<ITodoListProps>(), todoListProps)
</script>
<style scoped lang="less">
.stu-todo-list {
    color: black;
}
</style>