<template>
    <component :is="tag" :class="{ 'stu-col': true, [`stu-col--${span}`]: !!span, [`stu-col--offset-${offset}`]: !!offset }">
        <slot></slot>
    </component>
</template>
<script  lang="ts" setup>
import { colProps, type IColProps } from "./col"
withDefaults(defineProps<IColProps>(), colProps)



</script>
<style scoped lang="less">
.stu-col {
    box-sizing: border-box
}
.generate-col(24);

// 递归生成类
.generate-col(@n, @i: 1) when (@i =< @n) {
    .stu-col--@{i} {
        flex: 0 0 @i *(100% / 24);
        max-width: @i * (100% / 24)
    }

    .stu-col--offset-@{i} {
        margin-left: @i * (100% / 24);
    }

    .generate-col(@n, (@i + 1));
}
</style>