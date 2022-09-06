<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import { ACTION_BAR_HEIGHT } from "@/config/layout";
import Icon from "@/components/icon";

import { Button, Input, Modal, Form, Message, Tooltip } from "useless-ui";

const visible = ref(false);
const { cursor } = useAppStore();

const model = reactive({});

const style = computed(() => ({
  height: ACTION_BAR_HEIGHT + "px"
}));
</script>

<template>
  <div
    top="50px"
    text-white
    w-full
    fixed
    flex
    justify-between
    items-center
    px="15px"
    :style="style"
  >
    <Tooltip placement="bl" content="search room">
      <Input placeholder="search" v-bind="cursor!.helper.point">
        <template #prefix>
          <Icon name="search" />
        </template>
      </Input>
    </Tooltip>

    <Tooltip placement="br" content="create room">
      <Button
        type="primary"
        v-bind="cursor!.helper.point"
        @click="() => (visible = true)"
        >create</Button
      >
    </Tooltip>
  </div>

  <Modal
    v-model:visible="visible"
    confirm-text="Confirm"
    cancel-text="Cancel"
    @confirm="
      () =>
        Message({
          type: 'error',
          content: 'Temporarily undeveloped !',
          duration: 5000
        })
    "
  >
    <template #title>
      <span text="#fff">create</span>
    </template>

    <Form :model="model" :label-width="80" v-bind="cursor!.helper.point">
      <UseFormItem label="name :">
        <Input
          placeholder="please enter the room name"
          ml="5px"
          :error="false"
        />
      </UseFormItem>
      <UseFormItem label="description :">
        <Input
          placeholder="please enter the room description"
          ml="5px"
          :error="false"
        />
      </UseFormItem>
    </Form>
  </Modal>
</template>
