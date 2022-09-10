<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import { Input, Button, Pagionaction } from "useless-ui";
import List from "./list.vue";

const { viewport, cursor } = useAppStore();

const style = computed(() => ({
  minWidth: viewport?.width + "px",
}));
</script>

<template>
  <div :style="style" h-full px-5>
    <div flex justify-end gap-5 mb-5>
      <Input placeholder="请输入歌名" v-bind="cursor!.helper.input">
        <template #prefix>
          <Icon name="search" />
        </template>
      </Input>

      <Button type="primary" v-bind="cursor!.helper.point">搜索</Button>
    </div>

    <div :style="{height:viewport!.height - 200 + 'px'}" overflow-y-auto>
      <List />
    </div>

    <div flex justify-end mt="20px">
      <Pagionaction :total="5" :page-count="10" v-bind="cursor!.helper.point" />
    </div>
  </div>
</template>
