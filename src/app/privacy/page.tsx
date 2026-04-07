import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AtelierLabel } from "@/components/ui/Atelier/AtelierLabel";
import { AtelierLayout } from "@/components/ui/Atelier/AtelierLayout";
import { AtelierCTA } from "@/components/ui/Atelier/AtelierCTA";
import { FadeUp, BlurReveal } from "@/components/animations/FadeUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Mindroap",
  description: "Understand how Mindroap collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "Information We Collect",
    body: `When you engage with Mindroap's services — whether through our booking form, contact channels, or direct collaboration — we may collect personal information including your name, email address, social media handles, and project-specific details you choose to share. We collect only what is necessary to deliver exceptional editorial work.`,
  },
  {
    title: "How We Use Your Information",
    body: `Your information is used exclusively to communicate about your project, deliver completed editorial work, process payments through secure third-party processors, and occasionally send service updates you can opt out of at any time. We do not use your data for automated decision-making or algorithmic profiling.`,
  },
  {
    title: "Data Storage & Security",
    body: `All client data is stored securely using industry-standard encryption. Project files and communication logs are retained for a period of 24 months following project completion, after which they are permanently deleted unless you request otherwise. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "Third-Party Services",
    body: `Mindroap may engage secure third-party tools for payment processing (Stripe), video delivery (cloud storage), and project communication (email/messaging platforms). Each third-party provider operates under their own privacy policy and is selected to meet equivalent security standards to our own.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, rectify, or delete any personal data we hold about you. You may also request a portable copy of your data or withdraw consent for its processing at any time. To exercise any of these rights, contact us at privacy@mindroap.com and we will respond within 30 days.`,
  },
  {
    title: "Cookies",
    body: `Our website uses minimal, functional cookies necessary to ensure proper page operation. We do not use third-party tracking cookies or advertising cookies. You may disable cookies in your browser settings without affecting your ability to access our content.`,
  },
  {
    title: "Changes to This Policy",
    body: `This privacy policy may be updated periodically to reflect changes in our practices or applicable law. Material changes will be communicated via email to active clients. Continued use of our services after any update constitutes acceptance of the revised policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] pt-8">
      <Navbar />

      <AtelierLayout id="privacy" className="pt-40 pb-32">

        {/* Header */}
        <BlurReveal className="mb-32 max-w-3xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="h-[1px] w-12 bg-[#1ca1f1]/50" />
            <AtelierLabel tracking="widest" className="text-[#1ca1f1]/70">Legal</AtelierLabel>
          </div>
          <h1 className="text-6xl md:text-9xl font-light text-[#111111] tracking-tighter leading-[0.85] mb-8">
            Privacy<br />
            <span className="text-gray-400/80 italic">Policy.</span>
          </h1>
          <p className="text-xl font-light text-gray-500 italic leading-relaxed mt-6 max-w-xl">
            Mindroap is committed to handling your information with the same precision and care
            we bring to every edit. This policy is effective as of{" "}
            <span className="text-[#111111] not-italic font-medium">January 1, 2024</span>.
          </p>
        </BlurReveal>

        {/* Sections */}
        <div className="flex flex-col divide-y divide-gray-200/40">
          {sections.map((section, i) => (
            <FadeUp key={i} delay={0.05 * i} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16">
              <div className="md:col-span-4 flex flex-col gap-3">
                <AtelierLabel tracking="widest" className="text-[#1ca1f1]/60">0{i + 1}</AtelierLabel>
                <h2 className="text-2xl md:text-3xl font-light text-[#111111] tracking-tight leading-snug">
                  {section.title}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  {section.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Footer CTA */}
        <FadeUp delay={0.4} className="mt-32 pt-16 border-t border-gray-200/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <AtelierLabel tracking="widest" className="text-gray-400">Questions?</AtelierLabel>
            <p className="text-2xl font-light text-[#111111] tracking-tight">
              Reach us at{" "}
              <a href="mailto:privacy@mindroap.com" className="text-[#1ca1f1] hover:underline underline-offset-4 transition-all">
                privacy@mindroap.com
              </a>
            </p>
          </div>
          <AtelierCTA href="/" label="Return to Studio" variant="outline" />
        </FadeUp>

      </AtelierLayout>

      <Footer />
    </main>
  );
}
