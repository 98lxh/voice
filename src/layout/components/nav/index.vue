<script setup lang="ts">
import { ref } from "vue";
import { NAV_HEIGHT } from "@/config/layout";
import { NAV_LINKS } from "@/config/static";
import { useAppStore } from "@/store/modules/app";
import { useRouter, useRoute } from "vue-router";
import { Button, Tooltip, Popover } from "useless-ui";
import Icon from "@/components/icon";

const emit = defineEmits(["login-btn-click"]);

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

    <div class="translate" text-sm absolute left="50%" top="50%" flex gap="5" select-none>
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

    <div px-3 select-none v-bind="helper.point">
      <!-- 未登录  -->
      <Tooltip placement="left" content="请先完成登录/注册">
        <Button type="outline" @click="() => emit('login-btn-click')">登录/注册</Button>
      </Tooltip>

      <!-- 已登录  -->

      <!-- <Popover placement="br">
        <template #content>
          <div w="90px" select="none">
            <div hover:bg="#313131" hover:text="#1a5cff" px="3" py="1.5" duration="300ms">
              个人中心
            </div>
            <div hover:bg="#313131" hover:text="#1a5cff" px="3" py="1.5" duration="300ms">
              退出登录
            </div>
          </div>
        </template>

        <div w="30px" h="30px">
          <img
            w-full
            h-full
            rounded="full"
            src="https://avatars.githubusercontent.com/u/75563939?v=4"
          />
        </div>
      </Popover> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.link-active {
  color: #fff;
}
</style>
