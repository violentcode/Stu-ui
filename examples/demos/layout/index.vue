<template>
    <div class="layout-demo">
        <div class="title">基础用法</div>
        <div class="source">
            <stu-row>
                <stu-col span="12">左边</stu-col>
                <stu-col span="12" offset="1">右边</stu-col>
            </stu-row>
        </div>
    </div>
</template>
<script  lang="ts" setup>
import {stuRow, stuCol} from "../../../dist/bundle.mjs"

</script>
<style scoped lang="less">
.layout-demo {
    color: black;
}
</style>