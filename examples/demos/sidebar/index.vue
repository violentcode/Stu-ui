<template>
    <div class="sidebar-demo">
        <div class="title">基础用法</div>
        <div class="source">
            <stu-sidebar v-model="active">
                <stu-sidebar-item title="标签名1">
                    内容一
                </stu-sidebar-item>
                <stu-sidebar-item title="标签名2">
                    内容二
                </stu-sidebar-item>
                <stu-sidebar-item title="标签名3">
                    内容三
                </stu-sidebar-item>
            </stu-sidebar>
        </div>
        <div class="title">禁用选项</div>
        <div class="source">
            <stu-sidebar v-model="disabledActive">
                <stu-sidebar-item title="标签名1">
                    内容一
                </stu-sidebar-item>
                <stu-sidebar-item title="标签名2" disabled>
                    内容二
                </stu-sidebar-item>
                <stu-sidebar-item title="标签名3" >
                    内容三
                </stu-sidebar-item>
            </stu-sidebar>
        </div>

    </div>
</template>
<script  lang="ts" setup>
import { stuSidebar, stuSidebarItem } from "../../../dist/bundle.mjs"
import { ref } from "vue"

const active = ref<number>(0)

const disabledActive = ref<number>(0)
</script>
<style scoped>
.sidebar-demo {
    color: black;
    font-size: 18px;
}
</style>