<script setup lang="ts">
import Icon from "@/components/icon";
import { NAV_HEIGHT } from "@/config/layout";
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
  <nav
    :h="NAV_HEIGHT + 'px'"
    z-100
    fixed
    w="100vw"
    flex
    items-center
    justify-between
    text-white
  >
    <div
      cursor-icon
      w="60px"
      h="60px"
      ref="logo"
      top-0
      @click="toHome"
      v-bind="helper.element(logo)"
    >
      <Icon name="logo" size="30px" />
    </div>

    <div
      class="translate"
      text-sm
      absolute
      left="50%"
      top="50%"
      flex
      select-none
      v-bind="helper.point"
    >
      <span mr-5 @click="toHome" hover:text-white duration="500">Home</span>
      <span mr-5 text="#838385" hover:text-white duration="500">Profile</span>
      <span text="#838385" hover:text-white duration="500">Settings</span>
    </div>

    <div px-3 select-none>Avatar</div>
  </nav>
</template>
