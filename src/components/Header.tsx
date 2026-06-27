import { Bell, Moon, Sun, User, UserPlus, Scale, ChevronDown } from 'lucide-react';
import { Link, useRouter } from '../router';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; // استيراد الأيقونات

export default function Header() {
  // معرفة هل الوضع الداكن مفعّل أم لا
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // تطبيق التغيير على وسم الـ html بكل سلاسة
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
   biographical }, [darkMode]);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      {/* ... باقي كود الهيدر الحالي الخاص بك ... */}
      
      {/* زر الهلال والشمس التفاعلي بدلاً من الأيقونة الثابتة */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="p-2 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
        title={darkMode ? "تفعيل الوضع المضيء" : "تفعيل الوضع الداكن"}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* ... باقي كود الهيدر ... */}
    </header>
  );
}
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

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
            <Scale className="w-5 h-5 text-navy-900" />
          </div>
          <div className="text-right leading-tight">
            <div className="font-bold text-gold-400 text-base">أكاديمية القانون المغربي</div>
            <div className="text-[10px] text-navy-300">منصة قانونية متكاملة</div>
          </div>
        </Link>

        {/* Nav */}
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
                {link.hasArrow && <ChevronDown className="w-3 h-3" />}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0 mr-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-navy-300 hover:text-white hover:bg-navy-700 transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button
            onClick={onLoginClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-navy-200 hover:text-white transition-colors"
          >
            <User className="w-4 h-4" />
            تسجيل الدخول
          </button>
          <Link
            to="/Maintenance"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold rounded-lg transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            إنشاء حساب
          </Link>
        </div>
      </div>
    </header>
  );
}
