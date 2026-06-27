import { useState, useEffect } from 'react';
import { FileText, Download, Search } from 'lucide-react';

export default function SummariesPage() {
  const [summaries, setSummaries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/data/summaries.json')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.summaries)) setSummaries(data.summaries);
        else if (Array.isArray(data)) setSummaries(data);
      })
      .catch((err) => console.log("خطأ في جلب الملخصات:", err));
  }, []);

  const filtered = summaries.filter(s => !query || s.title.includes(query) || s.description.includes(query));

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6 text-right" dir="rtl">
      <div className="mb-6">
        <h1 className="font-extrabold text-navy-900 text-2xl mb-1">الملخصات والمحاضرات القانونية</h1>
        <p className="text-gray-500 text-sm">تحميل مباشر لملخصات المواد بصيغة PDF</p>
      </div>

      {/* البحث */}
      <div className="relative mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن ملخص أو مادة..."
          className="w-full pr-4 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none bg-white text-right"
        />
      </div>

      {/* شبكة عرض الملخصات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <div key={item.id || index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 text-base mb-1">{item.title}</h3>
              <p className="text-xs text-gold-600 font-medium mb-2">{item.author}</p>
              <p className="text-gray-500 text-xs line-clamp-3 mb-4">{item.description}</p>
            </div>
            
            {/* زر التحميل السحري لملف الـ PDF */}
            <a
              href={item.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-navy-950 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-navy-900 transition-colors"
            >
              <Download className="w-4 h-4" /> تحميل الملخص (PDF)
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
