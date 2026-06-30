import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('جميع الأقسام');

  // إدارة حالة جلب البيانات من Supabase
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select('*');

        if (error) {
          console.error('خطأ مسترجع من Supabase:', error.message);
        } else {
          setCourses(data || []);
        }
      } catch (err) {
        console.error('خطأ غير متوقع:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const departments = ["استكشف الأقسام", "القانون المدني", "القانون الجنائي", "المسطرة المدنية", "المسطرة الجنائية", "قانون الشغل"];

  const mainServices = [
    { title: "قوالب الكتابة", desc: "مقالات وبحوث جاهزة", icon: "✒️", path: "/writing" },
    { title: "الأخبار", desc: "آخر أخبار القانون", icon: "📰", path: "/news" },
    { title: "الندوات", desc: "ندوات ومحاضرات", icon: "🎥", path: "/seminars" },
    { title: "المساعد القانوني", desc: "ذكاء اصطناعي قانوني", icon: "🤖", path: "/assistant" },
    { title: "الملخصات", desc: "ملخصات شاملة", icon: "⚖️", path: "/summaries" },
    { title: "المقالات", desc: "مقالات قانونية موثوقة", icon: "📄", path: "/articles" },
    { title: "مكتبة القوانين", desc: "جميع القوانين المغربية", icon: "📖", path: "/library" },
    { title: "الأكاديمية", desc: "دورات واختبارات", icon: "🎓", path: "/academy" },
  ];

  const sideTools = [
    { title: "البحث في القوانين", icon: "⚖️", path: "/laws-search" },
    { title: "البحث في الاجتهادات", icon: "🔍", path: "/judgments-search" },
    { title: "نماذج ومذكرات قانونية", icon: "📄", path: "/templates" },
    { title: "الأسئلة الشائعة", icon: "❓", path: "/faq" },
    { title: "المصطلحات القانونية", icon: "📖", path: "/terms" },
    { title: "التقويم القانوني", icon: "📅", path: "/calendar" },
  ];

  const articles = [
    { title: "شرح الفصل 378 من القانون الجنائي المغربي", date: "24 ماي 2024", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=150&auto=format&fit=crop&q=60" },
    { title: "التمييز بين المسؤولية العقدية والمسؤولية التقصيرية", date: "22 ماي 2024", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=150&auto=format&fit=crop&q=60" },
    { title: "بطلان عقد الزواج في القانون المغربي", date: "20 ماي 2024", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=150&auto=format&fit=crop&q=60" }
  ];

  const news = [
    { title: "صدور قانون رقم 02.23 المتعلق بالمسطرة المدنية", date: "25 ماي 2024", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=60" },
    { title: "المجلس الأعلى يصدر قرارات جديدة حول الاجتهاد القضائي", date: "23 ماي 2024", img: "https://images.unsplash.com/photo-1575505586569-646b2ca09852?w=150&auto=format&fit=crop&q=60" },
    { title: "تعديل بعض مقتضيات قانون الشغل المغربي", date: "21 ماي 2024", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=150&auto=format&fit=crop&q=60" }
  ];

  const seminars = [
    { title: "الذكاء الاصطناعي والقانون", speaker: "د. محمد الكناني", time: "18:00 - 20:00", day: "28", month: "ماي" },
    { title: "قراءة في مستجدات القانون الجنائي", speaker: "د. فاطمة الزهراء", time: "18:00 - 20:00", day: "05", month: "يونيو" },
    { title: "حماية المعطيات الشخصية في القانون المغربي", speaker: "د. يوسف السلاوي", time: "18:00 - 20:00", day: "12", month: "يونيو" }
  ];

  const stats = [
    { value: "+10", label: "سنوات من الخبرة", icon: "⏳" },
    { value: "+20", label: "أساتذة ومراجعون", icon: "🧑‍🏫" },
    { value: "+100K", label: "طالب ومستخدم", icon: "👥" },
    { value: "+150", label: "دورة تدريبية", icon: "📝" },
    { value: "+2000", label: "ملخص PDF", icon: "📄" },
    { value: "+5000", label: "مقال قانوني", icon: "✍️" },
  ];

  const filteredServices = mainServices.filter(s => (s.title || '').includes(searchQuery) || (s.desc || '').includes(searchQuery));
  const filteredArticles = articles.filter(a => (a.title || '').includes(searchQuery));
  const filteredNews = news.filter(n => (n.title || '').includes(searchQuery));
  const filteredSeminars = seminars.filter(sem => (sem.title || '').includes(searchQuery) || (sem.speaker || '').includes(searchQuery));
  
  const filteredCourses = courses.filter(c => 
    (c.title || '').includes(searchQuery) || 
    (c.description || '').includes(searchQuery) || 
    (c.instructor || '').includes(searchQuery)
  );

  return (
    <div className="w-full min-h-screen text-right font-['Tajawal'] bg-[#f8fafc] pb-12" dir="rtl">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        
        {/* البانر والاشتراك */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="col-span-1 lg:col-span-3 bg-[#0f172a] text-white p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-2xl mt-4">
              <h1 className="text-2xl md:text-3xl font-black mb-3 text-white leading-tight">منصة متكاملة للطلاب والباحث القانوني</h1>
              <p className="text-slate-300 text-xs md:text-sm font-medium mb-8">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد</p>
              <div className="bg-white rounded-xl p-1.5 flex items-center shadow-xl max-w-xl border border-white/10">
                <button className="bg-[#b45309] hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg text-xs font-black shrink-0 transition-colors">بحث</button>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن مقال، قانون، مادة قانونية..." 
                  className="w-full px-4 text-xs text-slate-800 outline-none bg-transparent text-right font-medium placeholder-slate-400"
                />
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-2 overflow-x-auto scrollbar-hide pt-4">
              {departments.map((dept, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setSelectedDept(dept);
                    if(dept !== "استكشف الأقسام") setSearchQuery(dept);
                    else setSearchQuery('');
                  }}
                  className={`px-4 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border ${selectedDept === dept ? 'bg-[#b45309] border-[#b45309] text-white shadow-sm' : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border-slate-700/50'}`}
                >
                  {dept === "استكشف الأقسام" ? `🔍 ${dept}` : dept}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1 bg-[#0f172a] text-white p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between min-h-[320px]">
            <div>
              <h3 className="font-black text-sm mb-1.5">مرحباً بك في أكاديمية القانون</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">سجل الدخول للاستفادة من جميع المميزات والخدمات</p>
            </div>
            <div className="flex flex-col gap-2.5 my-4">
              <a href="/login" className="w-full py-2.5 bg-[#b45309] hover:bg-amber-700 text-white text-center text-xs font-black rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">👤 تسجيل الدخول</a>
              <a href="/register" className="w-full py-2.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-200 text-center text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5">➕ إنشاء حساب جديد</a>
            </div>
          </div>
        </div>

        {/* كروت الخدمات */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center mb-6">
          {filteredServices.map((service, idx) => (
            <a href={service.path} key={idx} className="group flex flex-col items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-sm mb-2 group-hover:scale-105 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all">
                {service.icon}
              </div>
              <span className="text-[11px] font-black text-slate-800 tracking-tight block">{service.title}</span>
            </a>
          ))}
        </div>

        {/* عرض المواد من Supabase */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-50 pb-3">
            <span className="text-xl">📚</span>
            <h3 className="font-black text-slate-900 text-sm">المواد القانونية المتاحة (قاعدة البيانات)</h3>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#b45309] mb-2"></div>
              <p className="text-slate-400 text-xs">جاري تحميل المحتوى من السحابة...</p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <p className="text-center text-slate-400 text-xs py-6">لا توجد مواد دراسية مسجلة في قاعدة البيانات حالياً.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {filteredCourses.map((course, index) => (
                <div key={course.id || index} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 mb-1.5">{course.title || 'مادة بدون عنوان'}</h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed mb-4">{course.description || 'لا يوجد وصف متاح.'}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2.5 border-t border-slate-200/60 mt-auto">
                    <span className="text-[10px] bg-amber-50 text-[#b45309] font-bold px-2.5 py-1 rounded-md">
                      👨‍🏫 {course.instructor || 'أستاذ المادة'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* الأقسام الجانبية والمقالات */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-black text-slate-900 text-xs mb-4 pb-2 border-b">أحدث المقالات</h3>
              <div className="flex flex-col gap-4">
                {filteredArticles.map((art, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <img src={art.img} alt="" className="w-12 h-10 object-cover rounded-lg shrink-0" />
                    <h4 className="text-[11px] font-black text-slate-800 truncate">{art.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-black text-slate-900 text-xs mb-4 pb-2 border-b">آخر الأخبار</h3>
              <div className="flex flex-col gap-4">
                {filteredNews.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <img src={item.img} alt="" className="w-12 h-10 object-cover rounded-lg shrink-0" />
                    <h4 className="text-[11px] font-black text-slate-800 truncate">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-black text-slate-900 text-xs mb-4 pb-2 border-b">الندوات القادمة</h3>
              <div className="flex flex-col gap-3">
                {filteredSeminars.map((seminar, idx) => (
                  <div key={idx} className="border border-slate-50 p-2 rounded-lg">
                    <h4 className="text-[11px] font-black text-slate-800 truncate">{seminar.title}</h4>
                    <p className="text-[9px] text-slate-400">👤 {seminar.speaker}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-5">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
              <h3 className="font-black text-slate-900 text-xs mb-3">⚙️ أدوات سريعة</h3>
              <div className="flex flex-col">
                {sideTools.map((tool, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0 text-slate-600 text-xs font-bold">
                    <span>{tool.icon} {tool.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-base font-black text-slate-900">{stat.value}</span>
              <span className="text-[10px] font-bold text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}