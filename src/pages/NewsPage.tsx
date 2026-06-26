import { useState } from 'react';
import { Search, Eye, Calendar, ChevronLeft, Newspaper } from 'lucide-react';

const categories = ['الكل', 'التشريع', 'القضاء', 'الفقه', 'قانون الشغل', 'قانون الأعمال'];

const news = [
  { id: 1, title: 'المشاركة في مشروع قانون المسطرة الجنائية الجديد', category: 'التشريع', date: '2024/10/19', views: 2400, image: 'https://images.pexels.com/photos/5668853/pexels-photo-5668853.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop', featured: true, summary: 'أعلنت وزارة العدل عن إطلاق مشروع قانون جديد يتعلق بالمسطرة الجنائية يشمل إصلاحات جوهرية في منظومة التقاضي الجنائي.' },
  { id: 2, title: 'تعديل بعض مقتضيات قانون الشغل المغربي', category: 'قانون الشغل', date: '2024/10/16', views: 1890, image: 'https://images.pexels.com/photos/1575937/pexels-photo-1575937.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false, summary: '' },
  { id: 3, title: 'المجلس الأعلى يصدر قرارات جديدة حول الاجتهاد القضائي', category: 'القضاء', date: '2024/10/14', views: 1560, image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false, summary: '' },
  { id: 4, title: 'قدم حكم فقهي جديد حول عقود الإذعان', category: 'الفقه', date: '2024/10/12', views: 980, image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false, summary: '' },
  { id: 5, title: 'إصلاح منظومة الاستثمار: مراجعة قانون الشركات', category: 'قانون الأعمال', date: '2024/10/10', views: 2100, image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false, summary: '' },
  { id: 6, title: 'صدور قانون رقم 02.23 المتعلق بالمسطرة المدنية', category: 'التشريع', date: '2024/10/08', views: 3200, image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', featured: false, summary: '' },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [query, setQuery] = useState('');

  const filtered = news.filter((n) => {
    const matchCat = activeCategory === 'الكل' || n.category === activeCategory;
    const matchQ = !query || n.title.includes(query);
    return matchCat && matchQ;
  });

  const featured = filtered.find((n) => n.featured) || filtered[0];
  const rest = filtered.filter((n) => n.id !== (featured?.id ?? -1));

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="font-extrabold text-navy-900 text-2xl mb-1">آخر أخبار القانون</h1>
        <p className="text-gray-500 text-sm">أحدث المستجدات والتطورات القانونية</p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث في الأخبار..."
          className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-400 bg-white"
        />
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-6 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === cat ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {featured && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          {/* Featured */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={featured.image} alt={featured.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">عاجل</span>
            </div>
            <div className="p-5">
              <span className="text-[11px] text-gold-600 font-bold">{featured.category}</span>
              <h2 className="font-bold text-navy-900 text-xl mt-1 mb-2 group-hover:text-gold-600 transition-colors">{featured.title}</h2>
              {featured.summary && <p className="text-sm text-gray-500 mb-3 leading-relaxed">{featured.summary}</p>}
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{featured.views.toLocaleString()}</span>
              </div>
              <button className="mt-4 flex items-center gap-1 text-sm text-gold-600 font-medium hover:text-gold-500">
                قراءة التفاصيل <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Side news list */}
          <div className="flex flex-col gap-3">
            {rest.slice(0, 4).map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex gap-3 group hover:shadow-md transition-shadow">
                <img src={item.image} alt={item.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-gold-600 font-bold">{item.category}</span>
                  <h3 className="text-xs font-semibold text-navy-900 line-clamp-2 leading-snug group-hover:text-gold-600 transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-400">
                    <span className="flex items-center gap-0.5"><Eye className="w-2.5 h-2.5" />{item.views}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rest of news */}
      {rest.length > 4 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.slice(4).map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <span className="text-[10px] text-gold-600 font-bold">{item.category}</span>
                <h3 className="font-bold text-navy-900 text-sm mt-1 line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Newspaper className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">لا توجد أخبار مطابقة</p>
        </div>
      )}
    </div>
  );
}
