import { redirect } from 'next/navigation'

// redirect() is a request-time API — opt out of static prerendering.
export const dynamic = "force-dynamic";

export default function RootPage() {
  redirect('/dashboard')
}
