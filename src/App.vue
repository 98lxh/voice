<script setup lang="ts">
import { ref } from "vue";
import { useCursor } from "./hooks/core/use-cursor";

const { helper } = useCursor({
  mode: "normal",
  line: true
});

const elRef = ref<HTMLElement | null>(null);
</script>

<template>
  <div
    ref="elRef"
    style="width: 40px; height: 40px; border: 1px solid red"
    v-bind="helper.element(elRef)"
  >
    <span>el</span>
  </div>
</template>

<style></style>
