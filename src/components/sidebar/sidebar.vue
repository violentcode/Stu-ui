<template>
    <div class="stu-sidebar">
        stu-sidebar
    </div>
</template>
<script  lang="ts" setup>
interface IProps {
    modelValue: number | string
}
withDefaults(defineProps<IProps>(), {
    modelValue: 0
})

const emit = defineEmits<{
    'update:modelValue': [modelValue: number | string]
}>()



</script>
<style scoped lang="less">
.stu-sidebar {
    color: black;
}
</style>