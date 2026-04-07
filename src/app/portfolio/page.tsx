import { getSiteData } from "@/lib/cms";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AtelierHeader } from "@/components/ui/Atelier/AtelierHeader";
import { AtelierLabel } from "@/components/ui/Atelier/AtelierLabel";
import { AtelierLayout } from "@/components/ui/Atelier/AtelierLayout";
import { AtelierCTA } from "@/components/ui/Atelier/AtelierCTA";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export default async function PortfolioPage() {
  const data = await getSiteData();

  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] pt-8">
      <Navbar />
      
      <AtelierLayout id="portfolio-full" className="pt-40 pb-20">
        <FadeUp delay={0.1}>
          <AtelierHeader 
            label="The Archives"
            title="Masterpieces"
            subtitle="Of Impact."
            className="mb-32"
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {data.portfolio.map((item, index) => (
            <FadeUp key={item.id} delay={0.1 + index * 0.1}>
              <div 
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-1000"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                   <Image 
                     src={item.image} 
                     alt={item.title} 
                     fill 
                     className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-90 group-hover:opacity-100" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                      <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#1ca1f1] mb-2 items-center flex gap-3">
                          <div className="w-6 h-[1px] bg-[#1ca1f1]"></div> Visual Strategy
                        </span>
                        <h3 className="text-3xl font-light text-white tracking-tighter leading-none">{item.title}</h3>
                      </div>
                   </div>
                </div>
                <div className="p-8 flex justify-between items-center group-hover:bg-white/40 transition-colors duration-700">
                   <div className="flex flex-col gap-1">
                     <AtelierLabel tracking="wider" className="text-gray-700">Archive / 0{index + 1}</AtelierLabel>
                     <span className="text-[10px] font-light italic text-gray-700 mt-1">Surgical Precision.</span>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:text-[#111111] group-hover:border-[#1ca1f1] transition-all duration-700 group-hover:rotate-45">
                     <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Portfolio CTA Fragment */}
        <FadeUp delay={0.5} className="mt-40 border-t border-gray-200/40 pt-32 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-light text-[#111111] tracking-tighter text-center mb-16 leading-tight">
                Ready to Join the <br/> <span className="text-gray-400 italic font-serif">A-List?</span>
            </h2>
            <AtelierCTA 
              href="/#contact"
              label="Initiate Partnership"
              variant="solid"
              className="scale-110"
            />
        </FadeUp>
      </AtelierLayout>

      <Footer />
    </main>
  );
}
