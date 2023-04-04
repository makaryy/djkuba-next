/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.googleapis.com",
                port: "",
                pathname: "/djkuba-a56e8.appspot.com/**",
            },
        ],
    },
};

module.exports = nextConfig;
