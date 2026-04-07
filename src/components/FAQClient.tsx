"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { StaggerContainer, FadeUp, BlurReveal } from "./animations/FadeUp";
import { FAQItem } from "@/lib/cms";

export function FAQClient({ initialFaqs }: { initialFaqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AtelierLayout id="faq" className="py-32" containerClassName="max-w-4xl">
      <BlurReveal className="mb-24 max-w-2xl">
        <AtelierHeader 
          label="The Dialogue"
          title="Frequent"
          subtitle="Inquiries."
        />
      </BlurReveal>

      <StaggerContainer stagger={0.1} className="flex flex-col border-t border-gray-200/40">
        {initialFaqs.map((faq, index) => (
          <FadeUp key={faq.id} delay={index * 0.05} className="border-b border-gray-200/40 group hover:bg-white/40 transition-all duration-700">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-12 px-2 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-10">
                <AtelierLabel tracking="widest" className="text-gray-400 group-hover:text-[#1ca1f1] transition-colors">{index < 9 ? `0${index + 1}` : index + 1}</AtelierLabel>
                <span className="text-2xl md:text-3xl font-light tracking-tight text-[#111111] leading-tight pr-4">{faq.question}</span>
              </div>
              <div className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-700 ${openIndex === index ? 'bg-[#111111] text-white border-[#111111] rotate-45' : 'text-gray-300 group-hover:text-[#111111] group-hover:border-[#1ca1f1]'}`}>
                <Plus className="w-5 h-5 flex-shrink-0" />
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index ? 'max-h-[400px] opacity-100 pb-12' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-xl text-gray-500 font-light italic leading-relaxed pl-24 pr-12">
                {faq.answer}
              </p>
            </div>
          </FadeUp>
        ))}
      </StaggerContainer>
      
      <div className="mt-20 flex justify-center opacity-70">
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />)}
        </div>
      </div>
    </AtelierLayout>
  );
}
