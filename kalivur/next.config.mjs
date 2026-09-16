import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
/** @type {import('next').NextConfig} */
export default function config(phase) {
  return {
    output: "export",
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : "out",
    images: { unoptimized: true },
  };
}

