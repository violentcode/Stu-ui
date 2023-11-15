<template>
    <div class="stu-todo-list">
        <div class="stu-todo-list__title">
            todos
        </div>
        <div class="stu-todo-list__box">
            <div class="stu-todo-list__input"></div>
            <div class="stu-todo-list__list"></div>
            <div class="stu-todo-list__filter"></div>
        </div>
    </div>
</template>
<script  lang="ts" setup>
import {type ITodoListProps, todoListProps} from "./todoList"

withDefaults(defineProps<ITodoListProps>(), todoListProps)
</script>
<style scoped lang="less">
.stu-todo-list {
    &__title {
        color: var(--stu-primary-color);
        font-size: ;
    }

    &__box {

    }
}
</style>