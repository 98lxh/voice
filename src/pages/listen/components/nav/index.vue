<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { Button, Space, Tooltip } from "useless-ui";
import Icon from "@/components/icon";

defineProps<{
  scrollTo: (left: number) => void;
  target: HTMLElement | null;
}>();

const { back } = useRouter();
const { cursor, viewport } = useAppStore();

const backRef = ref<HTMLElement | null>(null);

onBeforeRouteLeave(() => cursor?.reset());
</script>

<template>
  <div h="80px" w-full px="10px" flex items-center justify-between>
    <div
      ref="backRef"
      border-1
      w="40px"
      h="40px"
      style="border-color: #1a5cff"
      flex
      items-center
      justify-center
      v-bind="
        cursor?.helper.element(backRef, {
          color: '#1a5cff',
          transparent: true,
        })
      "
      @click="() => back()"
    >
      <Icon name="back" size="15px" color="#1a5cff" />
    </div>

    <Space
      :size="10"
      v-bind="cursor?.helper.point"
      fixed
      left="50%"
      top="40px"
      translate="-50%"
    >
      <Tooltip placement="bottom" content="播放列表">
        <Icon name="list" color="#1a5cff" size="20px" />
      </Tooltip>
      <Tooltip placement="bottom" content="上一首">
        <Icon name="prev" color="#1a5cff" size="20px" />
      </Tooltip>
      <Tooltip placement="bottom" content="播放">
        <Icon name="play" color="#1a5cff" size="20px" />
      </Tooltip>
      <Tooltip placement="bottom" content="下一首">
        <Icon name="next" color="#1a5cff" size="20px" />
      </Tooltip>
    </Space>

    <div>
      <Button type="text" px="5px" @click="() => scrollTo(0)">搜索</Button>
      <Button type="text" px="5px" @click="() => scrollTo(viewport!.width)"
        >播放器</Button
      >
    </div>
  </div>
</template>
