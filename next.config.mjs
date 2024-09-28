/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    experimental: {
        appDir: true,
      },
    compiler: {
        styledComponents: true
    }
};

export default nextConfig;