import Image from "next/image";
import { FadeUp, Float, StaggerContainer, BlurReveal, ScaleIn } from "./animations/FadeUp";
import { ParallaxLayer } from "./animations/ParallaxLayer";
import { Play } from "lucide-react";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierCTA } from "./ui/Atelier/AtelierCTA";
import { AtelierDivider } from "./ui/Atelier/AtelierDivider";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { AtelierBadge } from "./ui/Atelier/AtelierBadge";

export function Hero() {
  return (
    <AtelierLayout id="hero" className="pt-32 pb-4">
      
      {/* 2-Column Split Hero Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center w-full mb-32 text-center md:text-left pt-20 md:pt-32">
        
        {/* Left: Typography */}
        <StaggerContainer delay={0.2} stagger={0.15} className="flex flex-col items-center md:items-start z-10">
          <FadeUp className="inline-flex items-center gap-8 mb-16 relative group">
            <div className="flex -space-x-5 items-center">
              <div className="relative z-30 transform group-hover:-translate-x-2 transition-transform duration-1000">
                <div className="absolute inset-0 bg-black/20 blur-xl rounded-full translate-y-4 scale-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image 
                  src="/avatar_1_1774691538936.png" 
                  width={48} height={48} 
                  alt="Visionary" 
                  className="rounded-full w-12 h-12 md:w-14 md:h-14 border-[0.5px] border-white/40 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover" 
                />
              </div>
              <div className="relative z-20 transform group-hover:scale-105 transition-transform duration-1000">
                <div className="absolute inset-0 bg-black/20 blur-xl rounded-full translate-y-4 scale-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image 
                  src="/avatar_2_1774691605906.png" 
                  width={48} height={48} 
                  alt="Visionary" 
                  className="rounded-full w-12 h-12 md:w-14 md:h-14 border-[0.5px] border-white/40 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover" 
                />
              </div>
              <AtelierBadge variant="glass" shimmer={true} glow={true} className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center p-0 z-10 border-white/30 backdrop-blur-2xl group-hover:translate-x-4 transition-transform duration-1000">
                <span className="text-[10px] font-black tracking-tighter">100+</span>
              </AtelierBadge>
            </div>
            
            <div className="h-10 w-px bg-gray-200/40 transform scale-y-75 group-hover:scale-y-100 transition-transform duration-1000" />
            
            <div className="flex flex-col items-start gap-1">
              <AtelierBadge variant="ghost" shimmer={false} className="px-0 py-0 h-auto opacity-40 group-hover:opacity-100 transition-opacity">
                Verified Partners
              </AtelierBadge>
              <AtelierLabel tracking="widest" className="text-gray-900 group-hover:text-[#1ca1f1] transition-colors duration-700">
                Architecting Legacies
              </AtelierLabel>
            </div>
          </FadeUp>

          <BlurReveal delay={0.4}>
            <h1 className="text-4xl sm:text-[60px] md:text-[72px] lg:text-[84px] xl:text-[100px] font-light mb-10 leading-[0.85] tracking-tighter text-[#111111]">
              Visuals <br/>
              <span className="text-gray-400">That Define</span><br/>
              <span className="text-[#1ca1f1] relative italic font-serif pr-4">Legacy.</span>
            </h1>
          </BlurReveal>

          <FadeUp delay={0.6}>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed font-light italic">
              A bespoke editing studio for creators who prioritize <span className="text-[#111111] not-italic font-medium">art over noise</span>.
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="flex flex-col items-center md:items-start gap-4">
              <AtelierCTA 
                href="#contact" 
                label="Begin Your Story" 
                variant="solid" 
                className="scale-90 sm:scale-110"
              />
            </div>
          </FadeUp>
        </StaggerContainer>

        {/* Right: Floating Testimonial Cards (Ghost Atelier Style) */}
        <div className="relative h-[450px] w-full hidden md:block pointer-events-none">
           <ParallaxLayer offset={60} className="absolute top-0 right-12 z-20">
             <Float yOffset={15} duration={4}>
               <TestimonialCard 
                  name="Tomas"
                  avatar="/avatar_1_1774691538936.png" 
                  handle="@tomas" 
                  text="The most elegant edit I've ever received." 
                  rotation="-rotate-6"
               />
             </Float>
           </ParallaxLayer>
           
           <ParallaxLayer offset={120} direction="down" className="absolute top-48 right-32 z-10">
             <Float yOffset={25} duration={5} delay={1.5}>
               <TestimonialCard 
                  name="Mark Locus"
                  avatar="/avatar_2_1774691605906.png" 
                  handle="@mark_locus" 
                  text="A masterpiece that scaled my vision." 
                  rotation="rotate-6"
               />
             </Float>
           </ParallaxLayer>
        </div>
      </div>


      {/* Master Video Embed (Unified Atelier Frame) */}
      <ScaleIn delay={1.2} className="w-full relative z-20 group max-w-6xl mx-auto">
        <ParallaxLayer offset={20} direction="down">
          <Float yOffset={10} duration={6} className="relative w-full aspect-video rounded-[3rem] overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_60px_120px_-20px_rgba(0,0,0,0.08)]">
            <Image 
              src="/hero_video_1774691517478.png"
              alt="Mindroap Showreel"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:opacity-100"
              priority
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 bg-white/10 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-white/90 hover:text-[#1ca1f1] group/play">
              <Play fill="currentColor" className="w-10 h-10 text-white group-hover/play:text-[#1ca1f1] ml-2 transition-colors" />
            </button>
          </Float>
        </ParallaxLayer>
        <div className="flex justify-between items-center mt-12 px-6">
           <div className="flex flex-col">
              <AtelierLabel tracking="widest" className="text-gray-700">The 2024 Reel</AtelierLabel>
              <span className="text-xs font-light italic text-gray-700 mt-1">Edited for high-retention storytelling.</span>
           </div>
           <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200/50"></div>)}
           </div>
        </div>
      </ScaleIn>

    </AtelierLayout>
  );
}

function TestimonialCard({ name, handle, text, avatar, rotation }: { name: string, handle: string, text: string, avatar: string, rotation: string }) {
  return (
    <div className={`glass-panel border-white/40 rounded-[2.5rem] p-8 w-[340px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] ${rotation} transform-gpu transition-all hover:rotate-0 hover:z-50 hover:scale-105 pointer-events-auto cursor-default group`}>
       <div className="flex items-center gap-4 mb-6">
         <Image src={avatar} width={48} height={48} alt={name} className="rounded-full w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover" />
         <AtelierLabel tracking="wider" className="text-gray-700 group-hover:text-[#111111] transition-colors">{handle}</AtelierLabel>
       </div>
       <p className="text-2xl text-[#111111] font-light tracking-tight leading-snug mb-8">&quot;{text}&quot;</p>
       <div className="flex items-center gap-4 border-t border-gray-100/50 pt-6">
         <div className="flex gap-1.5">
           {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-[#1ca1f1]/40" />)}
         </div>
         <AtelierLabel tracking="widest" className="ml-auto italic text-gray-700/80">Verified Artisan</AtelierLabel>
       </div>
    </div>
  )
}
