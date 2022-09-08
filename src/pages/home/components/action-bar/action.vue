<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import { ACTION_BAR_HEIGHT } from "@/config/layout";
import { Button, Input, Tooltip } from "useless-ui";
import Icon from "@/components/icon";
import Create from "./create.vue";

const { cursor } = useAppStore();
const createRef = ref<InstanceType<typeof Create> | null>(null);

const onDisplayCreateModal = () => createRef.value?.onDisplay();

const style = computed(() => ({
  height: ACTION_BAR_HEIGHT + "px"
}));
</script>

<template>
  <div
    top="50px"
    text-white
    w-full
    fixed
    flex
    justify-between
    items-center
    px="15px"
    :style="style"
  >
    <Tooltip placement="right" content="搜索房间">
      <Input placeholder="请输入房间号" v-bind="cursor!.helper.point">
        <template #prefix>
          <Icon name="search" />
        </template>
      </Input>
    </Tooltip>

    <Tooltip placement="left" content="创建房间">
      <Button
        type="primary"
        v-bind="cursor!.helper.point"
        @click="onDisplayCreateModal"
        >创建</Button
      >
    </Tooltip>

    <Create ref="createRef" />
  </div>
</template>
