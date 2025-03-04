import Navbar from "@/components/Navbar";
import { auth } from "@/gel";
import { signout } from "@/app/actions";
import { redirect } from "next/navigation";

const handleSignOut = async () => {
  "use server";

  await signout();
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.getSession();
  const signedIn = await session.isSignedIn();

  if (!signedIn) {
    redirect(auth.getBuiltinUIUrl());
  }

  return (
    <div className="min-h-full">
      <Navbar signedIn={signedIn} onSignOut={handleSignOut} />

      <div className="relative isolate px-4 pt-8 sm:px-6 xl:px-16">
        <main>
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
