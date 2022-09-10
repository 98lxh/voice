<script setup lang="ts">
import { computed } from "vue";
import { useMouseSroll } from "@/hooks";
import { useAppStore } from "@/store/modules/app";
import { useColumnSize } from "./hooks/column-size";
import ActionBar from "./components/action-bar";
import Columns from "./components/columns";

const { cursor, viewport } = useAppStore();
const { size } = useColumnSize();
const { target } = useMouseSroll({
  frame: 10,
});

const { helper } = cursor!;

const styles = computed(() => ({
  ...(viewport ? { height: viewport.height + "px" } : {}),
}));
</script>

<template>
  <div class="home__content" ref="target" :style="styles" v-bind="helper.arrow">
    <ActionBar />
    <template v-for="i in 20" :key="i">
      <Columns :size="size" :id="i" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.home__content {
  display: flex;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
