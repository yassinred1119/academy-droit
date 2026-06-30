import { useState } from 'react';
import { useRouter } from '../router'; // استدعاء نفس الراوتر الموحد للمشروع
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { navigate } = useRouter(); // استخدام خطاف التوجيه الموحد

  return (
    <div className={`min-h-screen flex flex-col font-['Tajawal'] ${darkMode ? 'dark bg-slate-900 text-white' : 'bg-[#f8fafc] text-slate-900'}`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onLoginClick={() => navigate('/Maintenance')} // التوجيه السلس لصفحة الصيانة عند الضغط على تسجيل الدخول
      />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}