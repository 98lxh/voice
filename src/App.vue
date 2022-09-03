<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { useCursor } from "./hooks/core/use-cursor";
import { RouterView } from "vue-router";

const { setCursor } = useAppStore();

setCursor(
  useCursor({
    mode: "normal",
    line: true
  })
);
</script>

<template>
  <RouterView />
</template>
