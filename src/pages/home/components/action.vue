<script setup lang="ts">
import { ACTION_BAR_HEIGHT } from "@/config/layout";
import { computed } from "vue";

const style = computed(() => ({
  height: ACTION_BAR_HEIGHT + "px"
}));
</script>

<template>
  <div
    top="80px"
    text-white
    w-full
    fixed
    flex
    justify-between
    items-center
    px-5
    :style="style"
  >
    <p>TODO:CREATE ROOM</p>
    <p>TODO:SEARCH ROOM</p>
  </div>
</template>
