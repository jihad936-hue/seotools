export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-XXXXXXXXXXXXXXXX";

export function pageview(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

export function event({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export const adsenseSlots = {
  header: "1234567890",
  sidebar: "0987654321",
  inContent: "1122334455",
  footer: "5566778899",
};
