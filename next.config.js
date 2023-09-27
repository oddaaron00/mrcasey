/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    serverActions: true,
  },
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
