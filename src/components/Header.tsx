import { Link, useRouter } from '../router';
import { useEffect } from 'react';

const navLinks = [
  { label: 'الرئيسية', path: '/' },
  { label: 'الأكاديمية', path: '/academy' },
  { label: 'مكتبة القوانين', path: '/library' },
  { label: 'المقالات', path: '/articles' },
  { label: 'الملخصات', path: '/summaries' },
  { label: 'الندوات', path: '/seminars' },
  { label: 'الأخبار', path: '/news' },
  { label: 'المزيد', path: '/community', hasArrow: true },
];

interface Props {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  onLoginClick: () => void;
}

export default function Header({ darkMode, setDarkMode, onLoginClick }: Props) {
  const { path } = useRouter();

  // إدارة إضافة وحذف كلاس الـ dark من وسم الـ html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 shadow-md border-b border-slate-100" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center gap-4">
        
        {/* الشعار والاسم على اليمين */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-lg text-white">
            ⚖️
          </div>
          <div className="text-right leading-tight">
            <div className="font-bold text-slate-900 text-base">أكاديمية القانون المغربي</div>
            <div className="text-[10px] text-slate-500">منصة قانونية متكاملة</div>
          </div>
        </Link>

        {/* القائمة البرمجية للتنقل بـ ألوان واضحة جداً */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = path === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-2 text-sm font-bold transition-colors flex items-center gap-1 border-b-2 ${
                  isActive
                    ? 'text-amber-600 border-amber-600'
                    : 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-200'
                }`}
              >
                {link.label}
                {link.hasArrow && <span className="text-[10px] text-slate-400">▼</span>}
              </Link>
            );
          })}
        </nav>

        {/* الأزرار التفاعلية على اليسار */}
        <div className="flex items-center gap-2 shrink-0 mr-auto">
          
          {/* زر تبديل الوضع */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm"
            title={darkMode ? "تفعيل الوضع المضيء" : "تفعيل الوضع الداكن"}
          >
            {darkMode ? <span>☀️</span> : <span>🌙</span>}
          </button>

          {/* زر التنبيهات */}
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors relative text-sm">
            🔔
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* زر تسجيل الدخول */}
          <button
            onClick={onLoginClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 font-bold transition-colors"
          >
            <span className="text-xs">👤</span>
            تسجيل الدخول
          </button>

          {/* زر إنشاء حساب */}
          <Link
            to="/Maintenance"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
          >
            <span className="text-xs">➕</span>
            إنشاء حساب
          </Link>
          
        </div>
      </div>
    </header>
  );
}