import { useState, useEffect } from 'react';
import { Search, FileText, Download, ChevronLeft } from 'lucide-react';

const tabs = ['الأحدث', 'السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'السنة الرابعة'];

export default function SummariesPage() {
  const [activeTab, setActiveTab] = useState('الأحدث');
  const [query, setQuery] = useState('');
  const [summaries, setSummaries] = useState([]);

  // جلب البيانات من ملف الـ JSON المربوط بلوحة التحكم
  useEffect(() => {
    fetch('/data/summaries.json')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.summaries)) setSummaries(data.summaries);
        else if (Array.isArray(data)) setSummaries(data);
      })
      .catch((err) => console.log("خطأ في جلب بيانات الملخصات:", err));
  }, []);

  // تصفية وتصنيف البيانات حسب شريط الخيارات والبحث
  const filtered = summaries.filter((item) => {
    const matchTab = activeTab === 'الأحدث' || item.yearTag === activeTab;
    const matchQ = !query || item.title.includes(query) || item.description.includes(query);
    return matchTab && matchQ;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 text-right bg-gray-50/40 min-h-screen" dir="rtl">
      {/* العناوين الرئيسية */}
      <div className="mb-6 text-center md:text-right">
        <h1 className="font-extrabold text-navy-900 text-2xl mb-1">الملخصات</h1>
        <p className="text-gray-400 text-xs">ملخصات شاملة لجميع مواد القانون</p>
      </div>

      {/* شريط البحث */}
      <div className="relative mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن ملخص..."
          className="w-full pr-4 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none bg-white text-right shadow-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
        />
      </div>

      {/* شريط التبويبات الفلترة حسب السنوات الدراسية */}
      <div className="flex gap-2 justify-end flex-wrap mb-8 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === tab ? 'bg-navy-950 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* شبكة عرض بطاقات الملخصات الهيكلية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item, index) => (
          <div key={item.id || index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group">
            
            {/* الجزء العلوي: الصورة والشارات المتغيرة */}
            <div className="relative h-40 w-full overflow-hidden shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              
              {/* شارة مجاني أو مدفوع الملونة */}
              <span className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-sm ${
                item.status === 'مجاني' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
              }`}>
                {item.status || 'مجاني'}
              </span>

              {/* شارة السنة الدراسية المتواجدة على الصورة */}
              <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                {item.yearTag}
              </span>
            </div>

            {/* محتوى وتفاصيل المادة النصية */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="mb-4">
                <h3 className="font-extrabold text-navy-950 text-sm mb-1 line-clamp-1 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[11px] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* تفاصيل الهيكل السفلي (عدد الصفحات والتحميلات) */}
              <div className="flex items-center justify-between border-t border-gray-50 pt-3 text-[11px] text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-gray-300" /> {item.pages}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-gray-300" /> {item.downloads}
                </span>
              </div>

              {/* زر التحميل يفتح رابط الـ PDF المباشر المرفق في لوحة التحكم */}
              <a
                href={item.pdfUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-navy-950 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-navy-900 transition-colors shadow-sm"
              >
                {item.status === 'مجاني' ? 'تحميل مجاني' : 'تحميل الملخص'} <ChevronLeft className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 text-sm bg-white rounded-2xl border border-gray-100 shadow-sm">
          لا توجد ملخصات مضافة حالياً لهذا التبويب.
        </div>
      )}
    </div>
  );
}
