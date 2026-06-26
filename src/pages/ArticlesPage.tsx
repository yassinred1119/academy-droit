import { useState } from 'react';
import { Search, Eye, Calendar, ChevronLeft } from 'lucide-react';

const tabs = ['الأحدث', 'المميزة', 'القانون المدني', 'القانون الجنائي', 'قانون العائلة', 'القانون الدستوري', 'قانون الشغل'];

const articles = [
  { id: 1, title: 'مبدأ حسن النية في القانون المدني المغربي', author: 'د. محمد الكتاني', date: '2024/10/15', views: 1240, category: 'القانون المدني', image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: true },
  { id: 2, title: 'النفس في الاختصاص في قضايا الأحداث', author: 'أ. سارة المنصوري', date: '2024/10/12', views: 980, category: 'القانون الجنائي', image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false },
  { id: 3, title: 'مسؤولية الدولة عن أعمالها الإدارية', author: 'د. يوسف السلاوي', date: '2024/10/10', views: 756, category: 'القانون الدستوري', image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false },
  { id: 4, title: 'شرح مفهوم الطلاق في مدونة الأسرة', author: 'د. فاطمة الزهراء', date: '2024/10/08', views: 2100, category: 'قانون العائلة', image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: true },
  { id: 5, title: 'حقوق العامل في حالة الفصل التعسفي', author: 'أ. كريم العمراني', date: '2024/10/05', views: 1890, category: 'قانون الشغل', image: 'https://images.pexels.com/photos/1575937/pexels-photo-1575937.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false },
  { id: 6, title: 'الجرائم الإلكترونية في القانون المغربي', author: 'د. محمد أمين', date: '2024/10/02', views: 3200, category: 'القانون الجنائي', image: 'https://images.pexels.com/photos/5668853/pexels-photo-5668853.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: true },
];

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState('الأحدث');
  const [query, setQuery] = useState('');

  const filtered = articles.filter((a) => {
    const matchTab = activeTab === 'الأحدث' || activeTab === 'المميزة' ? (activeTab === 'المميزة' ? a.featured : true) : a.category === activeTab;
    const matchQ = !query || a.title.includes(query) || a.author.includes(query);
    return matchTab && matchQ;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="font-extrabold text-navy-900 text-2xl mb-1">المقالات القانونية</h1>
        <p className="text-gray-500 text-sm">مقالات لتحليل وفهم أعمق فصول القانون</p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن مقال..."
          className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-6 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === tab ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Featured + list layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Featured article (large) */}
        {filtered[0] && (
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={filtered[0].image} alt={filtered[0].title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              {filtered[0].featured && (
                <span className="absolute top-3 right-3 bg-gold-500 text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full">مميز</span>
              )}
            </div>
            <div className="p-5">
              <span className="text-[11px] text-gold-600 font-bold">{filtered[0].category}</span>
              <h2 className="font-bold text-navy-900 text-lg mt-1 mb-2 group-hover:text-gold-600 transition-colors">{filtered[0].title}</h2>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>{filtered[0].author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{filtered[0].date}</span>
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{filtered[0].views.toLocaleString()}</span>
              </div>
              <button className="mt-4 flex items-center gap-1 text-sm text-gold-600 font-medium hover:text-gold-500">
                قراءة المقال <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Article list */}
        <div className="flex flex-col gap-3">
          {filtered.slice(1, 5).map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-3 group hover:shadow-md transition-shadow">
              <img src={article.image} alt={article.title} className="w-20 h-16 object-cover rounded-lg shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-gold-600 font-bold">{article.category}</span>
                <h3 className="text-sm font-semibold text-navy-900 line-clamp-2 leading-snug group-hover:text-gold-600 transition-colors">{article.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{article.views}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Remaining articles grid */}
      {filtered.length > 5 && (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.slice(5).map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
              <img src={article.image} alt={article.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <span className="text-[10px] text-gold-600 font-bold">{article.category}</span>
                <h3 className="font-bold text-navy-900 text-sm mt-1 line-clamp-2">{article.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                  <span>{article.author}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{article.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <button className="px-6 py-2.5 border border-navy-200 text-navy-800 text-sm font-medium rounded-xl hover:bg-navy-50 transition-colors">
          عرض المزيد من المقالات
        </button>
      </div>
    </div>
  );
}
