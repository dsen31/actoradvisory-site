export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-300 font-bold text-lg tracking-tight">
            a<span className="text-blue-400">CTO</span>r Advisory
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-slate-500">
            <p>&copy; 2026 aCTOr Advisory. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
