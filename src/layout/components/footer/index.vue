<script setup lang="ts">
import { ref } from "vue";
import Icon from "@/components/icon";
import { Message, Tooltip } from "useless-ui";
import { useAppStore } from "@/store/modules/app";
import { FOOTER_HEIGHT } from "@/config/layout";
import { onBeforeRouteLeave, useRouter } from "vue-router";

const { cursor } = useAppStore();
const { push } = useRouter();
const { helper, reset } = cursor!;

const github = ref<HTMLDivElement | null>(null);
const theme = ref<HTMLDivElement | null>(null);
const note = ref<HTMLDivElement | null>(null);

const openGithub = () => window.open("http://www.github.com");
const openUselessUiDoc = () => window.open("https://useless-ui.vercel.app/");

function handleChangeTheme() {
  Message({
    type: "error",
    duration: 2000,
    content: "主题切换功能暂未开发",
  });
}

onBeforeRouteLeave(() => reset());
</script>

<template>
  <footer :h="FOOTER_HEIGHT + 'px'" fixed bottom-0 w-full flex justify-between p-5>
    <div flex gap-2>
      <div ref="github" cursor-icon @click="openGithub" v-bind="helper.element(github)">
        <Icon name="github" size="20px" />
      </div>

      <Tooltip placement="top" content="UselessUi 文档">
        <div ref="github" cursor-icon @click="openUselessUiDoc" v-bind="helper.point">
          <Icon name="useless" size="20px" />
        </div>
      </Tooltip>
    </div>

    <div flex gap-2>
      <div
        ref="note"
        cursor-icon
        @click="() => push('/listen')"
        v-bind="helper.element(note)"
      >
        <Icon name="note" size="20px" />
      </div>

      <div
        cursor-icon
        ref="theme"
        @click="handleChangeTheme"
        v-bind="helper.element(theme)"
      >
        <Icon name="theme" size="20px" />
      </div>
    </div>
  </footer>
</template>
