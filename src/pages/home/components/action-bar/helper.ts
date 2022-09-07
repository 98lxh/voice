export const CREATE_RULES = {
  name: [
    { max: 6, min: 3, message: "房间名必须在3~6位之间" },
    { required: true, message: "用户名不能为空" }
  ],
  description: [{ required: true, message: "请输入房间描述" }]
};
