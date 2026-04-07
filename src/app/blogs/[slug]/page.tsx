import { getSiteData } from "@/lib/cms";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await getSiteData();
  return data.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = await getSiteData();
  const blog = data.blogs.find(b => b.slug === resolvedParams.slug);

  if (!blog) notFound();

  return (
    <main className="min-h-screen bg-[#fbfbfc] text-[#111111] pt-8">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 w-full pt-32 pb-16">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-[#1ca1f1] hover:text-[#118bd3] font-black mb-12 transition-colors uppercase text-sm tracking-widest">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          Back to Insights
        </Link>
        
        <div className="text-[#1ca1f1] font-black mb-6 text-xs uppercase tracking-[0.2em]">{blog.date}</div>
        <h1 className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tighter text-[#111111]">{blog.title}</h1>
        
        {blog.image && (
          <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden mb-16 shadow-xl border border-gray-100">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>
        )}
        
        <div className="prose prose-lg max-w-2xl text-gray-500 mx-auto font-bold">
          {blog.content.split("\n\n").map((para, i) => {
            if (para.startsWith("### ")) {
              return <h3 key={i} className="text-2xl font-black mt-12 mb-4 text-[#111111] tracking-tight">{para.replace("### ", "")}</h3>;
            }
            if (para.startsWith("## ")) {
              return <h2 key={i} className="text-3xl font-black mt-16 mb-6 text-[#111111] tracking-tight">{para.replace("## ", "")}</h2>;
            }
            
            const boldParsed = para.split(/(\*\*.*?\*\*)/).map((segment, j) => {
              if (segment.startsWith("**") && segment.endsWith("**")) {
                 return <strong key={j} className="font-extrabold text-[#111111]">{segment.slice(2, -2)}</strong>;
              }
              return segment;
            });

            return <p key={i} className="mb-6 leading-relaxed bg-transparent">{boldParsed}</p>;
          })}
        </div>
      </article>
      <Footer />
    </main>
  );
}
