const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.devtool = 'source-map'; // Enable source maps for production
    return config;
  },
};

export default nextConfig;
