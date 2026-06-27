import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('جميع الأقسام');

  // الكبسولات وأزرار الأقسام أسفل مربع البحث مباشرة
  const departments = ["استكشف الأقسام", "القانون المدني", "القانون الجنائي", "المسطرة المدنية", "المسطرة الجنائية", "قانون الشغل"];

  // بطاقات الخدمات الثمانية الرئيسية بالمنتصف
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

  // قائمة القائمة الجانبية (أدوات سريعة)
  const sideTools = [
    { title: "البحث في القوانين", icon: "⚖️", path: "/laws-search" },
    { title: "البحث في الاجتهادات", icon: "🔍", path: "/judgments-search" },
    { title: "نماذج ومذكرات قانونية", icon: "📄", path: "/templates" },
    { title: "الأسئلة الشائعة", icon: "❓", path: "/faq" },
    { title: "المصطلحات القانونية", icon: "📖", path: "/terms" },
    { title: "التقويم القانوني", icon: "📅", path: "/calendar" },
  ];

  // بيانات المقالات والأخبار والندوات المدمجة حديثاً بالتصميم الأصلي
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

  // إحصائيات الشريط السفلي الفخم
  const stats = [
    { value: "+10", label: "سنوات من الخبرة", icon: "⏳" },
    { value: "+20", label: "أساتذة ومراجعون", icon: "🧑‍🏫" },
    { value: "+100K", label: "طالب ومستخدم", icon: "👥" },
    { value: "+150", label: "دورة تدريبية", icon: "📝" },
    { value: "+2000", label: "ملخص PDF", icon: "📄" },
    { value: "+5000", label: "مقال قانوني", icon: "✍️" },
  ];

  // تصفية حية ذكية بناءً على قيمة مدخلات البحث
  const filteredServices = mainServices.filter(s => s.title.includes(searchQuery) || s.desc.includes(searchQuery));
  const filteredArticles = articles.filter(a => a.title.includes(searchQuery));
  const filteredNews = news.filter(n => n.title.includes(searchQuery));
  const filteredSeminars = seminars.filter(sem => sem.title.includes(searchQuery) || sem.speaker.includes(searchQuery));

  return (
    <div className="w-full min-h-screen text-right font-['Tajawal'] bg-[#f8fafc] pb-12" dir="rtl">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        
        {/* 🏙️ الهيكل العلوي: البانر العريض والبطاقة الجانبية */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          
          {/* البانر الرئيسي الكبير (الخلفية والميزان ومربع البحث) */}
          <div className="col-span-1 lg:col-span-3 bg-[#0f172a] text-white p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
            
            <div className="relative z-10 max-w-2xl mt-4">
              <h1 className="text-2xl md:text-3xl font-black mb-3 text-white leading-tight">منصة متكاملة للطلاب والباحث القانوني</h1>
              <p className="text-slate-300 text-xs md:text-sm font-medium mb-8">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد</p>
              
              {/* محرك البحث الحي الفعال */}
              <div className="bg-white rounded-xl p-1.5 flex items-center shadow-xl max-w-xl border border-white/10">
                <button className="bg-[#b45309] hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg text-xs font-black shrink-0 transition-colors">
                  بحث
                </button>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن مقال، قانون، مادة قانونية..." 
                  className="w-full px-4 text-xs text-slate-800 outline-none bg-transparent text-right font-medium placeholder-slate-400"
                />
              </div>
            </div>

            {/* أزرار الكبسولات التفاعلية */}
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

          {/* القائمة الجانبية: الترحيب والاشتراك */}
          <div className="col-span-1 bg-[#0f172a] text-white p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-between min-h-[320px]">
            <div>
              <h3 className="font-black text-sm mb-1.5">مرحباً بك في أكاديمية القانون</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">سجل الدخول للاستفادة من جميع المميزات والخدمات</p>
            </div>
            
            <div className="flex flex-col gap-2.5 my-4">
              <a href="/login" className="w-full py-2.5 bg-[#b45309] hover:bg-amber-700 text-white text-center text-xs font-black rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">
                👤 تسجيل الدخول
              </a>
              <a href="/register" className="w-full py-2.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-200 text-center text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5">
                ➕ إنشاء حساب جديد
              </a>
            </div>
          </div>

        </div>

        {/* 🎴 قسم بطاقات الخدمات الثمانية المربعة بالأيقونات */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center mb-6">
          {filteredServices.map((service, idx) => (
            <a href={service.path} key={idx} className="group flex flex-col items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-sm mb-2 group-hover:scale-105 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all">
                {service.icon}
              </div>
              <span className="text-[11px] font-black text-slate-800 tracking-tight block group-hover:text-[#0f172a]">{service.title}</span>
              <span className="text-[9px] text-slate-400 block mt-0.5 group-hover:text-slate-500">{service.desc}</span>
            </a>
          ))}
        </div>

        {/* 📊 القسم السفلي: المحتوى الرئيسي الثلاثي + قائمة الأدوات السريعة */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          
          {/* الـ 3 صناديق الأساسية بالوسط واليسار */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* صندوق أحدث المقالات */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-black text-slate-900 text-xs">أحدث المقالات</h3>
                <a href="/articles" className="text-[10px] font-bold text-slate-400 hover:text-[#b45309]">عرض الكل</a>
              </div>
              <div className="flex flex-col gap-4">
                {filteredArticles.map((art, idx) => (
                  <div key={idx} className="flex gap-3 items-start group cursor-pointer">
                    <img src={art.img} alt="" className="w-14 h-11 object-cover rounded-lg bg-slate-100 shrink-0 border border-slate-100" />
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-black text-slate-800 group-hover:text-[#b45309] transition-colors leading-tight mb-1">{art.title}</h4>
                      <span className="text-[9px] text-slate-400 block">{art.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* صندوق آخر الأخبار القانونية */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-black text-slate-900 text-xs">آخر الأخبار القانونية</h3>
                <a href="/news" className="text-[10px] font-bold text-slate-400 hover:text-[#b45309]">عرض الكل</a>
              </div>
              <div className="flex flex-col gap-4">
                {filteredNews.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start group cursor-pointer">
                    <img src={item.img} alt="" className="w-14 h-11 object-cover rounded-lg bg-slate-100 shrink-0 border border-slate-100" />
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-black text-slate-800 group-hover:text-[#b45309] transition-colors leading-tight mb-1">{item.title}</h4>
                      <span className="text-[9px] text-slate-400 block">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* صندوق الندوات القادمة */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-black text-slate-900 text-xs">الندوات القادمة</h3>
                <a href="/seminars" className="text-[10px] font-bold text-slate-400 hover:text-[#b45309]">عرض الكل</a>
              </div>
              <div className="flex flex-col gap-3.5">
                {filteredSeminars.map((seminar, idx) => (
                  <div key={idx} className="border border-slate-100 p-2.5 rounded-xl flex items-center gap-3 hover:border-slate-200 transition-all cursor-pointer">
                    <div className="bg-[#0f172a] text-white rounded-xl w-11 h-11 flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="text-xs font-black leading-none">{seminar.day}</span>
                      <span className="text-[8px] text-amber-400 font-bold mt-0.5">{seminar.month}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-black text-slate-800 truncate mb-0.5">{seminar.title}</h4>
                      <p className="text-[9px] text-slate-400 flex items-center gap-1">👤 {seminar.speaker}</p>
                      <p className="text-[8px] text-slate-400 mt-0.5">🕒 {seminar.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* القائمة الجانبية المكملة: أدوات سريعة وبطاقة الاشتراك الرائعة */}
          <div className="col-span-1 flex flex-col gap-5">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#b45309] text-xs">⚙️</span>
                <h3 className="font-black text-slate-900 text-xs">أدوات سريعة</h3>
              </div>
              <div className="flex flex-col">
                {sideTools.map((tool, idx) => (
                  <a href={tool.path} key={idx} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0 text-slate-600 hover:text-[#0f172a] transition-colors group">
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm">{tool.icon}</span>
                      <span className="text-xs font-bold group-hover:translate-x-[-2px] transition-transform">{tool.title}</span>
                    </div>
                    <span className="text-slate-300 text-[10px]">←</span>
                  </a>
                ))}
              </div>
            </div>

            {/* بطاقة اشترك الآن الفاخرة أسفل اليمين */}
            <div className="bg-[#0f172a] text-white p-5 rounded-2xl text-center shadow-sm relative overflow-hidden">
              <h4 className="font-black text-xs text-amber-400 mb-1">👑 اشترك الآن</h4>
              <p className="text-slate-300 text-[10px] leading-relaxed mb-4">واحصل على محتوى حصري ومزايا لا محدودة للمنصة</p>
              <button className="w-full py-2 bg-[#b45309] hover:bg-amber-700 text-white font-black text-xs rounded-xl shadow transition-colors">
                اكتشف الباقات
              </button>
            </div>
          </div>

        </div>

        {/* 📈 شريط الإحصائيات الفاخرة الملونة السفلي بالكامل */}
        <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center border-l last:border-l-0 border-slate-100 px-2">
              <span className="text-xl mb-1">{stat.icon}</span>
              <span className="text-base font-black text-slate-900">{stat.value}</span>
              <span className="text-[10px] font-bold text-slate-400 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
