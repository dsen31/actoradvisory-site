import Nav from "../components/nav";
import Footer from "../components/footer";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-700 text-lg">
            Terms of Service coming soon. Contact{" "}
            <a
              href="mailto:dustin@actoradvisory.com"
              className="text-blue-600 hover:underline"
            >
              dustin@actoradvisory.com
            </a>{" "}
            with any questions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
