<template>
    <div class="switch-demo">
        <div class="title">基础用法</div>
        <div class="source">
            <stu-sidebar v-model="active">
                <!-- <template v-for="item in 3" :key="item">
                    <stu-sidebar-item :title="item">
                        {{item}}
                    </stu-sidebar-item>
                </template> -->
                <stu-sidebar-item title="标签名1" >
                    1111111111111
                </stu-sidebar-item>
                <stu-sidebar-item title="标签名2" >
                    2222222222222
                </stu-sidebar-item>
                <stu-sidebar-item title="标签名3" :key="3">
                    3333333333333
                </stu-sidebar-item>
            </stu-sidebar>
        </div>
        <div class="title">自定义大小</div>
        <div class="source">
        </div>

    </div>
</template>
<script  lang="ts" setup>
import { stuSidebar, stuSidebarItem } from "../../../dist/bundle.mjs"
import { ref } from "vue"

const active = ref<number>(0)
</script>
<style scoped>
.home {
    color: black;
}
</style>