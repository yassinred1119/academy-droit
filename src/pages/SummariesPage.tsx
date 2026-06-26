import { useState } from 'react';
import { Search, Download, FileText, ChevronLeft } from 'lucide-react';

const yearTabs = ['الأحدث', 'السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'السنة الرابعة'];

const subjects = [
  { id: 1, title: 'القانون المدني — الجزء الأول', description: 'الأحكام العامة للالتزامات والعقود', year: 'السنة الأولى', pages: 85, downloads: 4200, image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: true },
  { id: 2, title: 'القانون الدستوري', description: 'النظام الدستوري المغربي وتطوره التاريخي', year: 'السنة الأولى', pages: 60, downloads: 3100, image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: true },
  { id: 3, title: 'المسطرة الجنائية', description: 'إجراءات التقاضي في المادة الجنائية', year: 'السنة الثانية', pages: 110, downloads: 2800, image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: false },
  { id: 4, title: 'قانون الشغل', description: 'أحكام مدونة الشغل المغربية', year: 'السنة الثانية', pages: 95, downloads: 3500, image: 'https://images.pexels.com/photos/1575937/pexels-photo-1575937.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: false },
  { id: 5, title: 'القانون الجنائي الخاص', description: 'الجرائم الواردة في القسم الخاص من القانون الجنائي', year: 'السنة الثالثة', pages: 130, downloads: 2200, image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: false },
  { id: 6, title: 'القانون التجاري', description: 'أحكام مدونة التجارة والشركات', year: 'السنة الثالثة', pages: 105, downloads: 1900, image: 'https://images.pexels.com/photos/5668853/pexels-photo-5668853.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: false },
  { id: 7, title: 'القانون الدولي الخاص', description: 'تنازع القوانين والاختصاص القضائي الدولي', year: 'السنة الرابعة', pages: 88, downloads: 1600, image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: false },
  { id: 8, title: 'القانون الإداري', description: 'التنظيم الإداري والرقابة القضائية', year: 'السنة الرابعة', pages: 92, downloads: 1750, image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&fit=crop', free: false },
];

export default function SummariesPage() {
  const [activeYear, setActiveYear] = useState('الأحدث');
  const [query, setQuery] = useState('');

  const filtered = subjects.filter((s) => {
    const matchYear = activeYear === 'الأحدث' || s.year === activeYear;
    const matchQ = !query || s.title.includes(query);
    return matchYear && matchQ;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="font-extrabold text-navy-900 text-2xl mb-1">الملخصات</h1>
        <p className="text-gray-500 text-sm">ملخصات شاملة لجميع مواد القانون</p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن ملخص..."
          className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-400 bg-white"
        />
      </div>

      {/* Year tabs */}
      <div className="flex gap-2 flex-wrap mb-6 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
        {yearTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveYear(tab)}
            className={`px-5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeYear === tab ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Subjects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((subject) => (
          <div key={subject.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative">
              <img src={subject.image} alt={subject.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-2 right-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${subject.free ? 'bg-green-500 text-white' : 'bg-gold-500 text-navy-900'}`}>
                  {subject.free ? 'مجاني' : 'مدفوع'}
                </span>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="text-[10px] bg-black/50 text-white px-2 py-0.5 rounded-full">{subject.year}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-navy-900 text-sm mb-1 line-clamp-2 group-hover:text-gold-600 transition-colors">{subject.title}</h3>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{subject.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{subject.pages} صفحة</span>
                <span className="flex items-center gap-1"><Download className="w-3 h-3" />{subject.downloads.toLocaleString()} تحميل</span>
              </div>
              <button className="w-full py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
                {subject.free ? 'تحميل مجاني' : 'تحميل الملخص'} <ChevronLeft className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">لا توجد ملخصات مطابقة</p>
        </div>
      )}
    </div>
  );
}
