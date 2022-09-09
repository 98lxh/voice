<script setup lang="ts">
import { ref } from "vue";
import { NAV_HEIGHT } from "@/config/layout";
import { NAV_LINKS } from "@/config/static";
import { useAppStore } from "@/store/modules/app";
import { useRouter, useRoute } from "vue-router";
import Icon from "@/components/icon";

const route = useRoute();
const { cursor } = useAppStore();
const { push } = useRouter();
const { helper } = cursor!;

const logo = ref<HTMLElement | null>(null);
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
    px-5
  >
    <div
      cursor-icon
      w="60px"
      h="60px"
      ref="logo"
      top-0
      @click="() => push('/home')"
      v-bind="helper.element(logo)"
    >
      <Icon name="logo" size="25px" />
    </div>

    <div
      class="translate"
      text-sm
      absolute
      left="50%"
      top="50%"
      flex
      gap="5"
      select-none
    >
      <div
        v-for="link in NAV_LINKS"
        :key="link.path"
        hover:text-white
        duration="500"
        :text="route.path === link.path ? '#fff' : '#838385'"
        @click="() => push(link.path)"
      >
        <span v-bind="helper.point">{{ link.key }}</span>
      </div>
    </div>

    <div px-3 select-none>Avatar</div>
  </nav>
</template>

<style lang="scss" scoped>
.link-active {
  color: #fff;
}
</style>
