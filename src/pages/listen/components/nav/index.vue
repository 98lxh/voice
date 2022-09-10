<script setup lang="ts">
import { nextTick, ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import Icon from "@/components/icon";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { transcode } from "buffer";

const { back } = useRouter();
const { cursor } = useAppStore();

const backRef = ref<HTMLElement | null>(null);

onBeforeRouteLeave(() => cursor?.reset());
</script>

<template>
  <div h="80px" w-full px="10px" flex items-center>
    <div
      ref="backRef"
      border-1
      w="40px"
      h="40px"
      style="border-color: #1a5cff"
      flex
      items-center
      justify-center
      v-bind="
        cursor?.helper.element(backRef, {
          color: '#1a5cff',
          transparent: true,
        })
      "
      @click="() => back()"
    >
      <Icon name="back" size="15px" color="#1a5cff" />
    </div>
  </div>
</template>
