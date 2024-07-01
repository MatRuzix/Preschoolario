"use client";

import { LinkButton } from "@/src/components";

const SignInBox = () => {
  return (
    <div className="flex h-full w-1/3 items-center py-5" id="signInBox">
      <div className="flex flex-col w-full h-full px-10 py-10 justify-center bg-gray-200 rounded-lg border-black font-semibold space-y-4">
        <LinkButton
          className="grow"
          variant="orange"
          name="Zaloguj się jako Rodzic"
          url="/signIn/parent"
        />
        <LinkButton
          className="grow"
          variant="orange"
          name="Zaloguj się jako Opiekun"
          url="/signIn/teacher"
        />
      </div>
    </div>
  );
};

export default SignInBox;
