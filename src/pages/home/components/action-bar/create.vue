<script setup lang="ts">
import { reactive, ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import { Modal, Form, Input, Button } from "useless-ui";
import { type FormInstance } from "@/types/instance";
import { CREATE_RULES } from "./helper";
import Icon from "@/components/icon";

const visible = ref(false);
const { cursor } = useAppStore();
const formRef = ref<FormInstance | null>(null);

const formData = reactive({
  name: "",
  description: ""
});

function handleConfirm() {
  formRef.value!.validate((hasError: boolean) => {
    if (hasError) return;
    visible.value = true;
  });
}

defineExpose({
  onDisplay: () => (visible.value = true)
});
</script>

<template>
  <Modal v-model:visible="visible">
    <template #title>
      <div text-center reactive v-bind="cursor?.helper.point">
        <span>创建房间</span>
        <Icon
          absolute
          right="18px"
          top="18px"
          name="close"
          color="#f8f5f8"
          @click="() => (visible = false)"
        />
      </div>
    </template>

    <Form
      ref="formRef"
      :model="formData"
      :label-width="80"
      :rules="CREATE_RULES"
      v-bind="cursor!.helper.point"
    >
      <UseFormItem label="房间名 :" prop="name">
        <Input
          ml="5px"
          placeholder="请输入房间名"
          v-model:value="formData.name"
        />
      </UseFormItem>
      <UseFormItem label="房间描述 :" prop="description">
        <Input
          ml="5px"
          placeholder="请输入房间描述"
          v-model:value="formData.description"
        />
      </UseFormItem>
    </Form>

    <template #footer>
      <div w-full flex justify-end gap="5" px="5" v-bind="cursor!.helper.point">
        <Button type="outline" @click="() => (visible = false)">取消</Button>
        <Button type="primary" @click="handleConfirm">确定</Button>
      </div>
    </template>
  </Modal>
</template>
