import { Hero } from "@/components/sections/Hero";
import { SubBrandsGrid } from "@/components/sections/SubBrandsGrid";
import { Principles } from "@/components/sections/Principles";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubBrandsGrid />
      <Principles />
      <CTA />
    </>
  );
}
