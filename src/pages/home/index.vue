<script setup lang="ts">
import { useMouseSroll } from "@/hooks";
import { useAppStore } from "@/store/modules/app";
import Column from "./components/column.vue";

const { cursor } = useAppStore();
const { helper } = cursor!;

const { target } = useMouseSroll({
  frame: 30
});
</script>

<template>
  <div
    ref="target"
    flex
    w-full
    reactive
    h="100vh"
    overflow-y-hidden
    duration="200ms"
    v-bind="helper.arrow"
  >
    <template v-for="i in 20" :key="i">
      <Column :id="i" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
div {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
