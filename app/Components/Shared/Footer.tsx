export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Copyright */}
          <p className="text-white text-sm order-1 md:order-1">
            &copy; {new Date().getFullYear()} SWIFT AI. All rights reserved.
          </p>

          {/* Right side - Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm order-2 md:order-3">
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Privacy
            </a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Terms
            </a>
            <span className="text-white/30">•</span>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}