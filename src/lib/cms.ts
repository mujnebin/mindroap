import fs from 'fs/promises';
import path from 'path';

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface WorkflowStep {
  id: string;
  step: string; // e.g. "01"
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  type: "Starter" | "Pro" | "Enterprise";
  usdPrice: string;
  bdtPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface SiteData {
  portfolio: PortfolioItem[];
  services: ServiceItem[];
  blogs: BlogPost[];
  stats: StatItem[];
  workflow: WorkflowStep[];
  faq: FAQItem[];
  pricing: PricingTier[];
}

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'cms.json');

export async function getSiteData(): Promise<SiteData> {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(fileContents) as SiteData;
  } catch (error) {
    console.error("Error reading CMS data from filesystem", error);
    return { portfolio: [], services: [], blogs: [], stats: [], workflow: [], faq: [], pricing: [] };
  }
}

export async function writeSiteData(data: SiteData): Promise<void> {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("Error writing CMS data to filesystem", error);
    throw new Error('Failed to write CMS data. Permission error or file locked.');
  }
}
