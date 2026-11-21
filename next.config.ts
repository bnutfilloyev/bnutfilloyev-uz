import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The ML Gap deck lives outside public/ and is read at request time
  // by /mlgap (button state) and /mlgap/slides.pdf (the file itself).
  outputFileTracingIncludes: {
    '/mlgap': ['./content/mlgap/**/*'],
    '/mlgap/slides.pdf': ['./content/mlgap/**/*'],
  },
};

export default nextConfig;
