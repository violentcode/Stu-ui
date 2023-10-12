<template>
    <component :is="tag"  class="stu-row">
        <slot></slot>
    </component>

</template>
<script  lang="ts" setup>
import {type IRowProps, rowProps} from "./row"
withDefaults(defineProps<IRowProps>(), rowProps)
</script>
<style scoped lang="less">
.stu-row {
    display: flex;
    flex-wrap: wrap;
}


</style>