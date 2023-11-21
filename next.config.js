/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: 'akaria-backend.hellotree.dev' }] },
  env: {
    GOOGLE_CLIENT_ID:
      '643143283764-p7q9kp32li4bccvko5anudlf4a36sf02.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_SECRET: 'bxazmEAnVcppWS7YZeGLLVSyUgMfmr1/p1y5/cEJCX8=',
  },
};

module.exports = nextConfig;
