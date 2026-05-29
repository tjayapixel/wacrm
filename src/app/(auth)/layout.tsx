import type { Metadata } from "next";
import type { ReactNode } from "react";

// Force dynamic rendering — auth pages use the Supabase browser client
// which reads NEXT_PUBLIC_SUPABASE_URL at module scope. During build-time
// prerendering (e.g. on Vercel) these env vars are unavailable, causing
// the build to fail with "@supabase/ssr: Your project's URL and API key
// are required". Opting out of static generation avoids the issue.
export const dynamic = "force-dynamic";

// Shared metadata for auth pages (login / signup / forgot-password).
// None of these should be indexed — they'd compete with the marketing
// landing in SERPs and offer nothing to a searcher who hasn't already
// signed up. Each page still gets its own <title> via its own
// metadata.title override below the route group layout.
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

export default function AuthLayout({ children }: { children: ReactNode }) {
  return children;
}
