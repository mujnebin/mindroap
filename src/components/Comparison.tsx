import { X, Check, ArrowRight } from 'lucide-react';
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { StaggerContainer, FadeUp, BlurReveal } from "./animations/FadeUp";
import { AtelierBadge } from "./ui/Atelier/AtelierBadge";

export function Comparison() {
  return (
    <AtelierLayout id="comparison" className="py-32">
      
      <BlurReveal className="mb-24 max-w-2xl">
        <AtelierHeader 
          label="The Context"
          title="Breaking"
          subtitle="The Cycle."
        />
      </BlurReveal>

      <StaggerContainer stagger={0.3} className="glass-panel border-white/40 rounded-[4rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/40 items-stretch">
          
          {/* Left: The Bottleneck */}
          <FadeUp direction="left" className="h-full p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col items-start relative group grayscale opacity-80 hover:opacity-100 transition-all duration-700">
             <div className="flex items-center gap-6 mb-16 h-[52px]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gray-200/60 flex items-center justify-center text-gray-500">
                   <X className="w-6 h-6" />
                </div>
                <AtelierLabel tracking="wider" className="text-gray-500">Conventional Approach</AtelierLabel>
             </div>
             
             <h3 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tighter mb-12">The <span className="italic">Bottleneck.</span></h3>
             
             <ul className="flex flex-col gap-10 w-full mb-16">
               {[
                 "Slow communication & ghosting on revisions.",
                 "Rigid revision counts that hold videos hostage.",
                 "Cookie-cutter templates that lack identity."
               ].map((point, i) => (
                 <li key={i} className="flex items-start gap-6 text-base font-light text-gray-600 leading-relaxed italic">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0" /> 
                   <span>{point}</span>
                 </li>
               ))}
             </ul>
             
             <div className="mt-auto pt-10 border-t border-gray-200/40 w-full min-h-[5.5rem] flex items-center">
                <AtelierLabel tracking="widest" className="italic text-gray-400/80 line-clamp-2">Limiting Momentum / Studio Fatigue</AtelierLabel>
             </div>
          </FadeUp>

          {/* Right: The Mindroap Way */}
          <FadeUp direction="right" className="h-full p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col items-start relative group bg-white/[0.03] backdrop-blur-3xl hover:bg-white/[0.08] transition-all duration-1000">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(28,161,241,0.06),transparent_70%)] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
             
             <div className="flex items-center gap-6 mb-16 relative h-[52px]">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#1ca1f1]/10 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/20 backdrop-blur-3xl flex items-center justify-center text-[#1ca1f1] shadow-2xl relative z-10 transition-transform duration-1000 group-hover:rotate-6">
                     <Check className="w-6 h-6 stroke-[3px]" />
                  </div>
                </div>
                <AtelierBadge variant="glass" shimmer={true} glow={true} className="border-white/40 shadow-2xl backdrop-blur-3xl text-[#111111]">
                  Mindroap Strategy
                </AtelierBadge>
             </div>
             
             <h3 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tighter mb-12">The <span className="text-[#1ca1f1] italic">Atelier Path.</span></h3>
             
             <ul className="flex flex-col gap-10 w-full mb-16 relative z-10">
               {[
                 "Instant access via bespoke communication channels.",
                 "Unlimited collaborative revisions until perfection.",
                 "Architectural storytelling tailored to your soul."
               ].map((point, i) => (
                 <li key={i} className="flex items-start gap-6 text-xl font-light text-[#111111] leading-tight group/point">
                   <div className="w-2 h-2 rounded-full border border-[#1ca1f1]/40 bg-white group-hover/point:bg-[#1ca1f1] mt-2 shrink-0 transition-colors duration-500" /> 
                   <span>{point}</span>
                 </li>
               ))}
             </ul>

             <div className="mt-auto pt-10 border-t border-gray-200/40 w-full flex justify-between items-center relative z-10 min-h-[5.5rem]">
                <AtelierLabel tracking="widest" className="text-gray-400">Viral Infrastructure / Established 2024</AtelierLabel>
                <div className="w-10 h-10 shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:text-[#111111] group-hover:border-[#1ca1f1] transition-all duration-700 group-hover:rotate-45">
                   <ArrowRight className="w-4 h-4" />
                </div>
             </div>
          </FadeUp>

        </div>
      </StaggerContainer>
    </AtelierLayout>
  );
}

function BrandLogo() {
  return (
    <div className="w-8 h-8 rounded bg-[#1ca1f1] flex items-center justify-center text-white font-black text-sm">
      M
    </div>
  )
}
