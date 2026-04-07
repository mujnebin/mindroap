import React from 'react';
import { getSiteData } from "@/lib/cms";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { StaggerContainer, FadeUp } from "./animations/FadeUp";
import { Counter } from "./animations/Counter";

export async function Stats() {
  const data = await getSiteData();

  return (
    <section id="stats" className="py-24 px-4 max-w-6xl mx-auto border-b border-gray-200/30">
      <StaggerContainer stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 items-center relative overflow-hidden">
        {data.stats.map((stat, index) => (
          <FadeUp 
            key={stat.id} 
            delay={index * 0.1}
            className={`flex flex-col items-center md:items-start md:px-12 gap-2 group transition-all duration-700 ${
              index !== 2 ? 'md:border-r border-gray-200/40' : ''
            }`}
          >
            <AtelierLabel tracking="widest" className="mb-2 text-gray-700">{stat.label}</AtelierLabel>
            <div className="text-6xl md:text-7xl font-light text-[#1ca1f1] tracking-tighter transition-all group-hover:tracking-normal duration-700">
               <Counter value={stat.value} delay={index * 0.2} />
            </div>
          </FadeUp>
        ))}
      </StaggerContainer>
    </section>
  );
}
