import Image from "next/image";
import Link from "next/link";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierDivider } from "./ui/Atelier/AtelierDivider";

export function Footer() {
  return (
    <footer className="py-24 border-t border-gray-200/40 bg-white/20 backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start gap-20 relative z-10">
        
        <div className="flex flex-col gap-8 max-w-sm">
          <div className="flex flex-col items-start gap-2">
            <Image 
              src="/logo.png" 
              alt="Mindroap" 
              width={140} 
              height={36} 
              className="h-8 w-auto object-contain object-left invert grayscale"
            />
            <AtelierLabel tracking="widest" className="text-gray-500 mt-2">The Editorial Atelier.</AtelierLabel>
          </div>
          <p className="text-sm font-light text-gray-500 italic leading-relaxed mt-6 md:mt-0 max-w-sm">
            Crafting digital legacies for the world&apos;s most <span className="text-[#111111] font-medium not-italic">visionary creators</span>.
          </p>
          <div className="flex gap-10 mt-4">
             {['Twitter', 'Instagram', 'Fiverr', 'Discord'].map((social) => (
                <a key={social} href="#" className="hover:text-[#1ca1f1] transition-all duration-700">
                  <AtelierLabel tracking="widest" className="text-gray-500">{social}</AtelierLabel>
                </a>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
          <div className="flex flex-col gap-6">
            <AtelierLabel tracking="widest" className="text-gray-500">Laboratory</AtelierLabel>
            <div className="flex flex-col gap-4">
              <Link href="/portfolio" className="hover:text-[#111111] transition-all"><AtelierLabel tracking="wider" className="text-gray-600">Gallery</AtelierLabel></Link>
              <Link href="/blogs" className="hover:text-[#111111] transition-all"><AtelierLabel tracking="wider" className="text-gray-600">Insights</AtelierLabel></Link>
              <Link href="/services" className="hover:text-[#111111] transition-all"><AtelierLabel tracking="wider" className="text-gray-600">Capabilities</AtelierLabel></Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <AtelierLabel tracking="widest" className="text-gray-400">Legal</AtelierLabel>
            <div className="flex flex-col gap-4">
              <a href="/privacy" className="hover:text-[#111111] transition-all"><AtelierLabel tracking="wider" className="text-gray-600">Privacy</AtelierLabel></a>
              <a href="/terms" className="hover:text-[#111111] transition-all"><AtelierLabel tracking="wider" className="text-gray-600">Terms</AtelierLabel></a>
            </div>
          </div>

          <div className="flex flex-col gap-6 col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-gray-200/40 pt-10 md:pt-0 md:pl-16">
            <AtelierLabel tracking="widest" className="text-[#1ca1f1]">Operational Status</AtelierLabel>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <AtelierLabel tracking="wider" className="text-gray-500">Active Studio</AtelierLabel>
              </div>
              <AtelierLabel tracking="widest" className="text-gray-400/80">EST. 2024 / Mindroap HQ</AtelierLabel>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-200/40 mt-16 pt-8 flex justify-between items-center opacity-70 px-4 md:px-12">
        <AtelierLabel tracking="widest" className="text-[8px] text-gray-700">© 2024 Mindroap Agency. All Rights Reserved.</AtelierLabel>
      </div>
    </footer>
  );
}
