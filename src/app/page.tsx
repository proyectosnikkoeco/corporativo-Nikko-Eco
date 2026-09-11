import { Hero } from "@/components/sections/Hero";
import { SubBrandsGrid } from "@/components/sections/SubBrandsGrid";
import { Clients } from "@/components/sections/Clients";
import { Cases } from "@/components/sections/Cases";
import { Principles } from "@/components/sections/Principles";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubBrandsGrid />
      <Clients />
      <Cases />
      <Principles />
      <CTA />
    </>
  );
}
