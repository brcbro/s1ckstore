import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static HTML export — runs on Cloudflare Pages with no adapter
  trailingSlash: true, // /shop/ instead of /shop — required for Cloudflare static routing
  images: { unoptimized: true }, // next/image optimization requires a Node server
};

export default nextConfig;
