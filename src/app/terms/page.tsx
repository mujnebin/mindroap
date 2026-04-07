import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AtelierLabel } from "@/components/ui/Atelier/AtelierLabel";
import { AtelierLayout } from "@/components/ui/Atelier/AtelierLayout";
import { AtelierCTA } from "@/components/ui/Atelier/AtelierCTA";
import { FadeUp, BlurReveal } from "@/components/animations/FadeUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Mindroap",
  description: "The terms that govern your relationship with Mindroap's editorial services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By engaging Mindroap's editorial services — through booking, payment, or any form of project commencement — you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not proceed with engaging our services. These terms constitute the entire agreement between you and Mindroap regarding the services provided.`,
  },
  {
    title: "Scope of Services",
    body: `Mindroap provides professional video editing, color grading, motion graphics, and related post-production services as described in each project brief or service package. The exact deliverables, timelines, and revision allowances are defined at the time of booking confirmation. Any work outside the agreed scope constitutes a change request and may incur additional charges.`,
  },
  {
    title: "Payment & Billing",
    body: `All services are payable in accordance with the pricing agreed at booking. A deposit may be required before project work commences. Final delivery is contingent upon receipt of full payment. Invoices unpaid beyond 14 days of the due date may result in suspension of services and late fees where applicable under applicable law.`,
  },
  {
    title: "Revisions & Approval",
    body: `Each service package includes a defined number of revision rounds. Revisions must be submitted in a consolidated format — not iteratively — to ensure project efficiency. Approval of a delivered version, whether explicit or through silence after 7 days, constitutes acceptance of that deliverable. Additional revision rounds beyond the agreed number are billed at our standard hourly rate.`,
  },
  {
    title: "Intellectual Property",
    body: `Upon receipt of full payment, Mindroap grants you a perpetual, non-exclusive licence to use the delivered work for the purposes agreed at booking. Mindroap retains the right to display the work in its portfolio and marketing materials unless a confidentiality clause is specifically agreed in writing. You represent that all source materials you supply are cleared for use and do not infringe third-party rights.`,
  },
  {
    title: "Turnaround & Delivery",
    body: `Standard turnaround times are defined per service tier. Mindroap will communicate any delays promptly. Rush delivery options are available at an additional fee. Mindroap is not liable for delays caused by client-side factors, including delayed provision of source materials, late feedback, or incomplete project briefs.`,
  },
  {
    title: "Confidentiality",
    body: `Mindroap treats all client materials, creative briefs, and project details as confidential and will not share or disclose them without your consent, unless required by law. You agree to keep any non-public information about Mindroap's processes, pricing, and methodologies confidential.`,
  },
  {
    title: "Limitation of Liability",
    body: `Mindroap's total liability to you for any claim arising out of or relating to these terms shall not exceed the total fees paid by you in the preceding 30 days. Mindroap is not liable for any indirect, consequential, or incidental damages, including but not limited to lost revenue or algorithmic platform penalties.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts, unless alternative dispute resolution is mutually agreed upon.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFC] text-[#111111] pt-8">
      <Navbar />

      <AtelierLayout id="terms" className="pt-40 pb-32">

        {/* Header */}
        <BlurReveal className="mb-32 max-w-3xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="h-[1px] w-12 bg-[#1ca1f1]/50" />
            <AtelierLabel tracking="widest" className="text-[#1ca1f1]/70">Legal</AtelierLabel>
          </div>
          <h1 className="text-6xl md:text-9xl font-light text-[#111111] tracking-tighter leading-[0.85] mb-8">
            Terms of<br />
            <span className="text-gray-400/80 italic">Service.</span>
          </h1>
          <p className="text-xl font-light text-gray-500 italic leading-relaxed mt-6 max-w-xl">
            These terms govern the professional relationship between you and Mindroap.
            Please read carefully before initiating any project engagement.
            Last updated{" "}
            <span className="text-[#111111] not-italic font-medium">January 1, 2024</span>.
          </p>
        </BlurReveal>

        {/* Sections */}
        <div className="flex flex-col divide-y divide-gray-200/40">
          {sections.map((section, i) => (
            <FadeUp key={i} delay={0.04 * i} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16">
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
            <AtelierLabel tracking="widest" className="text-gray-400">Questions about these terms?</AtelierLabel>
            <p className="text-2xl font-light text-[#111111] tracking-tight">
              Contact us at{" "}
              <a href="mailto:legal@mindroap.com" className="text-[#1ca1f1] hover:underline underline-offset-4 transition-all">
                legal@mindroap.com
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
