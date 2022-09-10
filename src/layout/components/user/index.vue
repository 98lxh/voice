<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Modal } from "useless-ui";
import { UserModalType } from "@/types/user";
import { useAppStore } from "@/store/modules/app";
import Login from "./login.vue";
import Register from "./register.vue";

const visible = ref(false);
const { cursor } = useAppStore();
const type = ref<UserModalType>("login");

const title = computed(() => (type.value === "login" ? "登录" : "注册"));

defineExpose({
  onDisplay: () => (visible.value = true),
});

watch(
  () => visible.value,
  () => (type.value = "login")
);
</script>

<template>
  <Modal v-model:visible="visible">
    <template #title>{{ title }}</template>

    <div v-bind="cursor?.helper.point">
      <component
        :is="type === 'login' ? Login : Register"
        @change-mode="(mode:UserModalType) => (type = mode)"
      />
    </div>
  </Modal>
</template>
