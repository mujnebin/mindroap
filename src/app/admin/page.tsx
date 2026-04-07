import { getSiteData } from "@/lib/cms";
import { cookies } from "next/headers";
import { AdminDashboard } from "./Dashboard";
import { LoginForm } from "./LoginForm";

export default async function AdminPage() {
  const c = await cookies();
  const token = c.get("admin_token");

  const secureToken = process.env.ADMIN_SECRET_TOKEN || "authorized";

  if (token?.value !== secureToken) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <LoginForm />
      </main>
    );
  }

  const data = await getSiteData();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-8">
      <AdminDashboard initialData={data} />
    </main>
  );
}
