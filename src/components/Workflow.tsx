import { getSiteData } from "@/lib/cms";
import * as LucideIcons from "lucide-react";
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { StaggerContainer, FadeUp, BlurReveal } from "./animations/FadeUp";

export async function Workflow() {
  const data = await getSiteData();

  return (
    <AtelierLayout id="workflow" className="py-24">
      
      <BlurReveal className="mb-16 max-w-2xl">
        <AtelierHeader 
          label="The Method"
          title="Surgical"
          subtitle="Execution."
        />
      </BlurReveal>

      <StaggerContainer stagger={0.2} className="relative flex flex-col md:flex-row gap-12 md:gap-0">
        <div className="hidden md:block absolute top-[50px] left-0 w-full h-[1px] bg-gray-200/20 z-0"></div>
        
        {data.workflow.map((step, index) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.Zap;
          return (
            <FadeUp key={step.id} delay={index * 0.1} className="flex-1 flex flex-col items-start relative z-10 group">
              <div className="flex items-center gap-8 mb-8">
                 <div className="relative w-20 h-20 rounded-full bg-white/[0.03] backdrop-blur-3xl border border-white/20 flex items-center justify-center text-3xl font-black text-[#111111] shadow-2xl group-hover:bg-[#1ca1f1] group-hover:text-white transition-all duration-1000 group-hover:border-[#1ca1f1] overflow-hidden group/num">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/num:opacity-100 transition-opacity duration-1000 animate-pulse" />
                    <span className="relative z-10">{index < 9 ? `0${index + 1}` : index + 1}</span>
                 </div>
                 <div className="flex flex-col md:hidden">
                    <AtelierLabel tracking="wider" className="text-gray-700">Phase {index + 1}</AtelierLabel>
                    <h3 className="text-2xl font-light text-[#111111] tracking-tight">{step.title}</h3>
                 </div>
              </div>

              <div className="mt-4 md:pl-4">
                 <div className="hidden md:flex flex-col mb-6 gap-2">
                    <AtelierLabel tracking="widest" className="text-gray-700">Phase {index + 1}</AtelierLabel>
                    <h3 className="text-3xl font-light text-[#111111] tracking-tighter transition-colors group-hover:text-[#1ca1f1] duration-700">{step.title}</h3>
                 </div>
                 <p className="text-lg font-light text-gray-500 italic leading-relaxed max-w-[280px]">
                    {step.description}
                 </p>
              </div>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-gray-200/40 flex items-center justify-center">
                       <IconComponent className="w-3 h-3 text-[#1ca1f1]" />
                    </div>
                    <AtelierLabel tracking="widest" className="text-gray-700">System Ready</AtelierLabel>
                 </div>
              </div>
            </FadeUp>
          );
        })}
      </StaggerContainer>
    </AtelierLayout>
  );
}
