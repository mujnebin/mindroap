import { getSiteData } from "@/lib/cms";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierCTA } from "./ui/Atelier/AtelierCTA";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { StaggerContainer, FadeUp, BlurReveal } from "./animations/FadeUp";

export async function Services() {
  const data = await getSiteData();

  return (
    <AtelierLayout id="services" className="py-32">
      <BlurReveal className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24 border-b border-gray-200/40 pb-20">
        <AtelierHeader 
          label="Our Domain"
          title="The Atelier"
          subtitle="Capabilities."
          className="max-w-2xl"
        />
        <p className="text-gray-700 text-xl font-light tracking-tight max-w-md italic mb-4">
          Unleashing viral potential through <span className="text-[#111111] font-medium not-italic">surgical precision</span> and architectural storytelling.
        </p>
      </BlurReveal>

      <StaggerContainer stagger={0.15} className="flex flex-col gap-0 relative z-10 border-t border-gray-200/40 mb-20">
        {data.services.slice(0, 3).map((service, index) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.FileText;

          return (
            <FadeUp 
              key={service.id} 
              delay={index * 0.1}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-16 px-4 md:px-12 border-b border-gray-200/40 hover:bg-white/40 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 max-w-4xl">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] backdrop-blur-3xl border border-white/20 flex items-center justify-center group-hover:bg-[#1ca1f1] group-hover:border-[#1ca1f1] group-hover:text-white transition-all duration-700 shadow-xl relative overflow-hidden shrink-0 group/icon">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-1000 animate-pulse" />
                  <IconComponent className="w-6 h-6 text-[#1ca1f1] group-hover:text-white transition-colors relative z-10" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111111]">{service.title}</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-10 md:mt-0 flex items-center gap-12 group/arrow">
                <AtelierLabel tracking="wider" className="group-hover:text-[#1ca1f1] transition-all duration-700">Explore Depth</AtelierLabel>
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:text-[#111111] group-hover:border-[#1ca1f1] transition-all duration-700 group-hover:rotate-45">
                   <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </FadeUp>
          );
        })}
      </StaggerContainer>

      <div className="flex justify-end pr-12">
        <FadeUp delay={0.4}>
          <AtelierCTA 
            href="/services" 
            label="Browse Full Domain" 
            variant="outline" 
            className="scale-110"
          />
        </FadeUp>
      </div>
    </AtelierLayout>
  );
}
