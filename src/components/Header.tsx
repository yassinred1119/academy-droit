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

  // إدارة إضافة وحذف كلاس الـ dark من وسم الـ html بشكل تلقائي عند تغير الوضع
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
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center gap-4">
        
        {/* الشعار والاسم على اليمين */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-lg">
            ⚖️
          </div>
          <div className="text-right leading-tight">
            <div className="font-bold text-gold-400 text-base">أكاديمية القانون المغربي</div>
            <div className="text-[10px] text-navy-300">منصة قانونية متكاملة</div>
          </div>
        </Link>

        {/* القائمة البرمجية للتنقل (روابط العناوين) */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = path === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 ${
                  isActive
                    ? 'text-gold-400 border-gold-400'
                    : 'text-navy-200 hover:text-white border-transparent hover:border-navy-600'
                }`}
              >
                {link.label}
                {link.hasArrow && <span className="text-[10px]">▼</span>}
              </Link>
            );
          })}
        </nav>

        {/* الأزرار التفاعلية على اليسار */}
        <div className="flex items-center gap-2 shrink-0 mr-auto">
          
          {/* زر تبديل الوضع الداكن / المضيء النظيف والتفاعلي */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700 transition-colors text-sm"
            title={darkMode ? "تفعيل الوضع المضيء" : "تفعيل الوضع الداكن"}
          >
            {darkMode ? <span>☀️</span> : <span>🌙</span>}
          </button>

          {/* زر التنبيهات */}
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700 transition-colors relative text-sm">
            🔔
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* زر تسجيل الدخول */}
          <button
            onClick={onLoginClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-navy-200 hover:text-white transition-colors"
          >
            <span className="text-xs">👤</span>
            تسجيل الدخول
          </button>

          {/* زر إنشاء حساب */}
          <Link
            to="/Maintenance"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold rounded-lg transition-colors"
          >
            <span className="text-xs">➕</span>
            إنشاء حساب
          </Link>
          
        </div>
      </div>
    </header>
  );
}