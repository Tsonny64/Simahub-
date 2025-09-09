// next.config.mjs (Correct Version)
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", // Correct hostname
      },
      {
        protocol: "https",
        hostname: "example.com", // Another example hostname
      }
    ]
  }
};
