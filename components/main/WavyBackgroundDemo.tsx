"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
  return (

    (<WavyBackground>
      <p
        className="text-2xl md:text-4xl lg:text-7xl text-white font-base inter-var text-center">
        "No tienes que ser grande para empezar. Pero tienes que empezar para poder ser grande"
      </p>
      <p
        className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        -Zig Ziglar
      </p>
    </WavyBackground>)
  );
}
