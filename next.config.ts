import path from "path";

import type { NextConfig } from "next";

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
