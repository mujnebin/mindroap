import { getSiteData } from "@/lib/cms";
import * as LucideIcons from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AtelierHeader } from "@/components/ui/Atelier/AtelierHeader";
import { AtelierLabel } from "@/components/ui/Atelier/AtelierLabel";
import { AtelierLayout } from "@/components/ui/Atelier/AtelierLayout";
import { AtelierCTA } from "@/components/ui/Atelier/AtelierCTA";
import { FadeUp } from "@/components/animations/FadeUp";
import { CheckCircle2 } from "lucide-react";

export default async function ServicesPage() {
  const data = await getSiteData();

  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] pt-8">
      <Navbar />
      
      <AtelierLayout id="services-full" className="pt-40 pb-20">
        <FadeUp delay={0.1}>
          <AtelierHeader 
            label="Our Capability"
            title="The Full"
            subtitle="Domain."
            className="mb-32"
          />
        </FadeUp>

        <div className="flex flex-col gap-24 relative z-10">
          {data.services.map((service, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.FileText;

            return (
              <FadeUp key={service.id} delay={0.1 + index * 0.1}>
                {/* Immersive Service Detail Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start border-b border-gray-200/40 pb-24">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-10">
                        <div className="w-20 h-20 rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-center text-[#1ca1f1] group-hover:bg-[#1ca1f1] group-hover:text-white transition-all duration-700">
                           <IconComponent className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#111111]">{service.title}</h2>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed">
                       {service.description}
                    </p>
                    <div className="flex flex-col gap-6 bg-white/30 backdrop-blur-xl p-10 rounded-[3rem] border border-white/40 shadow-sm leading-none">
                       <AtelierLabel tracking="widest" className="text-gray-400 mb-4">Precision Highlights:</AtelierLabel>
                       <ul className="grid grid-cols-1 gap-6">
                           {[
                               "Storytelling-Driven Pacing",
                               "Cinematic Color Grading",
                               "Custom Audio Signatures",
                               "High-Retention Visual Hooks"
                           ].map((feat, i) => (
                               <li key={i} className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]">
                                   <div className="w-1.5 h-1.5 rounded-full bg-[#1ca1f1]" /> {feat}
                               </li>
                           ))}
                       </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-12 pt-4">
                     <AtelierLabel tracking="widest" className="text-gray-400">Tactical Strategy:</AtelierLabel>
                      <p className="text-lg text-gray-500 font-light italic leading-relaxed">
                         We don&apos;t just &apos;edit&apos;. We engineer retention patterns that trick the brain into dopamine loops. Our <span className="text-[#111111] not-italic font-medium">surgical methodology</span> focuses on the first 5 seconds to guarantee algorithm validation.
                      </p>
                     
                     <div className="flex flex-col gap-4 mt-8">
                         <h3 className="text-2xl font-light text-gray-700 border-b border-gray-200/40 pb-4">Key ROI Metrics:</h3>
                         <div className="grid grid-cols-2 gap-10">
                             <div className="flex flex-col">
                                 <span className="text-4xl font-light text-[#1ca1f1] tracking-tighter">+35%</span>
                                 <AtelierLabel tracking="widest" className="text-gray-400">Retention Rate</AtelierLabel>
                             </div>
                             <div className="flex flex-col">
                                 <span className="text-4xl font-light text-[#1ca1f1] tracking-tighter">2.5x</span>
                                 <AtelierLabel tracking="widest" className="text-gray-400">CTR Optimization</AtelierLabel>
                             </div>
                         </div>
                     </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
        
        {/* Services Call To Action */}
        <FadeUp delay={0.4} className="mt-40 flex flex-col items-center">
            <AtelierHeader 
               label="The Next Move"
               title="Initiate"
               subtitle="Growth."
               alignment="center"
               className="mb-16"
            />
            <AtelierCTA 
               href="/#contact" 
               label="Initialize Partnership" 
               variant="solid" 
               className="scale-125"
            />
        </FadeUp>

      </AtelierLayout>

      <Footer />
    </main>
  );
}
