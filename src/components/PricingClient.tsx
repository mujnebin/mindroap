"use client";

import React from "react";
import { Star } from "lucide-react";
import { useRegion } from "./RegionProvider";
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierCTA } from "./ui/Atelier/AtelierCTA";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { StaggerContainer, FadeUp, BlurReveal } from "./animations/FadeUp";
import { AtelierBadge } from "./ui/Atelier/AtelierBadge";

import { PricingTier } from "@/lib/cms";

export function PricingClient({ initialPricing }: { initialPricing: PricingTier[] }) {
  const { region } = useRegion();
  const isGlobal = region === "Global";

  const regularPlans = initialPricing.filter(p => p.type !== "Enterprise");
  const enterprisePlan = initialPricing.find(p => p.type === "Enterprise");

  return (
    <AtelierLayout id="pricing" className="py-32">
      
      <BlurReveal className="mb-24 max-w-2xl">
        <AtelierHeader 
          label="The Investment"
          title="Scaling"
          subtitle="Value."
        />
      </BlurReveal>

      <div className="glass-panel border-white/40 rounded-[4rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
        <StaggerContainer stagger={0.3} className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/40">
          {regularPlans.map((plan, index) => (
            <FadeUp 
              key={plan.id} 
              delay={index * 0.1}
              className="p-12 md:p-20 flex flex-col items-start relative group hover:bg-white/40 transition-all duration-700"
            >
              <div className="flex justify-between items-center w-full mb-12">
                <AtelierLabel tracking="widest" className="text-[#1ca1f1]">{plan.type} Narrative</AtelierLabel>
                {plan.popular && (
                  <AtelierBadge 
                    variant="glass" 
                    shimmer={true} 
                    glow={true} 
                    className="border-white/40 shadow-2xl backdrop-blur-3xl text-gray-900"
                  >
                    Founding Choice
                  </AtelierBadge>
                )}
              </div>
              
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-8xl font-light text-[#111111] tracking-tighter">
                  {isGlobal ? plan.usdPrice : plan.bdtPrice}
                </span>
                <AtelierLabel tracking="widest" className="text-gray-400">/ Month</AtelierLabel>
              </div>
              
              <p className="text-lg font-light text-gray-500 italic mb-16 max-w-sm">
                &quot;{plan.description}&quot;
              </p>

              <div className="w-full flex flex-col gap-10 mb-20">
                <AtelierLabel tracking="widest" className="text-gray-500/80">Included Assets:</AtelierLabel>
                <ul className="grid grid-cols-1 gap-8">
                  {plan.features.map((ft: string, i: number) => (
                    <li key={i} className="flex items-center gap-6 text-[11px] font-bold text-[#111111] uppercase tracking-[0.15em]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1ca1f1]/40" /> {ft}
                    </li>
                  ))}
                </ul>
              </div>

              <AtelierCTA 
                href="#contact" 
                label="Acquire Plan" 
                variant="solid" 
                className="w-full mt-auto"
              />
            </FadeUp>
          ))}
        </StaggerContainer>

        {enterprisePlan && (
          <BlurReveal delay={0.5} className="border-t border-gray-200/40 p-12 md:p-24 bg-white/20 backdrop-blur-xl relative group">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                <div className="max-w-xl text-center lg:text-left">
                  <div className="flex items-center gap-6 mb-10 justify-center lg:justify-start">
                    <div className="w-12 h-[1px] bg-[#1ca1f1]/40"></div>
                    <AtelierLabel tracking="widest" className="text-[#1ca1f1]">Enterprise Tier</AtelierLabel>
                  </div>
                  <h3 className="text-5xl font-light text-[#111111] tracking-tighter mb-6 leading-none">The Founding <br/> <span className="text-gray-400">Partnership.</span></h3>
                  <p className="text-lg font-light text-gray-500 italic mb-12 leading-relaxed">
                    {enterprisePlan.description}
                  </p>
                  
                  <AtelierCTA 
                    href="#contact" 
                    label="Custom Strategy" 
                    variant="solid" 
                    className="w-fit mx-auto lg:mx-0"
                  />
                </div>

                <FadeUp delay={0.8} className="w-full lg:w-1/2 p-10 md:p-16 rounded-[3rem] bg-white/50 backdrop-blur-xl border border-white/40 shadow-2xl shadow-black/5">
                  <AtelierLabel tracking="widest" className="text-gray-400 mb-12 block">Founding Features:</AtelierLabel>
                  <ul className="grid grid-cols-1 gap-12">
                    {enterprisePlan.features.map((ft: string, i: number) => (
                      <li key={i} className="flex items-center gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest italic group-hover:text-[#111111] transition-colors duration-700">
                        <Star className="w-5 h-5 text-[#1ca1f1]/20 group-hover:text-[#1ca1f1] transition-colors" /> {ft}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
             </div>
          </BlurReveal>
        )}
      </div>
      
      <FadeUp delay={1} className="text-center mt-12 block text-gray-400/80 italic">
        Curated for the 1%.
      </FadeUp>
    </AtelierLayout>
  );
}
