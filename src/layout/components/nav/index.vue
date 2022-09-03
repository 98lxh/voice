<script setup lang="ts">
import Icon from "@/components/icon";
import { useAppStore } from "@/store/modules/app";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { cursor } = useAppStore();
const { push } = useRouter();
const { helper } = cursor!;

const logo = ref<HTMLElement | null>(null);
const toHome = () => push("/");
</script>

<template>
  <nav h="80px" w-full flex items-center justify-between text-white>
    <div
      cursor-icon
      w="60px"
      h="60px"
      ref="logo"
      @click="toHome"
      v-bind="helper.element(logo)"
    >
      <Icon name="logo" size="30px" />
    </div>

    <div text-sm flex gap="5" select-none v-bind="helper.point">
      <span @click="toHome">Home</span>
      <span>Profile</span>
    </div>

    <div px-3 select-none>Avatar</div>
  </nav>
</template>
