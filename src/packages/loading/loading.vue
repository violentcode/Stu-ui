<template>
    <div :class="{ 'stu-loading': true, 'stu-loading--vertical': vertical }">
        <span class="stu-loading__circular" :style="{ height: formatPX(size), width: formatPX(size) }">
            <svg class="circular" viewBox="25 25 50 50" :style="{ color: String(color) }">
                <circle cx="50" cy="50" r="20" fill="none" />
            </svg>
        </span>
        <span class="stu-loading__text" :style="{ fontSize: formatPX(textSize), color: String(textColor) }">
            <slot></slot>
        </span>
    </div>
</template>
<script  lang="ts" setup>
import { type ILoadingProps, loadingProps } from "./loading"
import { formatPX } from "../../utils/format"
withDefaults(defineProps<ILoadingProps>(), loadingProps)

</script>
<style scoped lang="less">
.stu-loading {
    display: inline-block;

    &__circular {
        display: inline-block;
        vertical-align: middle;
    }

    &--vertical {
        display: inline-flex;
        flex-direction: column;
        align-items: center;

        .stu-loading__text {
            margin: 8px 0 0 0;
        }
    }

    &__text {
        margin: 0 0 0 8px;
    }

    .circular {
        width: 100%;
        height: 100%;

        circle {
            animation: van-circular 1.5s ease-in-out infinite;
            stroke: currentColor;
            stroke-width: 3;
            stroke-linecap: round;
        }
    }
}



@keyframes van-circular {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120;
    }
}
</style>