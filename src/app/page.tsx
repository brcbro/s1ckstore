import { Hero } from "@/components/sections/Hero";
import { BottleShowcase } from "@/components/sections/BottleShowcase";
import { SocialProof } from "@/components/sections/SocialProof";
import { Bestsellers } from "@/components/sections/Bestsellers";
import { VibePicker } from "@/components/sections/VibePicker";
import { Subscription } from "@/components/sections/Subscription";
import { WorkWithUs } from "@/components/sections/WorkWithUs";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BottleShowcase />
      <SocialProof />
      <Bestsellers />
      <VibePicker />
      <Subscription />
      <WorkWithUs />
    </main>
  );
}
