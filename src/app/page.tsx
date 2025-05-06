import Login from "./Login";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function LoginPage({ searchParams }: Props) {
  const wantsMagicLink = searchParams.magicLink === "yes";
  return <Login isPasswordLogin={!wantsMagicLink} />;
}
