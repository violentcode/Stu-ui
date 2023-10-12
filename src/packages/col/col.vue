<template>
    <component :is="tag" :class="`stu-col stu-col--${span} stu-col--offset-${offset} `">
        <slot></slot>
    </component>
</template>
<script  lang="ts" setup>
import { colProps, type IColProps } from "./col"
withDefaults(defineProps<IColProps>(), colProps)

</script>
<style scoped lang="less">
.generate-col(24);

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