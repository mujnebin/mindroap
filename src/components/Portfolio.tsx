import Image from "next/image";
import { getSiteData } from "@/lib/cms";
import { ArrowRight } from "lucide-react";
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierCTA } from "./ui/Atelier/AtelierCTA";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { StaggerContainer, FadeUp, BlurReveal, ScaleIn } from "./animations/FadeUp";
import { EditorialLabCard } from "./EditorialLabCard";

export async function Portfolio() {
  const data = await getSiteData();
  
  return (
    <AtelierLayout id="portfolio" className="py-32">
      
      <BlurReveal className="mb-24 max-w-2xl">
        <AtelierHeader 
          label="The Gallery"
          title="Selected"
          subtitle="Narratives."
        />
      </BlurReveal>

      <StaggerContainer stagger={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 relative z-10 mb-20">
        {data.portfolio.slice(0, 3).map((item, index) => (
          <FadeUp 
            key={item.id} 
            delay={index * 0.1}
            className={`
              ${index === 0 ? 'md:col-span-8' : 'md:col-span-4'} 
              group relative overflow-hidden rounded-[3rem] border border-white/20 bg-white/[0.03] backdrop-blur-3xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-1000
            `}
          >
            <div className="relative w-full aspect-[4/5] md:aspect-auto overflow-hidden" style={{ minHeight: index === 0 ? '700px' : '400px' }}>
               <Image 
                 src={item.image} 
                 alt={item.title} 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-90 group-hover:opacity-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#1ca1f1] mb-2 items-center flex gap-4">
                      <div className="w-8 h-[1px] bg-[#1ca1f1]"></div> Strategy & Edit
                    </span>
                    <h3 className="text-4xl font-light text-white tracking-tighter leading-none">{item.title}</h3>
                  </div>
               </div>
            </div>
            <div className="p-10 flex justify-between items-center group-hover:bg-white/40 transition-colors duration-700">
               <div className="flex flex-col gap-1">
                 <AtelierLabel tracking="wider" className="text-gray-700">Project / 0{index + 1}</AtelierLabel>
                 <span className="text-xs font-light italic text-gray-700">Cinematic Storytelling.</span>
               </div>
               <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:text-[#111111] group-hover:border-[#1ca1f1] transition-all duration-700 group-hover:rotate-45">
                 <ArrowRight className="w-4 h-4" />
               </div>
            </div>
          </FadeUp>
        ))}
      </StaggerContainer>

      <div className="flex justify-center mb-32">
        <FadeUp delay={0.4}>
          <AtelierCTA 
            href="/portfolio" 
            label="Explore Full Atelier" 
            variant="outline" 
            className="scale-110"
          />
        </FadeUp>
      </div>

      <EditorialLabCard />
    </AtelierLayout>
  );
}
