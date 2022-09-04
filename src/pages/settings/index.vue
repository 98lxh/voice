<script setup lang="ts">
import { useContentSize } from "@/hooks";

const style = useContentSize();
</script>

<template>
  <div fixed w-full text="#fff" text-xl font-bold :style="style">
    TODO:SETTINGS
  </div>
</template>
