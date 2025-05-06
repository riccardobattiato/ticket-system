import { Ticket } from "lucide-react";

import { LoginForm } from "@/components/login-form";

type Props = {
  isPasswordLogin: boolean;
};
export default function Login({ isPasswordLogin }: Props) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Ticket className="size-4" />
            </div>
            Ticket Manager
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm isPasswordLogin={isPasswordLogin} />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          srcSet="https://picsum.photos/seed/picsum/720/720 1x, https://picsum.photos/seed/picsum/1440/1440 2x, https://picsum.photos/seed/picsum/2880/2880 3x"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
