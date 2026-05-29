import type { Metadata } from "next";
import { DashboardShell } from "./dashboard-shell";

// Force dynamic rendering — the DashboardShell uses the Supabase browser
// client (via AuthProvider) which reads NEXT_PUBLIC_SUPABASE_URL at module
// scope. During build-time prerendering these env vars are unavailable.
export const dynamic = "force-dynamic";

// Server layout whose only job is to declare "do not index" metadata
// for the authed app. robots.ts already disallows these paths at the
// crawler-level and middleware redirects unauthenticated visitors, so
// this is belt-and-suspenders — but SEO-critical if a URL ever leaks
// via a link shared externally.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
