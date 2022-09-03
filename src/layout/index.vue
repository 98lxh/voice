<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
const { cursor } = useAppStore();

const { helper } = cursor!;
</script>

<template>
  <div w-full h-100vh />
</template>
