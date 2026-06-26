import { useState } from 'react';
import { Search, FileText, ChevronLeft, Filter } from 'lucide-react';

const categories = [
  { label: 'الكل', count: 320 },
  { label: 'القانون الأساسي', count: 45 },
  { label: 'القانون المدني', count: 78 },
  { label: 'القانون الجنائي', count: 62 },
  { label: 'قانون الشغل', count: 40 },
  { label: 'القانون التجاري', count: 55 },
  { label: 'القانون الإداري', count: 38 },
  { label: 'قانون الأسرة', count: 22 },
];

const laws = [
  { id: 1, number: 'ظهير شريف رقم 1.02.01', title: 'القانون رقم 12.01 المتعلق بالمسطرة المدنية', date: '2023/05/25', category: 'القانون المدني', pages: 180 },
  { id: 2, number: 'ظهير شريف رقم 1.02.12', title: 'القانون رقم 13.11 المتعلق بمدونة الأسرة مع التعديلات', date: '2023/04/12', category: 'قانون الأسرة', pages: 95 },
  { id: 3, number: 'ظهير شريف رقم 1.03.05', title: 'القانون رقم 65.99 المتعلق بمدونة الشغل', date: '2022/09/18', category: 'قانون الشغل', pages: 220 },
  { id: 4, number: 'ظهير شريف رقم 1.04.22', title: 'القانون رقم 17.95 المتعلق بشركات المساهمة', date: '2022/07/15', category: 'القانون التجاري', pages: 140 },
  { id: 5, number: 'ظهير شريف رقم 1.05.18', title: 'القانون رقم 41.90 المحدث بموجبه محاكم إدارية', date: '2022/03/10', category: 'القانون الإداري', pages: 60 },
  { id: 6, number: 'ظهير شريف رقم 1.06.30', title: 'القانون رقم 09.08 المتعلق بحماية الأشخاص الذاتيين', date: '2021/12/20', category: 'القانون الأساسي', pages: 48 },
  { id: 7, number: 'ظهير شريف رقم 1.07.42', title: 'القانون الجنائي المغربي المحدث', date: '2021/08/05', category: 'القانون الجنائي', pages: 310 },
  { id: 8, number: 'ظهير شريف رقم 1.08.55', title: 'القانون رقم 31.08 القاضي بتحديد تدابير حماية المستهلك', date: '2021/05/15', category: 'القانون التجاري', pages: 88 },
];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [query, setQuery] = useState('');

  const filtered = laws.filter((l) => {
    const matchCat = activeCategory === 'الكل' || l.category === activeCategory;
    const matchQ = !query || l.title.includes(query) || l.number.includes(query);
    return matchCat && matchQ;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6 items-start">
      {/* Sidebar categories */}
      <aside className="w-56 shrink-0 hidden lg:block sticky top-20">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
            <Filter className="w-4 h-4 text-gold-500" />
            التصنيفات
          </h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat.label}>
                <button
                  onClick={() => setActiveCategory(cat.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === cat.label
                      ? 'bg-navy-900 text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-xs rounded-full px-1.5 py-0.5 ${activeCategory === cat.label ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {cat.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="mb-5">
          <h1 className="font-extrabold text-navy-900 text-2xl mb-1">مكتبة القوانين</h1>
          <p className="text-gray-500 text-sm">جميع القوانين والأنظمة المغربية</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث باسم القانون أو رقم الظهير..."
            className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
          />
        </div>

        {/* Mobile categories */}
        <div className="flex gap-2 flex-wrap mb-5 lg:hidden">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.label ? 'bg-navy-900 text-white' : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Laws list */}
        <div className="space-y-3">
          {filtered.map((law) => (
            <div
              key={law.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow group flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-navy-700" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] bg-gold-100 text-gold-700 font-bold px-2 py-0.5 rounded-full">{law.category}</span>
                  <span className="text-[10px] text-gray-400">{law.date}</span>
                </div>
                <h3 className="font-bold text-navy-900 text-sm mb-1 group-hover:text-gold-600 transition-colors">{law.title}</h3>
                <p className="text-xs text-gray-400">{law.number} — {law.pages} صفحة</p>
              </div>
              <button className="flex items-center gap-1 text-xs text-gold-600 hover:text-gold-500 font-medium shrink-0 mt-1">
                عرض <ChevronLeft className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">لا توجد نتائج مطابقة</p>
          </div>
        )}
      </div>
    </div>
  );
}
