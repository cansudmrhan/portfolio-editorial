import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The cover halftone is served at full quality: re-encoding a dot screen
    // at the default 75 muddies the dots.
    qualities: [75, 100],
  },
};

export default nextConfig;
