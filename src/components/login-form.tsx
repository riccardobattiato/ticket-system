import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type Props = {
  formProps?: React.ComponentProps<"form">;
  isPasswordLogin?: boolean;
};

export function LoginForm({ formProps, isPasswordLogin }: Props) {
  return (
    <form
      className={cn("flex flex-col gap-6", formProps?.className)}
      {...formProps}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        {isPasswordLogin && (
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
        )}
        <Button type="submit" className="w-full">
          Login with {isPasswordLogin ? "Password" : "Magic link"}
        </Button>
      </div>
      <div className="text-center text-sm">
        {isPasswordLogin ? (
          <Link
            href={{ pathname: "/", query: { magicLink: "yes" } }}
            className="underline underline-offset-4"
          >
            Go to Magic Link login
          </Link>
        ) : (
          <Link
            href={{ pathname: "/", query: { magicLink: "no" } }}
            className="underline underline-offset-4"
          >
            Go to Password Login
          </Link>
        )}
      </div>
    </form>
  );
}
