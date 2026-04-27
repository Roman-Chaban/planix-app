import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      "@entities": path.resolve(__dirname, "src/entities/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets/"),
    },
  },
};

export default nextConfig;
