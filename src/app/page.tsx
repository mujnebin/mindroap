import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Workflow } from '@/components/Workflow';
import { Portfolio } from '@/components/Portfolio';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FadeUp } from "@/components/animations/FadeUp";
import { BookingForm } from "@/components/BookingForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] selection:bg-[#1ca1f1]/30 overflow-x-hidden pt-8">
      <Navbar />
      <div>
        <Hero />
        <FadeUp delay={0.1}><Stats /></FadeUp>
        <FadeUp delay={0.1}><Services /></FadeUp>
        <FadeUp delay={0.1}><Workflow /></FadeUp>
        <FadeUp delay={0.1}><Portfolio /></FadeUp>
        <FadeUp delay={0.1}><Comparison /></FadeUp>
        <FadeUp delay={0.1}><Pricing /></FadeUp>
        <FadeUp delay={0.1}><Testimonials /></FadeUp>
        <FadeUp delay={0.1}><FAQ /></FadeUp>
      </div>
      
      {/* Final CTA Overlay - The Legacy Close */}
      <section id="contact" className="py-40 px-4 text-center relative mt-32 overflow-hidden border-t border-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,161,241,0.03),transparent_70%)] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-6 mb-16">
             <div className="w-[80px] h-[1px] bg-gray-200"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-500">The Final Chapter</span>
             <div className="w-[80px] h-[1px] bg-gray-200"></div>
          </div>

          <h2 className="text-5xl md:text-9xl font-light mb-12 tracking-tighter text-[#111111] leading-[0.85]">
            Stop Editing. <br/> <span className="text-gray-400 italic">Start Growing.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-20 max-w-2xl mx-auto font-light italic leading-relaxed">
            Hand off your footage to top 1% editors and get back to doing what you do best: <span className="text-[#111111] font-medium not-italic">creating content that scales.</span>
          </p>
          
          <Link href="#contact" className="group relative">
             <div className="absolute inset-0 bg-[#1ca1f1] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
             <div className="relative flex items-center gap-12 bg-[#111111] text-white pl-10 pr-3 py-3 rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Initialize Your Legacy</span>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#111111] group-hover:bg-[#1ca1f1] group-hover:text-white transition-all duration-700 group-hover:rotate-45">
                   <ArrowRight className="w-5 h-5" />
                </div>
             </div>
          </Link>
        </div>

        <div className="mt-40 flex justify-center gap-2 opacity-50">
           {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />)}
        </div>
      </section>

      {/* Embedded Booking Masterform */}
      <section id="contact" className="w-full pb-20 pt-12 px-4 scroll-mt-24 relative z-10">
         <FadeUp delay={0.2}>
           <BookingForm />
         </FadeUp>
      </section>

      <Footer />
    </main>
  );
}
