/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.hive.blog",'api.lorem.space', "picsum.photos","placeimg.com", "threespeakvideo.b-cdn.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.hive.blog",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "threespeakvideo.b-cdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/@:author",
        destination: "/:author",
      },
    ];
  },
};

module.exports = nextConfig;
