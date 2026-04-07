"use client";

import { useState } from "react";
import { submitBooking } from "@/actions/book";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { FadeUp } from "./animations/FadeUp";
import { AtelierBadge } from "./ui/Atelier/AtelierBadge";
import { AtelierHeader } from "./ui/Atelier/AtelierHeader";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierCTA } from "./ui/Atelier/AtelierCTA";
import { AtelierLayout } from "./ui/Atelier/AtelierLayout";
import { AtelierDivider } from "./ui/Atelier/AtelierDivider";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await submitBooking(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <FadeUp className="max-w-4xl mx-auto px-4 py-40">
        <div className="glass-panel border-white/40 rounded-[4rem] p-16 md:p-32 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] text-center">
          <div className="relative w-24 h-24 mx-auto mb-12">
            <div className="absolute inset-0 bg-[#1ca1f1]/20 blur-2xl rounded-full scale-150 animate-pulse" />
            <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-xl rounded-full flex items-center justify-center text-[#1ca1f1] border border-white/40 shadow-2xl">
              <CheckCircle2 className="w-12 h-12" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-5xl font-light mb-8 tracking-tighter text-[#111111]">Request Received.</h3>
          <p className="text-gray-500 text-xl font-light leading-relaxed max-w-lg mx-auto italic">
            We review every inquiry as a piece of art. Expect a personal link from our founding editor within the next <span className="text-[#111111] font-medium not-italic underline underline-offset-8 decoration-[#1ca1f1]/20">120 Minutes</span>.
          </p>
          <button onClick={() => setStatus("idle")} className="mt-16 group">
            <AtelierBadge variant="outline" className="text-gray-400 group-hover:text-[#111111] transition-all">Return to Studio</AtelierBadge>
          </button>
        </div>
      </FadeUp>
    );
  }

  return (
    <AtelierLayout id="contact" className="py-24">
      <div className="glass-panel border-white/20 rounded-[4rem] p-6 sm:p-10 md:p-24 shadow-[0_48px_120px_-32px_rgba(0,0,0,0.08)] relative overflow-hidden group bg-white/[0.05] backdrop-blur-[40px]">
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse pointer-events-none" />

        {/* Elegant Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-gray-200/40 pb-16">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-6 mb-2">
              <div className="flex -space-x-4">
                <img src="/lead_editor_avatar_18241_1774722306740.png" alt="Team" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover z-30" />
                <img src="/team_editor_avatar_18252111111_1774722333063.png" alt="Team" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover z-20" />
                <AtelierBadge variant="glass" className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-[10px] font-black tracking-widest uppercase shadow-2xl z-10 transition-transform duration-700">+09</AtelierBadge>
              </div>
              <div className="flex flex-col items-start gap-1">
                <AtelierBadge variant="outline" className="px-3 py-1 scale-90 -ml-2 mb-1" shimmer={false}>Editorial Boutique</AtelierBadge>
                <AtelierLabel tracking="widest" className="text-gray-400/80">The Editorial Atelier</AtelierLabel>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-light text-[#111111] tracking-tighter leading-[0.85]">
              Let&apos;s create <br /> your <span className="text-gray-300 hover:text-[#1ca1f1] transition-colors duration-700">Digital</span> Legacy.
            </h2>
            <p className="mt-4 text-gray-500 text-lg font-light tracking-tight max-w-md italic">
              A bespoke approach to viral storytelling for the world&apos;s most <span className="text-[#111111] font-medium not-italic">ambitious creators</span>.
            </p>
          </div>

          <div className="flex flex-row flex-wrap md:flex-col gap-8 md:gap-10 lg:pt-12 min-w-[200px]">
            <div className="flex flex-col">
              <AtelierLabel tracking="widest" className="text-[#1ca1f1] mb-2">EST. Response</AtelierLabel>
              <div className="text-4xl font-light text-[#111111]">120<span className="text-sm font-bold tracking-widest text-gray-300 ml-1">MIN</span></div>
            </div>
            <div className="flex flex-col">
              <AtelierLabel tracking="widest" className="text-green-500 mb-2">Availability</AtelierLabel>
              <div className="text-4xl font-light text-[#111111]">03<span className="text-sm font-bold tracking-widest text-gray-300 ml-1">SLOTS</span></div>
            </div>
          </div>
        </div>

        {status === "error" && (
          <div className="mb-12 flex items-center gap-4 border border-red-50 p-6 rounded-2xl text-red-500 font-light text-sm italic">
            <AlertCircle className="w-4 h-4" />
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Minimalist Inquiry Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 sm:gap-y-16">

          <div className="flex flex-col gap-4 group">
            <AtelierLabel tracking="widest" className="text-gray-500 group-focus-within:text-[#1ca1f1] transition-all">Identity</AtelierLabel>
            <input
              required
              name="name"
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-transparent border-b border-gray-200/60 focus:border-[#1ca1f1] transition-all outline-none py-4 text-2xl font-light placeholder:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-4 group">
            <AtelierLabel tracking="widest" className="text-gray-500 group-focus-within:text-[#1ca1f1] transition-all">Communication</AtelierLabel>
            <input
              required
              name="email"
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full bg-transparent border-b border-gray-200/60 focus:border-[#1ca1f1] transition-all outline-none py-4 text-2xl font-light placeholder:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-4 group md:col-span-2">
            <AtelierLabel tracking="widest" className="text-gray-500 group-focus-within:text-[#1ca1f1] transition-all">Platform Presence</AtelierLabel>
            <input
              name="channel"
              type="url"
              placeholder="PLATFORM LINK (YT/IG)"
              className="w-full bg-transparent border-b border-gray-200/60 focus:border-[#1ca1f1] transition-all outline-none py-4 text-2xl font-light placeholder:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-4 group md:col-span-2">
            <AtelierLabel tracking="widest" className="text-gray-500 group-focus-within:text-[#1ca1f1] transition-all">Project Vision</AtelierLabel>
            <textarea
              required
              name="details"
              rows={2}
              placeholder="TELL US ABOUT THE WORLD YOU WANT TO BUILD..."
              className="w-full bg-transparent border-b border-gray-200/60 focus:border-[#1ca1f1] transition-all outline-none py-4 text-2xl font-light placeholder:text-gray-300 resize-none"
            />
          </div>

          {/* Elegant Footer CTA */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
            <div className="flex items-center gap-6 opacity-80">
              <AtelierLabel tracking="widest" className="text-gray-700">Limited Production</AtelierLabel>
            </div>

            <button
              disabled={status === "loading"}
              type="submit"
              className="w-full md:w-auto bg-[#111111] hover:bg-[#1ca1f1] text-white px-20 py-8 rounded-full font-bold text-xs uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-8 group disabled:opacity-50 animate-shine"
            >
              {status === "loading" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> DISPATCHING</>
              ) : (
                <>Initiate Partnership <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-700" /></>
              )}
            </button>
          </div>
        </form>

      </div>
      <AtelierLabel tracking="widest" className="text-center mt-12 block text-gray-400/80 animate-pulse italic">
        Quality Over Everything.
      </AtelierLabel>
    </AtelierLayout>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  );
}
