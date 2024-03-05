"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Navbar from "./Navbar";
import { Spotlight } from "./ui/Spotlight";
const Herosection = () => {
  return (
  
    
     <div className="h-auto bg-black md:h-[40rem] w-full flex flex-col ">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="mt-40 flex sm:flex-row flex-col justify-between">
 <div>
  
 <div className="font-bold ml-[4vw]  h-auto md:mt-0 text-white text-4xl md:text-[4rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 " ><h1 className="mt-10">Kick-Start Your</h1> <h1 className="mt-5">Shoe Game</h1></div>
  <p className="text-white ml-[4vw] sm:mt-10 md:w-[30vw] mt-20">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae sequi autem expedita suscipit. Voluptates nam illum ab, soluta aliquid, perferendis nobis officia ipsa totam ex ad harum, tempora necessitatibus!
  </p>
  <img className="h-[70vh] sm:hidden mt-4 " src="./sho.png" alt="" />

  <button className="relative mb-4   mt-12 ml-[6vw] inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[0.9rem] font-medium text-white backdrop-blur-3xl">
    Explore More
  </span>
</button>
 </div>
 <div>
  <img className="h-[70vh] hidden sm:flex " src="./sho.png" alt="" />
 </div>
  </div>
   </div>
  )
}

export default Herosection
