import { useForm } from "react-hook-form";
import "./App.css";
import { ReactNode } from "react";
import { validationSchema } from "./util/validationSchema";

// zodでバリテーョン管理
import { zodResolver } from "@hookform/resolvers/zod";

// 型
interface LoginFrom {
  name: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // 型ここでもつける
  } = useForm<LoginFrom>({
    mode: "onChange",
    // zodの設定
    resolver: zodResolver(validationSchema),
  }); //modeで発火のタイミングを調整

  // ここも型
  const onSubmit = (data: LoginFrom) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input
          id="name"
          type="text"
          // ...register ってのがミソ
          {...register("name")}
        />
        <p>{errors.name?.message as ReactNode}</p>
        <label htmlFor="メアド">メアド</label>
        <input id="email" type="email" {...register("email")} />
        <p>{errors.email?.message as ReactNode}</p>
        <label htmlFor="パスワード">パスワード</label>
        <input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message as ReactNode}</p>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
