export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-300 font-bold text-lg tracking-tight">
            a<span className="text-blue-400">CTO</span>r Advisory
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <p>&copy; 2026 aCTOr Advisory. All rights reserved.</p>
              <a
                href="https://www.linkedin.com/company/connectivtech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 72 72"
                  width="18"
                  height="18"
                >
                  <path
                    d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,0 64,0 L8,0 C3.581722,0 0,3.581722 0,8 L0,64 C0,68.418278 3.581722,72 8,72 Z"
                    fill="#007EBB"
                  />
                  <path
                    d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707708,36.0245323 C41.1746667,36.0245323 38.9329167,38.9280435 38.9329167,43.8021149 L38.9329167,62 L28.6333333,62 L28.6333333,27.3333333 L38.9329167,27.3333333 L38.9329167,32.0029558 C38.9329167,32.0029558 42.0261667,26.2742142 49.3572083,26.2742142 C56.6707083,26.2742142 62,30.7644847 62,40.0522857 L62,62 Z M16.349,22.7940133 C12.8455,22.7940133 10,19.9265133 10,16.3970067 C10,12.8675 12.8455,10 16.349,10 C19.8525,10 22.6970833,12.8675 22.6970833,16.3970067 C22.6970833,19.9265133 19.8525,22.7940133 16.349,22.7940133 Z M11.15,62 L21.6538542,62 L21.6538542,27.3333333 L11.15,27.3333333 L11.15,62 Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>
            </div>
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
