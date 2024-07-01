import { redirect } from "next/navigation";

export default function Home() {
  redirect("/landing");
  return <main></main>;
}
