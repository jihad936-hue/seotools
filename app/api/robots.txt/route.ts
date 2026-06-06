import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://seotools.pro/api/sitemap.xml

# Crawl-delay for bots
Crawl-delay: 1

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/

# Allow specific bots more access
User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

User-agent: Bingbot
Allow: /
Crawl-delay: 0.5
`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
