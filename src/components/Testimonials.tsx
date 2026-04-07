import Image from 'next/image';
import { Star } from 'lucide-react';
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";

export function Testimonials() {
  return (
    <AtelierLayout id="testimonials" className="py-32">
      
      <AtelierHeader 
        label="The Feedback"
        title="Creator"
        subtitle="Testaments."
        className="mb-24 max-w-2xl"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200/30">
        {[
          { stat: "100x Views", name: "Alex Rivera", text: "Mindroap completely transformed my channel. My watch time went up by 40% and I finally have time to focus on just hitting record.", avatar: "/avatar_1_1774691538936.png" },
          { stat: "500K+ Followers", name: "Sarah Chen", text: "The pacing, the music, the storytelling... everything is dialed in to perfection. Bestest edit in 48 hours.", avatar: "/avatar_2_1774691605906.png" },
          { stat: "150% Engagement", name: "Ryan Smith", text: "Audience engagement skyrocketed on all videos using Mindroap's editing expertise.", avatar: "/avatar_1_1774691538936.png" },
          { stat: "200k+ Subscribers", name: "Emma Brown", text: "Our subscriber count increased after Mindroap optimized our video content.", avatar: "/avatar_2_1774691605906.png" },
          { stat: "80x Reach", name: "Liam Wilson", text: "Mindroap helped our videos reach far more people across multiple social platforms.", avatar: "/avatar_1_1774691538936.png" },
          { stat: "1M+ Views", name: "Olivia Davis", text: "We achieved millions of views on our content after Mindroap improved editing.", avatar: "/avatar_2_1774691605906.png" }
        ].map((t, i) => (
          <div key={i} className="p-12 border-r border-b border-gray-200/30 group hover:bg-white/40 transition-all duration-700 flex flex-col">
            <div className="flex justify-between items-start mb-12">
               <AtelierLabel tracking="wider" className="text-gray-400 group-hover:text-[#1ca1f1] transition-colors">{t.stat}</AtelierLabel>
               <div className="flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                 {[...Array(5)].map((_, j) => (
                   <Star key={j} className="w-3 h-3 fill-[#1ca1f1] text-[#1ca1f1]" />
                 ))}
               </div>
            </div>
            
            <p className="text-xl font-light text-gray-500 italic leading-relaxed mb-16 grow">
              &ldquo;{t.text}&rdquo;
            </p>
            
            <div className="flex items-center gap-6 mt-auto">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/40 shadow-sm glass-panel grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light text-[#111111] tracking-tight">{t.name}</span>
                <AtelierLabel tracking="widest" className="mt-1 text-gray-400/80">Verified Partner</AtelierLabel>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-gray-200/40 pt-20">
         <div className="flex items-center gap-8">
            <div className="flex -space-x-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden relative shadow-sm glass-panel grayscale hover:grayscale-0 transition-all duration-700">
                   <img src={`/avatar_${i === 3 ? 1 : i}_1774691538936.png`} alt="Creator" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
            <div className="flex flex-col gap-1">
               <AtelierLabel tracking="widest" className="text-[#111111]">500+ Content Creators</AtelierLabel>
               <span className="text-[9px] font-light text-gray-500 italic">Scaling with absolute precision across all channels.</span>
            </div>
         </div>
         
         <div className="flex items-center gap-10">
            <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <AtelierLabel tracking="widest" className="text-[#111111]">Global Reach</AtelierLabel>
               </div>
               <AtelierLabel tracking="wide" className="text-gray-400/80">EST. 2024 / HQ London</AtelierLabel>
            </div>
         </div>
      </div>
    </AtelierLayout>
  );
}
