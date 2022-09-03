<script setup lang="ts">
import { ref } from "vue";
import Icon from "@/components/icon";
import { useAppStore } from "@/store/modules/app";

const { cursor } = useAppStore();
const { helper } = cursor!;

const github = ref<HTMLDivElement | null>(null);
const theme = ref<HTMLDivElement | null>(null);

const openGithub = () => window.open("http://www.github.com");
</script>

<template>
  <footer h-50px fixed bottom-0 w-full flex justify-between>
    <div
      ref="github"
      cursor-icon
      @click="openGithub"
      v-bind="helper.element(github)"
    >
      <Icon name="github" size="20px" />
    </div>

    <div cursor-icon ref="theme" v-bind="helper.element(theme)">
      <Icon name="theme" size="20px" />
    </div>
  </footer>
</template>
