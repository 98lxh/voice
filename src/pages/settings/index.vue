<script setup lang="ts">
import { ref } from "vue";
import { useContentSize, useCursor } from "@/hooks";
import { Form, FormItem, Input, Button, Select, Modal } from "useless-ui";
import { MOUSE_OPTIONS, DEFAULT_SETTINGS } from "./config";
import { tryOnMounted } from "@vueuse/core";

const style = useContentSize();
const { helper } = useCursor();

const visible = ref(false);
const optionWidth = ref("");
const formData = ref({ ...DEFAULT_SETTINGS });
const selectRef = ref<InstanceType<typeof Select> | null>(null);

tryOnMounted(() => {
  const el = selectRef.value.$el as HTMLElement;
  optionWidth.value = String(el.clientWidth);
});
</script>

<template>
  <div fixed w-full text="#fff" text-xl font-bold :style="style">
    <Form
      absolute
      left="50%"
      top="30%"
      translate="-50%"
      w="450px"
      max-w="90vw"
      :label-width="80"
      :model="formData"
      v-bind="helper.point"
    >
      <FormItem label="横向滚动:" prop="speed">
        <Select
          ref="selectRef"
          v-model:value="formData.speed"
          :option-width="optionWidth"
          placeholder="选择横向滚动速度"
          :options="MOUSE_OPTIONS"
        />
      </FormItem>

      <FormItem label="设置1:" prop="speed">
        <Input :error="false" />
      </FormItem>

      <FormItem label="设置2:" prop="speed">
        <Input :error="false" />
      </FormItem>

      <FormItem label="设置3:" prop="speed">
        <Input :error="false" />
      </FormItem>

      <FormItem>
        <div flex w-full justify-end gap-5>
          <Button type="outline" @click="() => (visible = true)">恢复默认</Button>
          <Button type="primary">保存</Button>
        </div>
      </FormItem>
    </Form>

    <Modal
      v-model:visible="visible"
      @confirm="() => (formData = { ...DEFAULT_SETTINGS })"
    >
      <template #title>恢复默认</template>
      <div text="#f8f5f8">是否确认恢复默认设置?</div>
    </Modal>
  </div>
</template>
