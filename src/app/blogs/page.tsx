import { getSiteData } from "@/lib/cms";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AtelierHeader } from "@/components/ui/Atelier/AtelierHeader";
import { AtelierLabel } from "@/components/ui/Atelier/AtelierLabel";
import { AtelierLayout } from "@/components/ui/Atelier/AtelierLayout";
import { AtelierCTA } from "@/components/ui/Atelier/AtelierCTA";
import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default async function BlogsPage() {
  const data = await getSiteData();

  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] pt-8">
      <Navbar />
      
      <AtelierLayout id="editorial-bay" className="pt-40 pb-20">
        <FadeUp delay={0.1}>
          <AtelierHeader 
            label="Editorial Bay"
            title="Mindset"
            subtitle="Laboratories."
            className="mb-32"
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 relative z-10">
          {data.blogs.map((blog, index) => (
            <FadeUp key={blog.id} delay={0.1 + index * 0.1}>
              <Link href={`/blogs/${blog.slug}`} className="group relative block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[3rem] border border-white/40 shadow-2xl transition-all duration-1000 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                   <Image 
                     src={blog.image} 
                     alt={blog.title} 
                     fill 
                     className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute top-8 left-8">
                      <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
                         <AtelierLabel tracking="widest" className="text-white text-[8px]">{blog.date}</AtelierLabel>
                      </div>
                   </div>
                </div>
                
                <div className="mt-10 px-4">
                   <h2 className="text-4xl font-light text-[#111111] tracking-tighter mb-6 group-hover:text-[#1ca1f1] transition-colors duration-700 leading-tight">
                     {blog.title}
                   </h2>
                   <p className="text-lg text-gray-500 font-light italic leading-relaxed mb-10 max-w-2xl">
                     {blog.excerpt}
                   </p>
                   
                   <div className="flex items-center gap-6 group/arrow">
                      <AtelierLabel tracking="widest" className="text-[#111111] group-hover:text-[#1ca1f1] transition-colors">Study Perspective</AtelierLabel>
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#1ca1f1] group-hover:rotate-45 transition-all duration-700">
                         <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#111111] transition-colors" />
                      </div>
                   </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Global Closing CTA Fragment */}
        <FadeUp delay={0.4} className="mt-40 border-t border-gray-200/40 pt-32 flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-light text-[#111111] tracking-tighter text-center mb-16 leading-none">
                Don&apos;t Just Read. <br/> <span className="text-gray-400 italic">Execute.</span>
            </h2>
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
