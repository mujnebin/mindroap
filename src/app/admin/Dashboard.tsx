"use client";

import { SiteData } from "@/lib/cms";
import { 
  addPortfolioItem, deletePortfolioItem, 
  addServiceItem, deleteServiceItem, 
  addBlogPost, deleteBlogPost,
  addStat, deleteStat,
  addWorkflowStep, deleteWorkflowStep,
  addFAQ, deleteFAQ,
  addPricingTier, deletePricingTier
} from "@/actions/admin";
import { logout } from "@/actions/auth";
import { Trash2, Plus, Layout, Zap, HelpCircle, DollarSign, Activity, FileText, Briefcase } from "lucide-react";
import { useState } from "react";

type TabType = "portfolio" | "services" | "blogs" | "stats" | "workflow" | "faq" | "pricing";

export function AdminDashboard({ initialData }: { initialData: SiteData }) {
  const [activeTab, setActiveTab] = useState<TabType>("portfolio");

  const tabs = [
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "services", label: "Services", icon: Layout },
    { id: "blogs", label: "Blogs", icon: FileText },
    { id: "stats", label: "Stats", icon: Activity },
    { id: "workflow", label: "Workflow", icon: Zap },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "pricing", label: "Pricing", icon: DollarSign },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/50">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-[#111111]">Mindroap <span className="text-[#1ca1f1]">OS</span></h1>
          <p className="text-gray-400 font-bold text-sm mt-1 uppercase tracking-widest">Agency Management Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Server Live</span>
          </div>
          <button onClick={() => logout()} className="bg-red-500 hover:bg-black text-white px-8 py-3 rounded-full font-black text-sm shadow-xl active:scale-95 transition-all duration-300">Exit Session</button>
        </div>
      </div>

      <div className="flex gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
        {tabs.map(tab => (
          <button 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-3 px-6 py-4 rounded-[2rem] font-black capitalize transition-all tracking-tight whitespace-nowrap border-2 ${activeTab === tab.id ? "bg-[#111111] text-white border-[#111111] shadow-2xl scale-105" : "bg-white text-gray-400 border-gray-100 hover:text-[#111111] hover:border-gray-200"}`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-[#1ca1f1]" : "text-gray-300"}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ADD FORM */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
          <div className="glass-panel p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-2xl shadow-gray-200/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1ca1f1]"></div>
             <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-[#111111]">
               <Plus className="w-6 h-6 text-[#1ca1f1]" /> New {activeTab === "faq" ? "FAQ" : activeTab === "portfolio" ? "Project" : activeTab.slice(0, -1)}
             </h2>
            
            {activeTab === "portfolio" && (
              <form action={addPortfolioItem} className="flex flex-col gap-6">
                <InputGroup label="Project Title" name="title" required />
                <InputGroup label="Image URL" name="image" required placeholder="/portfolio_1.png" />
                <InputGroup label="Landing Link" name="link" placeholder="https://..." />
                <SubmitButton label="Launch Project" />
              </form>
            )}

            {activeTab === "services" && (
              <form action={addServiceItem} className="flex flex-col gap-5">
                <InputGroup label="Service Title" name="title" required />
                <InputGroup label="Lucide Icon" name="icon" required placeholder="Video, Film, Zap" />
                <TextAreaGroup label="Description" name="description" required rows={4} />
                <SubmitButton label="Activate Service" />
              </form>
            )}

            {activeTab === "blogs" && (
              <form action={addBlogPost} className="flex flex-col gap-5">
                <InputGroup label="Blog Title" name="title" required />
                <InputGroup label="Thumbnail URL" name="image" placeholder="/blog_image.png" />
                <InputGroup label="Slug" name="slug" placeholder="custom-slug" />
                <TextAreaGroup label="Excerpt" name="excerpt" required rows={2} />
                <TextAreaGroup label="Full Content (Markdown)" name="content" required rows={10} />
                <SubmitButton label="Publish Post" />
              </form>
            )}

            {activeTab === "stats" && (
              <form action={addStat} className="flex flex-col gap-5">
                <InputGroup label="Metric (Value)" name="value" required placeholder="1,200+" />
                <InputGroup label="Label" name="label" required placeholder="Videos Delivered" />
                <SubmitButton label="Record Metric" />
              </form>
            )}

            {activeTab === "workflow" && (
              <form action={addWorkflowStep} className="flex flex-col gap-5">
                <InputGroup label="Step Number" name="step" required placeholder="01" />
                <InputGroup label="Title" name="title" required />
                <InputGroup label="Lucide Icon" name="icon" placeholder="Target, Zap" />
                <TextAreaGroup label="Description" name="description" required rows={3} />
                <SubmitButton label="Add Process Step" />
              </form>
            )}

            {activeTab === "faq" && (
              <form action={addFAQ} className="flex flex-col gap-5">
                <InputGroup label="Question" name="question" required />
                <TextAreaGroup label="Answer" name="answer" required rows={4} />
                <SubmitButton label="Add FAQ" />
              </form>
            )}

            {activeTab === "pricing" && (
              <form action={addPricingTier} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Plan Tier</label>
                  <select name="type" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 font-bold outline-none focus:border-[#1ca1f1]">
                    <option value="Starter">Starter</option>
                    <option value="Pro">Pro</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="USD Price" name="usdPrice" required placeholder="$999" />
                  <InputGroup label="BDT Price" name="bdtPrice" required placeholder="৳99,900" />
                </div>
                <TextAreaGroup label="Description" name="description" required rows={2} />
                <TextAreaGroup label="Features (One per line)" name="features" required rows={6} />
                <label className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-2xl border border-dotted border-gray-200">
                  <input type="checkbox" name="popular" className="w-5 h-5 rounded-lg border-gray-300 text-[#1ca1f1] focus:ring-[#1ca1f1]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]">Mark as Popular</span>
                </label>
                <SubmitButton label="Deploy Pricing" />
              </form>
            )}
          </div>
        </div>

        {/* LIST VIEW */}
        <div className="lg:col-span-8">
          <div className="glass-panel p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-2xl shadow-gray-200/50 min-h-[600px]">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black text-[#111111]">Global <span className="text-gray-300">Inventory</span></h2>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 p-2 bg-gray-50 rounded-lg border border-gray-100">
                {activeTab} Index
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {activeTab === "portfolio" && initialData.portfolio.map(item => (
                <ListItem key={item.id} title={item.title} sub={item.link} onDelete={() => deletePortfolioItem(item.id)} />
              ))}
              {activeTab === "services" && initialData.services.map(item => (
                <ListItem key={item.id} title={item.title} sub={item.icon} onDelete={() => deleteServiceItem(item.id)} />
              ))}
              {activeTab === "blogs" && initialData.blogs.map(item => (
                <ListItem key={item.id} title={item.title} sub={`/blogs/${item.slug}`} onDelete={() => deleteBlogPost(item.id)} />
              ))}
              {activeTab === "stats" && initialData.stats.map(item => (
                <ListItem key={item.id} title={item.value} sub={item.label} onDelete={() => deleteStat(item.id)} />
              ))}
              {activeTab === "workflow" && initialData.workflow.map(item => (
                <ListItem key={item.id} title={`${item.step} ${item.title}`} sub={item.icon} onDelete={() => deleteWorkflowStep(item.id)} />
              ))}
              {activeTab === "faq" && initialData.faq.map(item => (
                <ListItem key={item.id} title={item.question} sub="Frequently Asked Question" onDelete={() => deleteFAQ(item.id)} />
              ))}
              {activeTab === "pricing" && initialData.pricing.map(item => (
                <ListItem key={item.id} title={`${item.type} Plan`} sub={`${item.usdPrice} / ${item.bdtPrice}`} onDelete={() => deletePricingTier(item.id)} />
              ))}
              
              {(initialData[activeTab as keyof typeof initialData] as unknown[])?.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                     <Plus className="w-6 h-6 text-gray-200" />
                   </div>
                   <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest text-center">No {activeTab} defined.<br/>Use the creation panel to begin.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Minimalist UI Components for Dashboard
function InputGroup({ label, name, required = false, type = "text", placeholder = "" }: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">{label} {required && "*"}</label>
      <input 
        name={name} 
        required={required} 
        type={type} 
        placeholder={placeholder} 
        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1ca1f1]/30 focus:shadow-xl focus:shadow-[#1ca1f1]/5 transition-all outline-none font-bold text-[#111111]" 
      />
    </div>
  );
}

function TextAreaGroup({ label, name, required = false, rows = 3, placeholder = "" }: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">{label} {required && "*"}</label>
      <textarea 
        name={name} 
        required={required} 
        rows={rows} 
        placeholder={placeholder} 
        className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1ca1f1]/30 focus:shadow-xl focus:shadow-[#1ca1f1]/5 transition-all outline-none font-bold text-[#111111] resize-none" 
      />
    </div>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button type="submit" className="bg-[#1ca1f1] text-white py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-[#1ca1f1]/10 hover:shadow-[#1ca1f1]/30 hover:scale-[1.02] active:scale-95 transition-all mt-4">
      {label}
    </button>
  );
}

function ListItem({ title, sub, onDelete }: { title: string, sub: string, onDelete: () => void }) {
  return (
    <div className="flex items-center justify-between p-7 bg-gray-50/50 hover:bg-white border-2 border-transparent hover:border-gray-100 rounded-[2.5rem] transition-all group">
      <div className="flex flex-col">
        <span className="font-black text-[#111111] text-lg tracking-tight">{title}</span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">{sub}</span>
      </div>
      <button 
        onClick={(e) => {
          if (confirm("Permanently delete this item?")) onDelete();
        }} 
        className="text-gray-300 hover:text-red-500 p-4 hover:bg-red-50 rounded-2xl transition-all opacity-0 group-hover:opacity-100"
      >
        <Trash2 className="w-5 h-5"/>
      </button>
    </div>
  );
}
