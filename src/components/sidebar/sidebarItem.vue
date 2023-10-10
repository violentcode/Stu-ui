<template>
    <div class="stu-sidebar-item">
        <slot></slot>
    </div>
</template>
<script  lang="ts" setup>
interface IProps {
    title: string
    to: string
}
withDefaults(defineProps<IProps>(), {
    title: '',
    to: '/'
})
</script>
<style scoped lang="less">
.stu-sidebar-item {
    color: black;
}
</style>