import { getSiteData } from "@/lib/cms";
import { FAQClient } from "./FAQClient";

export async function FAQ() {
  const data = await getSiteData();
  return <FAQClient initialFaqs={data.faq} />;
}
