export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/5 blur-[100px]" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-navy-950 font-bold text-lg">
                D
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Dentiva<span className="text-teal-400">Systems</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              We build autonomous growth engines for forward-thinking dental practices. Recover lost revenue, automate admin, and focus on patient care.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-navy-900 transition-all cursor-pointer">
                  <div className="w-5 h-5 bg-current rounded-sm opacity-50" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Features', 'Calculator', 'Integrations', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-teal-500/10 flex items-center justify-center text-teal-400">@</div>
                <span>hello@dentivasystems.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-teal-500/10 flex items-center justify-center text-teal-400">#</div>
                <span>(888) 123-4567</span>
              </li>
              <li className="pt-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Verified Partner</p>
                  <div className="flex gap-3 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    {/* Logo Dots representing integrations */}
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                    <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                    <div className="w-6 h-6 rounded-full bg-sky-500"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DentivaSystems Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              HIPAA Compliant
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
