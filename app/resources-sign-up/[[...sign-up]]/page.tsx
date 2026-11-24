import { ClerkProvider, SignUp } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function ResourcesSignUp() {
  return (
    <ClerkProvider>
      <main className="grid min-h-screen place-content-center gap-6 bg-neutral-950 p-6 text-white">
        <a href="/">aCTOr Advisory</a>
        <SignUp signInUrl="/resources-login" forceRedirectUrl="/resources.html" />
      </main>
    </ClerkProvider>
  );
}
