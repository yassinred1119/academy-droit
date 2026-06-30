import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // إدارة حالة النظام اللوني ديناميكياً وحفظ خيار المستخدم في المتصفح
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

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
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-[#f8fafc] dark:bg-[#0f172a]" dir="rtl">
      {/* تمرير دالة التحكم إلى الهيدر */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* محتوى الصفحة الرئيسي المتجاوب */}
      <main className="flex-1 w-full animate-fade-in">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}