import { LoginForm } from "./components/_loginForm";
import Image from "next/image";

export default function SignIn() {
  return (
    <div>
      <div className="h-screen relative">
        <div className="bg-secondary h-full pt-12">
          <Image src="/assets/img/logo.png" className="mx-auto box-shadow: 0 0 20px 5px rgba(255,255,255,0.6); border-radius: 10px;" alt="logo" width={200} height={80} />
        </div>
        <div className="absolute bg-white opacity-[0.5] bottom-0 left-1/2 -translate-x-1/2 rounded-t-4xl h-[43.8rem] w-[90%]" />
        <div className="absolute bg-white bottom-0 left-0 rounded-t-4xl h-[43rem]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}