<template>
  <div class="popover-demo">
    <div class="title">基础用法</div>
    <div class="source">
      <stu-popover
        placement="top"
        trigger="hover"
        title="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      >
        <template #reference>
          <stu-button>hover 激活</stu-button>
        </template>
      </stu-popover>
      <stu-popover
        placement="top"
        trigger="click"
        title="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      >
        <template #reference>
          <stu-button>click 激活</stu-button>
        </template>
      </stu-popover>
      <stu-popover
        placement="top"
        trigger="focus"
        title="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      >
        <template #reference>
          <stu-button>focus 激活</stu-button>
        </template>
      </stu-popover>
      <stu-popover
        placement="top"
        trigger="manual"
        title="在人生的每个阶段，我们都对漫漫前程抱着一份激动的希望，以为奇迹就在前方。"
        v-model="showPopper"
      >
        <template #reference>
          <stu-button @click="showPopper = !showPopper">手动 激活</stu-button>
        </template>
      </stu-popover>
    </div>
    <div class="title">popover出现位置</div>
    <div class="source">
      <stu-popover
        placement="top"
        title="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
      >
        <template #reference>
          <stu-button>上方出现</stu-button>
        </template>
      </stu-popover>
      <stu-popover placement="right" title="米袋虽空——樱花开哉！">
        <template #reference>
          <stu-button>右方出现</stu-button>
        </template>
      </stu-popover>
      <stu-popover placement="bottom" title="仙人抚我顶，结发受长生。">
        <template #reference>
          <stu-button>下方出现</stu-button>
        </template>
      </stu-popover>
      <stu-popover placement="left" title="明月直入，无心可猜。">
        <template #reference>
          <stu-button>左方出现</stu-button>
        </template>
      </stu-popover>
    </div>
    <div class="title">自定义Popover内容</div>
    <div class="source">
      <stu-popover placement="bottom" trigger="manual" v-model="showDelPopper">
        <template #reference>
          <stu-button @click="showDelPopper = true">删除</stu-button>
        </template>
        <template #default>
          是否确认删除？
          <div class="control">
            <stu-button size="mini" @click="showDelPopper = false"
              >取消</stu-button
            >
            <stu-button
              type="primary"
              size="mini"
              @click="showDelPopper = false"
              >确认</stu-button
            >
          </div>
        </template>
      </stu-popover>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { stuButton, stuPopover } from '../../../dist/bundle.mjs'
import { ref } from 'vue'

const showPopper = ref<boolean>(false)
const showDelPopper = ref<boolean>(false)
</script>
<style scoped>
.popover-demo {
  color: black;
}
.control {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
