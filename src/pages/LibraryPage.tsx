import { useState, useEffect } from 'react';
import { Search, FileText, ChevronLeft } from 'lucide-react';

const categories = [
  { name: 'الكل', count: null },
  { name: 'القانون الأساسي', count: null },
  { name: 'القانون المدني', count: null },
  { name: 'القانون الجنائي', count: null },
  { name: 'قانون الشغل', count: null },
  { name: 'القانون التجاري', count: null },
  { name: 'القانون الإداري', count: null },
  { name: 'قانون الأسرة', count: null },
];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [query, setQuery] = useState('');
  const [laws, setLaws] = useState([]);

  // جلب القوانين تلقائياً من الملف الذي تغذيه لوحة التحكم
  useEffect(() => {
    fetch('/data/library.json')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.library)) setLaws(data.library);
        else if (Array.isArray(data)) setLaws(data);
      })
      .catch((err) => console.log("خطأ في جلب بيانات مكتبة القوانين:", err));
  }, []);

  // حساب الأعداد تلقائياً لكل تصنيف
  const getCategoryCount = (catName: string) => {
    if (catName === 'الكل') return laws.length;
    return laws.filter((law) => law.category === catName).length;
  };

  // تصفية القوانين بحسب محرك البحث والتصنيف النشط
  const filteredLaws = laws.filter((law) => {
    const matchCategory = activeCategory === 'الكل' || law.category === activeCategory;
    const matchQuery = !query || law.title?.includes(query) || law.subtitle?.includes(query);
    return matchCategory && matchQuery;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 text-right bg-gray-50/40 min-h-screen" dir="rtl">
      
      {/* العناوين العلوية */}
      <div className="mb-6">
        <h1 className="font-extrabold text-navy-900 text-2xl mb-1">مكتبة القوانين</h1>
        <p className="text-gray-400 text-xs">جميع القوانين والأنظمة المغربية</p>
      </div>

      {/* شريط البحث الهيكلي */}
      <div className="relative mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث باسم القانون أو رقم الظهير..."
          className="w-full pr-4 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none bg-white text-right shadow-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
        />
      </div>

      {/* تقسيم الصفحة: القائمة + الشريط الجانبي */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* اليمين: شريط التصنيفات الجانبي الأنيق */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm lg:col-span-1 order-1 lg:order-2">
          <h2 className="font-bold text-navy-950 text-sm mb-4 pb-2 border-b border-gray-50 flex items-center justify-between">
            <span>التصنيفات</span>
            <span className="text-xs text-gray-400 font-normal">📁</span>
          </h2>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-navy-950 text-white shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-navy-900'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {getCategoryCount(cat.name)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* اليسار: قائمة النصوص والظهائر القانونية المدرجة */}
        <div className="lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">
          {filteredLaws.map((law, index) => (
            <div
              key={law.id || index}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              {/* زر عرض الجانبي يفتح رابط الملف المرفوع مباشرة */}
              <div className="w-full sm:w-auto order-3 sm:order-1">
                <a
                  href={law.fileUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-6 py-2 border border-amber-200 text-amber-700 hover:bg-amber-50 text-xs font-bold rounded-xl transition-all w-full sm:w-auto shadow-sm bg-white"
                >
                  عرض <ChevronLeft className="w-4 h-4" />
                </a>
              </div>

              {/* تفاصيل النص القانوني والنوع والتاريخ */}
              <div className="flex-1 text-right order-2 sm:order-2 w-full">
                <div className="flex items-center justify-start gap-3 mb-1.5">
                  <span className="bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold">
                    {law.category}
                  </span>
                  <span className="text-[10px] text-gray-300 font-medium">
                    {law.date}
                  </span>
                </div>
                <h3 className="font-extrabold text-navy-950 text-sm md:text-base mb-1 leading-snug">
                  {law.title}
                </h3>
                <p className="text-gray-400 text-xs font-medium">
                  {law.subtitle}
                </p>
              </div>

              {/* الأيقونة الرمزية للملف على اليمين */}
              <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-slate-400 order-1 sm:order-3 shrink-0 hidden sm:block">
                <FileText className="w-5 h-5" />
              </div>

            </div>
          ))}

          {filteredLaws.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-sm bg-white rounded-2xl border border-gray-100 shadow-sm">
              لا توجد نصوص قانونية مدرجة في هذا القسم حالياً.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
