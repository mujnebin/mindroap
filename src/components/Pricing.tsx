import { getSiteData } from "@/lib/cms";
import { PricingClient } from "./PricingClient";

export async function Pricing() {
  const data = await getSiteData();
  return <PricingClient initialPricing={data.pricing} />;
}
