import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Configure the MDX plugin
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Apply the MDX plugin to your Next.js config
const nextConfig: NextConfig = {
  /* your existing config options here */
  pageExtensions: ["tsx", "ts", "jsx", "js", "md", "mdx"],
};

// Export the config with MDX support
export default withMDX(nextConfig);
