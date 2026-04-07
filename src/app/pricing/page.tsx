import { getSiteData } from "@/lib/cms";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingClient } from "@/components/PricingClient";
import { FAQClient } from "@/components/FAQClient";
import { AtelierHeader } from "@/components/ui/Atelier/AtelierHeader";
import { AtelierLabel } from "@/components/ui/Atelier/AtelierLabel";
import { AtelierLayout } from "@/components/ui/Atelier/AtelierLayout";
import { FadeUp } from "@/components/animations/FadeUp";
import { CheckCircle2, ShieldCheck, Zap, Globe, Star } from "lucide-react";

export default async function PricingPage() {
  const data = await getSiteData();

  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] pt-8">
      <Navbar />
      
      {/* Immersive Header Fragment */}
      <AtelierLayout id="pricing-full" className="pt-40 pb-0">
        <FadeUp delay={0.1}>
          <AtelierHeader 
            label="Investment Strategy"
            title="The"
            subtitle="Value Matrix."
            className="mb-32"
          />
        </FadeUp>
      </AtelierLayout>

      <div className="pb-32 px-4 relative z-10">
        <PricingClient initialPricing={data.pricing} />
      </div>

      {/* Strategic Comparison Fragment (The Deep Value Logic) */}
      <AtelierLayout id="value-comparison" className="py-24 bg-[#111111] rounded-[5rem] mx-4 mb-40 overflow-hidden relative shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)]">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(28,161,241,0.08),transparent_60%)] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
           <div className="max-w-xl">
             <AtelierLabel tracking="widest" className="text-gray-500/80 mb-10 block">Why the Atelier?</AtelierLabel>
             <h2 className="text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.85] mb-12">
               Investment <br/> <span className="text-gray-600 italic">Vs. Expense.</span>
             </h2>
             <p className="text-xl font-light text-gray-500 italic leading-relaxed">
               Most editors are an expense. Mindroap is an investment in <span className="text-white not-italic font-medium">retention assets</span>. We don&apos;t charge for hours; we charge for the algorithmic growth we engineer.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "Surgical Workflow", icon: Zap, desc: "Immediate 24-72h delivery." },
                { title: "Artist Oversight", icon: Star, desc: "Dedicated Creative Director." },
                { title: "Risk Mitigation", icon: ShieldCheck, desc: "Unlimited revisions." },
                { title: "Cross-Region", icon: Globe, desc: "Localized & Global pricing." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-xl flex flex-col gap-6 group hover:bg-white/10 transition-all duration-700">
                   <item.icon className="w-8 h-8 text-[#1ca1f1] group-hover:scale-110 transition-transform" />
                   <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-light text-white tracking-tight">{item.title}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </AtelierLayout>

      {/* The Requested Long FAQ Section */}
      <div className="pb-40">
        <FadeUp delay={0.2}>
          <FAQClient initialFaqs={data.faq} />
        </FadeUp>
      </div>

      <Footer />
    </main>
  );
}
