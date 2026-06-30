import { Link, useRouter } from '../router';

const navLinks = [
  { label: 'الرئيسية', path: '/' },
  { label: 'مكتبة القوانين', path: '/library' },
  { label: 'المقالات القانونية', path: '/articles' },
  { label: 'الملخصات', path: '/summaries' },
  { label: 'الندوات العلمية', path: '/seminars' },
  { label: 'آخر الأخبار', path: '/news' },
];

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const { path } = useRouter();

  return (
    <header className="bg-white dark:bg-[#1e293b] text-slate-800 dark:text-slate-100 sticky top-0 z-50 shadow-sm border-b border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* البراند والشعار القانوني الفخم */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-amber-600 dark:bg-amber-700 rounded-lg flex items-center justify-center text-base text-white font-serif font-black shadow-sm">
            ق
          </div>
          <div className="text-right leading-tight hidden sm:block">
            <div className="font-black text-slate-900 dark:text-white text-sm md:text-base">منصة القانون المغربي</div>
            <div className="text-[9px] text-slate-400 dark:text-slate-400 font-medium">بوابة التشريع والمحتوى الحي</div>
          </div>
        </Link>

        {/* أزرار التنقل النظيفة والمتجاوبة - تختفي في الموبايل لتوفير مساحة وتظهر كشريط عريض في الحواسيب */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = path === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`px-4 py-2 text-xs md:text-sm font-bold transition-all border-b-2 rounded-t-lg ${
                  isActive
                    ? 'text-amber-600 dark:text-amber-500 border-amber-600 dark:border-amber-500 bg-amber-50/30 dark:bg-amber-500/5'
                    : 'text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* أدوات التحكم الجانبية: زر التبديل الميكانيكي وزر الإشعارات الصامت */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* زر تبديل الألوان الذكي (Light / Dark Mode Switcher) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm shadow-2xl"
          >
            {darkMode ? (
              <span className="text-amber-400">☀️</span>
            ) : (
              <span className="text-slate-700">🌙</span>
            )}
          </button>

          {/* زر التنبيهات النظيف */}
          <button className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative text-sm">
            <span>🔔</span>
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-amber-600 dark:bg-amber-500 rounded-full" />
          </button>
          
        </div>
      </div>
    </header>
  );
}