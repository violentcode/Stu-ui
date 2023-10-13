<template>
    <component :is="tag" :class="{ 'stu-row': true, 'stu-row--nowrap': !wrap, [`stu-row--justify-${justify}`]: true }"
        ref="rowRef">
        <slot></slot>
    </component>
</template>
<script  lang="ts" setup>
import { type IRowProps, rowProps } from "./row"
import { onMounted, ref } from "vue";
const { gutter } = withDefaults(defineProps<IRowProps>(), rowProps)

const rowRef = ref<HTMLElement>()
onMounted(() => {
    if (!gutter || typeof +gutter !== 'number') return
    // 只获取子元素stu-col
    const cols = Array.from(rowRef.value?.children  as Iterable<Element>).filter((child) => child.classList.contains('stu-col')) as HTMLElement[];
    cols?.forEach((col, index) => {
        if (!index) {
            col.style.paddingRight = ((+gutter * 2) / 3) + 'px'
        }
        else if (index === cols.length - 1) {
            col.style.paddingLeft = ((+gutter * 2) / 3) + 'px'
        } else {
            col.style.paddingLeft = ((+gutter) / 3) + 'px'
            col.style.paddingRight = ((+gutter) / 3) + 'px'
        }
    })
})



</script>
<style scoped lang="less">
.stu-row {
    display: flex;
    flex-wrap: wrap;

    &--nowrap {
        flex-wrap: nowrap;
    }

    &--justify-center {
        justify-content: center;
    }

    &--justify-end {
        justify-content: flex-end;
    }

    &--justify-space-between {
        justify-content: space-between;
    }

    &--justify-space-around {
        justify-content: space-around;
    }

    &--align-center {
        align-items: center;
    }

    &--align-bottom {
        align-items: flex-end;
    }
}
</style>