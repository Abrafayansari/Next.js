"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed flex justify-around gap-x-6 sm:gap-0 sm:justify-between px-2 sm:px-10 sm:w-[40vw] border-slate-800 border items-center bg-black text-white h-16 rounded-full top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
<div className="flex justify-between gap-2 sm:justify-evenly items-center w-[20vw]">
  <Link href={"/"}>Home</Link>
  <Link href={"/"}>Shop</Link>
  <Link href={"/"}>Cart</Link>
</div>
<div>
<button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2681,55%,#000103)] bg-[length:200%_100%] px-6 py-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Login
        </button>
</div>
    </div>
  )
}

export default Navbar
