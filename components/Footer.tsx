export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6 text-center" style={{ background: "#050816" }}>
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-gray-400 text-sm font-medium">Built by Meghana</p>
        <div className="flex items-center justify-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
            LinkedIn
          </a>
          <span className="text-gray-700">·</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
            GitHub
          </a>
        </div>
        <p className="text-gray-700 text-xs">© 2026</p>
      </div>
    </footer>
  );
}
