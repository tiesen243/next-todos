/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./env.js')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    return [
      { source: '/api/:path*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] },
    ]
  },
}

export default config
