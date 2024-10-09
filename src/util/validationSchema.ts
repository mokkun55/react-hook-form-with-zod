import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().nonempty("名前は必須です").min(4, "4文字以上でお願いします"),
  email: z
    .string()
    .nonempty("メアドは必須です")
    .email("正しいメールアドレスを入力してください"),
  password: z
    .string()
    .nonempty("パスワードは必須です")
    .min(6, "6文字以上でお願いします"),
});
