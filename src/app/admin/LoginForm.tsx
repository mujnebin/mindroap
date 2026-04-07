"use client";

import { useState } from "react";
import { login } from "@/actions/auth";

export function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(password);
    if (!success) setError("Invalid password. Hint: mindroap123");
  };

  return (
    <form onSubmit={handleLogin} className="glass-panel p-10 max-w-md w-full flex flex-col gap-6 bg-white border border-gray-100 shadow-2xl rounded-3xl">
      <h1 className="text-3xl font-black mb-2 tracking-tight text-[#111111]">Admin Login</h1>
      <p className="text-gray-500 text-sm font-medium mb-2">Please enter your master password to access the agency dashboard.</p>
      {error && <div className="text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg">{error}</div>}
      <input 
        type="password" 
        placeholder="Enter Master Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-[#111111] outline-none focus:border-[#1ca1f1] focus:ring-4 focus:ring-[#1ca1f1]/10 transition-all font-medium text-base shadow-sm"
      />
      <button type="submit" className="w-full bg-[#1ca1f1] hover:bg-[#118bd3] text-white py-3 rounded-xl font-bold mt-2 transition-all">
        Unlock Dashboard
      </button>
    </form>
  )
}
