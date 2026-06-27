import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-right p-8 bg-slate-50" dir="rtl">
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
        <h1 className="text-xl font-black text-slate-900 mb-2">أكاديمية القانون المغربي</h1>
        <p className="text-slate-500 text-xs mb-4">مرحباً بك في المنصة القانونية الأولى. الموقع قيد التحديث الآن...</p>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث عن مادة أو قانون..."
          className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs outline-none text-slate-900"
        />
      </div>
    </div>
  );
}
