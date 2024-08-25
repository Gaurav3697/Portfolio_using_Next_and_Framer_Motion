import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  const navItems=[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"About",
      link:"/"
    },
    {
      name:"Service",
      link:"/"
    },
    {
      name:"Contact",
      link:"/"
    },
  ]
  return (
    <main className="w-screen dark:bg-gray-950 bg-white">
      <FloatingNav className="text-black" navItems={navItems} />
      <Hero />
      <Grid />
    </main>
  );
}
