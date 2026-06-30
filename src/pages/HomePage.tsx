import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('جميع الأقسام');
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const { data, error } = await supabase.from('courses').select('*');
        if (error) {
          console.error('خطأ Supabase:', error.message);
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
    { title: "التمييز بين المسؤولية العقدية والمسؤولية التقصيرية", date: "22 ماي 2024", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=150&auto=format&fit=crop&q=60" }
  ];

  const news = [
    { title: "صدور قانون رقم 02.23 المتعلق بالمسطرة المدنية", date: "25 ماي 2024", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=60" }
  ];

  const seminars = [
    { title: "الذكاء الاصطناعي والقانون", speaker: "د. محمد الكناني", time: "18:00 - 20:00", day: "28", month: "ماي" }
  ];

  const stats = [
    { value: "+10", label: "سنوات من الخبرة", icon: "⏳" },
    { value: "+20", label: "أساتذة ومراجعون", icon: "🧑‍🏫" },
    { value: "+100K", label: "طالب ومستخدم", icon: "👥" }
  ];

  const filteredServices = mainServices.filter(s => (s.title || '').includes(searchQuery));
  const filteredCourses = courses.filter(c => (c.title || '').includes(searchQuery) || (c.instructor || '').includes(searchQuery));

  return (
    <div className="w-full min-h-screen text-right font-['Tajawal'] bg-[#f8fafc] pb-12" dir="rtl">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        
        {/* البانر والترحيب */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="col-span-1 lg:col-span-3 bg-[#0f172a] text-white p-8 rounded-2xl relative overflow-hidden min-h-[280px] flex flex-col justify-between">
            <div className="relative z-10">
              <h1 className="text-xl md:text-2xl font-black mb-2">منصة متكاملة للطلاب والباحث القانوني</h1>
              <p className="text-slate-300 text-xs mb-6">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد</p>
              <div className="bg-white rounded-xl p-1 flex items-center max-w-xl">
                <button className="bg-[#b45309] text-white px-5 py-2 rounded-lg text-xs font-black">بحث</button>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن مادة قانونية..." 
                  className="w-full px-3 text-xs text-slate-800 outline-none text-right"
                />
              </div>
            </div>
            <div className="relative z-10 flex gap-2 overflow-x-auto pt-4">
              {departments.map((dept, idx) => (
                <button 
                  key={idx}
                  onClick={() => { setSelectedDept(dept); setSearchQuery(dept === "استكشف الأقسام" ? "" : dept); }}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold border ${selectedDept === dept ? 'bg-[#b45309] text-white' : 'bg-slate-800 text-slate-200 border-slate-700'}`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1 bg-[#0f172a] text-white p-6 rounded-2xl flex flex-col justify-between">
            <h3 className="font-black text-xs">مرحباً بك في أكاديمية القانون</h3>
            <div className="flex flex-col gap-2 my-2">
              <button className="w-full py-2 bg-[#b45309] text-white text-xs font-black rounded-lg">👤 تسجيل الدخول</button>
            </div>
          </div>
        </div>

        {/* كروت الخدمات السريعة */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center mb-6">
          {filteredServices.map((service, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-slate-50">
              <div className="text-lg mb-1">{service.icon}</div>
              <span className="text-[10px] font-black text-slate-800">{service.title}</span>
            </div>
          ))}
        </div>

        {/* قسم الإحصائيات الفخم المعروض بشكل آمن وسليم */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="text-right">
                <p className="text-slate-500 text-[11px] font-bold mb-1">{stat.label}</p>
                <h4 className="text-xl font-black text-[#0f172a]">{stat.value}</h4>
              </div>
              <div className="text-2xl bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* عرض المواد الحية المجلوبة من Supabase */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6">
          <h3 className="font-black text-slate-900 text-xs mb-4 pb-2 border-b">📚 المواد القانونية المتوفرة حالياً</h3>
          
          {loading ? (
            <p className="text-center text-slate-400 text-xs">جاري جلب البيانات السحابية...</p>
          ) : filteredCourses.length === 0 ? (
            <p className="text-center text-slate-400 text-xs">لا توجد مواد تطابق البحث حالياً.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredCourses.map((course, index) => (
                <div key={course.id || index} className="border border-slate-100 p-4 rounded-xl bg-slate-50 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-black text-slate-900 mb-1">{course.title}</h4>
                    <p className="text-slate-600 text-[10px] leading-relaxed mb-3">{course.description}</p>
                  </div>
                  <span className="text-[9px] bg-amber-50 text-[#b45309] font-bold px-2 py-0.5 rounded self-start">
                    👨‍🏫 {course.instructor}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* المقالات والأدوات السريعة */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100">
              <h3 className="font-black text-slate-900 text-xs mb-3 pb-1 border-b">أحدث المقالات</h3>
              {articles.map((art, i) => <p key={i} className="text-[10px] text-slate-700 py-1">📄 {art.title}</p>)}
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100">
              <h3 className="font-black text-slate-900 text-xs mb-3 pb-1 border-b">آخر الأخبار</h3>
              {news.map((n, i) => <p key={i} className="text-[10px] text-slate-700 py-1">📰 {n.title}</p>)}
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100">
              <h3 className="font-black text-slate-900 text-xs mb-3 pb-1 border-b">الندوات</h3>
              {seminars.map((s, i) => <p key={i} className="text-[10px] text-slate-700 py-1">🎥 {s.title}</p>)}
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-2xl border border-slate-100">
            <h3 className="font-black text-slate-900 text-xs mb-2">⚙️ أدوات سريعة</h3>
            {sideTools.map((t, i) => <p key={i} className="text-[10px] text-slate-600 py-1">{t.icon} {t.title}</p>)}
          </div>
        </div>

      </div>
    </div>
  );
}