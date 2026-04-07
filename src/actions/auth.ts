"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function login(password: string) {
  const expectedPassword = process.env.ADMIN_PASSWORD || "mindroap123";
  const secureToken = process.env.ADMIN_SECRET_TOKEN || "authorized";

  if (password === expectedPassword) {
    const c = await cookies();
    c.set("admin_token", secureToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 // 1 day
    });
    revalidatePath("/admin");
    return true;
  }
  return false;
}

export async function logout() {
  const c = await cookies();
  c.delete("admin_token");
  revalidatePath("/admin");
}
