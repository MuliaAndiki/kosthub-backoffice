"use client";
import { useState } from "react";
import { formLogin } from "@/app/types/form";
import InputText from "@/app/components/components/ui/InputText";
const LoginComponents: React.FC = () => {
  const [formLogin, setFormLogin] = useState<formLogin>({
    username: "",
    password: "",
  });
  const [showpassword, setShowpassword] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLogin = async () => {
    try {
    } catch (error) {}
  };

  return (
    <main className="w-screen h-screen relative">
      <div className="flex justify-center items-center h-full flex-col">
        <h1 className="font-bold text-[2rem]">Masuk</h1>
        <form>
          <div className="flex flex-col">
            <div className=" flex flex-col" title="">
              <InputText
                type=""
                label="Username :"
                value={formLogin.username}
                onChange={(e) =>
                  setFormLogin((prev) => {
                    const newObj = { ...prev, username: e.target.value };
                    return newObj;
                  })
                }
              />
            </div>
            <div className="flex flex-col relative">
              <InputText
                type={showpassword ? "text" : "password"}
                label="Password :"
                value={formLogin.password}
                onChange={(e) =>
                  setFormLogin((prev) => {
                    const newObj = { ...prev, password: e.target.value };
                    return newObj;
                  })
                }
              />
              <button
                type="button"
                onClick={() => setShowpassword((prev) => !prev)}
                className="absolute right-2 top-11 -translate-y-1/2 text-gray-500 text-sm"
                aria-label={showpassword ? "Hide Password" : "Show Password"}
              >
                {showpassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
export default LoginComponents;
