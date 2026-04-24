import type { NextConfig } from "next";

import path from "path";


const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
};

export default nextConfig;
