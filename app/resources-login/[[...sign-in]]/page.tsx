import { ClerkProvider, SignIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export default async function ResourcesLogin() {
  const { userId } = await auth();
  return (
    <ClerkProvider>
      <main className="grid min-h-screen place-content-center gap-6 bg-neutral-950 p-6 text-white">
        <a href="/">aCTOr Advisory</a>
        {userId ? (
          <div className="flex items-center gap-4">
            <UserButton />
            <a href="/resources.html">Back to Resources</a>
          </div>
        ) : (
          <SignIn signUpUrl="/resources-sign-up" forceRedirectUrl="/resources.html" />
        )}
      </main>
    </ClerkProvider>
  );
}
