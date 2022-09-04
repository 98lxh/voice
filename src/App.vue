<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { useWindowSize, useCursor } from "@/hooks";
import { RouterView } from "vue-router";

const { setCursor, setViewport } = useAppStore();

setCursor(
  useCursor({
    mode: "normal",
    line: true
  })
);

setViewport(
  useWindowSize({
    wait: 100,
    immediate: true
  })
);
</script>

<template>
  <RouterView #="{ Component }">
    <Transition name="zoom-fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
