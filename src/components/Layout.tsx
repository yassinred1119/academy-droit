import { useState } from 'react';
import { useLocation } from 'wouter'; // يجب أن يكون هنا في الأعلى
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [_, setLocation] = useLocation(); // استدعاء الخطاف هنا

  return (
    <div className="min-h-screen bg-gray-100 font-arabic flex flex-col">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onLoginClick={() => setLocation('/Maintenance')} 
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}