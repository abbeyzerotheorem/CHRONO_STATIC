import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, Instagram, Twitter, Youtube, Music2, CreditCard, Wallet } from 'lucide-react';
import { SITE, NAVIGATION } from '../../constants/site';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* Top Section with Newsletter */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-1.5">
              <span className="font-display text-xl font-bold text-white">CHRONO</span>
              <span className="bg-sky-500 text-black px-1.5 py-0.5 text-[10px] font-mono font-black rounded">
                STATIC
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premium technical fashion engineered for extreme environments. Where alpine performance meets cybernetic aesthetics.
            </p>
            <div className="space-y-1 text-[10px] font-mono text-slate-600 uppercase tracking-widest pt-2">
              <div>{SITE.hq}</div>
              <div>{SITE.coordinates}</div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(NAVIGATION.footer).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-sky-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 text-slate-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[10px] font-mono text-slate-600">
            <span>© {new Date().getFullYear()} CHRONO STATIC LTD.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              SECURE CONNECTION
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-600">
              <span>ID: 7CEBB11D</span>
              <div className="flex gap-0.5 h-5 items-end bg-white/10 px-2 py-0.5 rounded">
                {[1, 2, 1, 3, 1, 1, 2, 3, 1, 2].map((w, i) => (
                  <div key={i} className="w-[1px] bg-slate-400" style={{ height: `${w * 25 + 25}%` }} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={`https://instagram.com/${SITE.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={`https://twitter.com/${SITE.social.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={`https://youtube.com/${SITE.social.youtube.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={`https://tiktok.com/${SITE.social.tiktok.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="TikTok">
                <Music2 className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <CreditCard className="w-5 h-5" />
              <Wallet className="w-5 h-5" />
              <div className="flex items-center gap-1 text-[10px] font-mono">
                <span className="px-1.5 py-0.5 border border-slate-700 rounded text-slate-500">VISA</span>
                <span className="px-1.5 py-0.5 border border-slate-700 rounded text-slate-500">MC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}