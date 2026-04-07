"use server";

import { revalidatePath } from "next/cache";
import { getSiteData, writeSiteData } from "@/lib/cms";
import { v4 as uuidv4 } from "uuid";

// Note: In a real production app, you would verify an authentication session here.
// Since this is a simple local system protected by middleware, we proceed.

export async function addPortfolioItem(formData: FormData) {
  const data = await getSiteData();
  data.portfolio.push({
    id: uuidv4(),
    title: formData.get("title") as string,
    image: formData.get("image") as string,
    link: formData.get("link") as string || "#",
  });
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deletePortfolioItem(id: string) {
  const data = await getSiteData();
  data.portfolio = data.portfolio.filter((item) => item.id !== id);
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function addServiceItem(formData: FormData) {
  const data = await getSiteData();
  data.services.push({
    id: uuidv4(),
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    icon: formData.get("icon") as string || "Check",
  });
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteServiceItem(id: string) {
  const data = await getSiteData();
  data.services = data.services.filter((item) => item.id !== id);
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function addBlogPost(formData: FormData) {
  const data = await getSiteData();
  
  // Format slug from title if missing
  let slug = formData.get("slug") as string;
  if (!slug) {
    slug = (formData.get("title") as string).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  data.blogs.push({
    id: uuidv4(),
    slug,
    title: formData.get("title") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    date: new Date().toISOString().split('T')[0],
    image: formData.get("image") as string || "/hero_video_1774691517478.png"
  });

  await writeSiteData(data);
  revalidatePath("/blogs");
  revalidatePath("/admin");
}

export async function deleteBlogPost(id: string) {
  const data = await getSiteData();
  data.blogs = data.blogs.filter((item) => item.id !== id);
  await writeSiteData(data);
  revalidatePath("/blogs");
  revalidatePath("/admin");
}

export async function addStat(formData: FormData) {
  const data = await getSiteData();
  data.stats.push({
    id: uuidv4(),
    value: formData.get("value") as string,
    label: formData.get("label") as string,
  });
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteStat(id: string) {
  const data = await getSiteData();
  data.stats = data.stats.filter(s => s.id !== id);
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function addWorkflowStep(formData: FormData) {
  const data = await getSiteData();
  data.workflow.push({
    id: uuidv4(),
    step: formData.get("step") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    icon: formData.get("icon") as string || "Zap",
  });
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteWorkflowStep(id: string) {
  const data = await getSiteData();
  data.workflow = data.workflow.filter(w => w.id !== id);
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function addFAQ(formData: FormData) {
  const data = await getSiteData();
  data.faq.push({
    id: uuidv4(),
    question: formData.get("question") as string,
    answer: formData.get("answer") as string,
  });
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteFAQ(id: string) {
  const data = await getSiteData();
  data.faq = data.faq.filter(f => f.id !== id);
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function addPricingTier(formData: FormData) {
  const data = await getSiteData();
  const featuresRaw = formData.get("features") as string;
  data.pricing.push({
    id: uuidv4(),
    type: formData.get("type") as "Starter" | "Pro" | "Enterprise",
    usdPrice: formData.get("usdPrice") as string,
    bdtPrice: formData.get("bdtPrice") as string,
    description: formData.get("description") as string,
    features: featuresRaw.split('\n').filter(f => f.trim() !== ""),
    popular: formData.get("popular") === "on",
  });
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deletePricingTier(id: string) {
  const data = await getSiteData();
  data.pricing = data.pricing.filter(p => p.id !== id);
  await writeSiteData(data);
  revalidatePath("/");
  revalidatePath("/admin");
}
