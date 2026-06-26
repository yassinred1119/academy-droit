import { useState } from 'react';
import { MessageSquare, Eye, Users, Plus, Search, ThumbsUp } from 'lucide-react';

const tabs = ['المنتدى', 'الأسئلة', 'المتابعة'];

const topics = [
  {
    id: 1,
    title: 'ساعة حول مبدأ مدونة الأسرة المغربية',
    category: 'قانون الأسرة',
    author: 'أمين المرابط',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    views: 1200,
    replies: 24,
    members: 8,
    date: '2024/10/19',
    tab: 'المنتدى',
  },
  {
    id: 2,
    title: 'إشكاليات تطبيق القانون الاصطناعي والقانون',
    category: 'القانون الجنائي',
    author: 'سارة المنصوري',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    views: 850,
    replies: 18,
    members: 5,
    date: '2024/10/18',
    tab: 'المنتدى',
  },
  {
    id: 3,
    title: 'في الاجتهاد القضائي في مجال قانون الشغل',
    category: 'قانون الشغل',
    author: 'يوسف العمراني',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    views: 1500,
    replies: 31,
    members: 12,
    date: '2024/10/17',
    tab: 'المنتدى',
  },
  {
    id: 4,
    title: 'ما هي شروط صحة عقد الزواج في مدونة الأسرة؟',
    category: 'قانون الأسرة',
    author: 'فاطمة الحسني',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    views: 2100,
    replies: 45,
    members: 0,
    date: '2024/10/16',
    tab: 'الأسئلة',
  },
  {
    id: 5,
    title: 'كيف يُحسب تعويض الفصل التعسفي؟',
    category: 'قانون الشغل',
    author: 'كريم البكري',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
    views: 1680,
    replies: 33,
    members: 0,
    date: '2024/10/14',
    tab: 'الأسئلة',
  },
];

const categories = ['كل التصنيفات', 'القانون المدني', 'القانون الجنائي', 'قانون الأسرة', 'قانون الشغل', 'القانون الدستوري'];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('المنتدى');
  const [activeCategory, setActiveCategory] = useState('كل التصنيفات');
  const [query, setQuery] = useState('');

  const filtered = topics.filter((t) => {
    const matchTab = t.tab === activeTab;
    const matchCat = activeCategory === 'كل التصنيفات' || t.category === activeCategory;
    const matchQ = !query || t.title.includes(query);
    return matchTab && matchCat && matchQ;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-extrabold text-navy-900 text-2xl mb-1">المجتمع القانوني</h1>
          <p className="text-gray-500 text-sm">تواصل وشارك مع زملائك والخبراء</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold rounded-xl transition-colors">
          <Plus className="w-4 h-4" />
          موضوع جديد
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
            <h3 className="font-bold text-navy-900 text-sm mb-3">التصنيفات</h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-right px-3 py-2 rounded-lg text-xs transition-colors ${
                      activeCategory === cat ? 'bg-navy-900 text-white font-medium' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-900 rounded-xl p-4 text-white">
            <Users className="w-6 h-6 text-gold-400 mb-2" />
            <h3 className="font-bold text-sm mb-1">انضم للمجتمع</h3>
            <p className="text-navy-300 text-xs mb-3 leading-relaxed">أكثر من 100K طالب وباحث</p>
            <button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 py-2 rounded-lg text-xs font-bold transition-colors">
              إنشاء حساب
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="flex gap-1 mb-4 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في المنتدى..."
              className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-400 bg-white"
            />
          </div>

          {/* Topics list */}
          <div className="space-y-3">
            {filtered.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-3">
                  <img src={topic.avatar} alt={topic.author} className="w-9 h-9 rounded-full object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-gold-100 text-gold-700 font-bold px-2 py-0.5 rounded-full">{topic.category}</span>
                      <span className="text-[10px] text-gray-400">{topic.date}</span>
                    </div>
                    <h3 className="font-bold text-navy-900 text-sm mb-2 group-hover:text-gold-600 transition-colors leading-snug">{topic.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                      <span className="font-medium text-gray-600">{topic.author}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{topic.views.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{topic.replies} رد</span>
                      {topic.members > 0 && (
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{topic.members} عضو</span>
                      )}
                      <button className="flex items-center gap-1 hover:text-gold-600 transition-colors mr-auto">
                        <ThumbsUp className="w-3 h-3" /> مفيد
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">لا توجد مواضيع مطابقة</p>
            </div>
          )}

          <div className="mt-5 text-center">
            <button className="px-6 py-2.5 border border-navy-200 text-navy-800 text-sm font-medium rounded-xl hover:bg-navy-50 transition-colors">
              عرض المزيد من المواضيع
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
