/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    serverUrl: "https://be-qode.vercel.app/api/v1",
    bucketUrl: "https://webnc-2023.s3.ap-southeast-2.amazonaws.com",
  },
};

export default nextConfig;
