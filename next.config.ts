import type { NextConfig } from "next";

const LB = "https://luggagebusnakasendo.com";

const nextConfig: NextConfig = {
  async redirects() {
    // The luggage bus now lives on its own domain.
    // Temporary (307) until the domain is connected; switch to permanent afterwards.
    return [
      { source: "/luggage-shuttle", destination: LB, permanent: false },
      { source: "/ja/luggage-shuttle", destination: `${LB}/ja`, permanent: false },
    ];
  },
};

export default nextConfig;
