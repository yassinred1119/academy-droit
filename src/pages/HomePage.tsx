import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('جميع الأقسام');

  // أقسام التصفح السريع أسفل مربع البحث
  const departments = ["جميع الأقسام", "القانون المدني", "الجنائي الجنائية", "المسطرة الجنائية", "قانون الشغل", "استكشف الأقسام"];

  // قائمة الأدوات السريعة الجانبية (يمين الشاشة في الحاسوب)
  const sideTools = [
    { title: "البحث في القوانين", icon: "🔍", path: "/laws-search" },
    { title: "البحث في الاجتهادات", icon: "⚖️", path: "/judgments-search" },
    { title: "نماذج ومذكرات قانونية", icon: "📄", path: "/templates" },
    { title: "الأسئلة الشائعة", icon: "❓", path: "/faq" },
    { title: "المصطلحات القانونية", icon: "📖", path: "/terms" },
    { title: "التقويم القانوني", icon: "📅", path: "/calendar" },
  ];

  // أزرار الخدمات والبطاقات الرئيسية المنتصفية
  const mainServices = [
    { title: "الأكاديمية", desc: "دورات واختبارات", icon: "🎓", path: "/academy" },
    { title: "مكتبة القوانين", desc: "جميع القوانين المغربية", icon: "📖", path: "/library" },
    { title: "المقالات", desc: "مقالات قانونية موثوقة", icon: "📄", path: "/articles" },
    { title: "الملخصات", desc: "ملخصات شاملة", icon: "⚖️", path: "/summaries" },
    { title: "المساعد القانوني", desc: "ذكاء اصطناعي قانوني", icon: "🤖", path: "/assistant" },
    { title: "الندوات", desc: "ندوات ومحاضرات", icon: "🎥", path: "/seminars" },
    { title: "الأخبار", desc: "آخر أخبار القانون", icon: "📰", path: "/news" },
    { title: "قوالب الكتابة", desc: "مقالات وبحوث جاهزة", icon: "✒️", path: "/writing" },
  ];

  // داتا الأقسام السفلية
  const articles = [
    { title: "شرح الفصل 378 من القانون الجنائي المغربي", date: "24 ماي 2024", category: "القانون الجنائي" },
    { title: "التمييز بين المسؤولية العقدية والمسؤولية التقصيرية", date: "22 ماي 2024", category: "القانون المدني" },
  ];

  const news = [
    { title: "صدور قانون رقم 02.23 المتعلق بالمسطرة المدنية", date: "25 ماي 2024", source: "الأمانة العامة" },
    { title: "المجلس الأعلى يصدر قرارات جديدة حول الاجتهاد القضائي", date: "23 ماي 2024", source: "محكمة النقض" },
  ];

  const seminars = [
    { title: "الذكاء الاصطناعي والقانون", speaker: "د. محمد الكناني", time: "20:00 - 18:00", day: "28", month: "ماي" },
    { title: "قراءة في مستجدات القانون الجنائي", speaker: "د. فاطمة الزهراء", time: "20:00 - 18:00", day: "05", month: "يونيو" },
  ];

  // تصفية العناصر بناءً على النص المكتوب في خانة البحث (البحث الحي الحقيقي)
  const filteredServices = mainServices.filter(s => s.title.includes(searchQuery) || s.desc.includes(searchQuery));
  const filteredArticles = articles.filter(a => a.title.includes(searchQuery) || a.category.includes(searchQuery));
  const filteredNews = news.filter(n => n.title.includes(searchQuery));
  const filteredSeminars = seminars.filter(sem => sem.title.includes(searchQuery) || sem.speaker.includes(searchQuery));
  const filteredSideTools = sideTools.filter(t => t.title.includes(searchQuery));

  return (
    <div className="w-full min-h-screen text-right font-['Tajawal'] bg-[#f8fafc]" dir="rtl">
      
      {/* 🏛️ 1. الشريط العلوي الملكي الممتاز (Navbar) */}
      <header className="w-full bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* اليمين: اللوجو واسم الأكاديمية */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center text-xl shadow-inner">⚖️</div>
            <div>
              <span className="font-black text-base block tracking-wide">أكاديمية القانون</span>
              <span className="text-[10px] text-amber-400 block -mt-1 font-medium">منصة القانون المغربي الأولى</span>
            </div>
          </div>

          {/* المنتصف: أزرار القائمة الرئيسية */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-200">
            <a href="/" className="text-amber-400 border-b-2 border-amber-400 pb-1">الرئيسية</a>
            <a href="/academy" className="hover:text-white transition-colors">الأكاديمية</a>
            <a href="/library" className="hover:text-white transition-colors">مكتبة القوانين</a>
            <a href="/articles" className="hover:text-white transition-colors">المقالات</a>
            <a href="/summaries" className="hover:text-white transition-colors">الملخصات</a>
            <a href="/seminars" className="hover:text-white transition-colors">الندوات</a>
            <a href="/news" className="hover:text-white transition-colors">الأخبار</a>
            <div className="relative group cursor-pointer">
              <span className="hover:text-white flex items-center gap-0.5">المزيد ▾</span>
            </div>
          </nav>

          {/* اليسار: أزرار تسجيل الدخول وإنشاء حساب والأيقونات */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-800 rounded-lg text-sm text-slate-300">🌙</button>
            <button className="p-2 hover:bg-slate-800 rounded-lg text-sm text-slate-300 relative">🔔<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <a href="/login" className="hidden sm:inline-block text-xs font-bold text-slate-300 hover:text-white px-3 py-2">تسجيل الدخول</a>
            <a href="/register" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-4 py-2 rounded-xl transition-colors shadow-md">
              ✨ إنشاء حساب
            </a>
          </div>
        </div>
      </header>

      {/* 🗂️ 2. الهيكل الرئيسي للموقع المقسم إلى أعمدة (Grid Layout) */}
      <main className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* العمود الأيمن: الترحيب والأدوات السريعة الجانبية */}
        <div className="col-span-1 flex flex-col gap-5">
          
          {/* بطاقة الترحيب وتسجيل الدخول */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
            <h3 className="font-black text-slate-900 text-sm mb-1">مرحباً بك في أكاديمية القانون</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed mb-4">سجل الدخول للاستفادة من جميع الميزات والخدمات الحصرية للمنصة.</p>
            <div className="flex flex-col gap-2">
              <a href="/login" className="w-full py-2.5 bg-[#0f172a] hover:bg-slate-800 text-white text-center text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5">
                👤 تسجيل الدخول
              </a>
              <a href="/register" className="w-full py-2.5 bg-white border border-slate-200 text-slate-700 text-center text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5">
                ➕ إنشاء حساب جديد
              </a>
            </div>
          </div>

          {/* بطاقة الأدوات السريعة العمودية المتطابقة مع الصورة */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-500 text-sm">🎛️</span>
              <h3 className="font-black text-slate-900 text-xs">أدوات سريعة</h3>
            </div>
            <div className="flex flex-col">
              {filteredSideTools.map((tool, idx) => (
                <a href={tool.path} key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 text-slate-600 hover:text-[#0f172a] transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="text-base">{tool.icon}</span>
                    <span className="text-xs font-bold group-hover:translate-x-[-2px] transition-transform">{tool.title}</span>
                  </div>
                  <span className="text-slate-300 text-xs font-mono">←</span>
                </a>
              ))}
              {filteredSideTools.length === 0 && <p className="text-center text-slate-400 text-[11px] py-4">لا توجد أدوات مطابقة للبحث</p>}
            </div>
          </div>
        </div>

        {/* الأعمدة الثلاثة المتبقية (الوسط واليسار): البانر والبطاقات الكبيرة والأقسام */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
          
          {/* 🏙️ البانر الرئيسي الفخم الفوقي والبحث */}
          <div className="w-full bg-gradient-to-l from-[#0f172a] via-[#111827] to-[#1f2937] text-white p-8 md:p-10 rounded-2xl shadow-md relative overflow-hidden min-h-[260px] flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">منصة متكاملة للطالب والباحث القانوني</h1>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-medium">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد من محاضرات وملخصات متميزة.</p>
              
              {/* شريط البحث التفاعلي الفاخر العريض */}
              <div className="bg-white rounded-xl p-1.5 flex items-center shadow-xl max-w-2xl border border-white/20">
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2.5 rounded-lg text-xs font-black shrink-0 transition-colors flex items-center gap-1.5 shadow-sm">
                  🔍 بحث
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
            
            {/* الكبسولات السريعة أسفل خانة البحث مباشرة */}
            <div className="relative z-10 flex items-center gap-2 mt-4 overflow-x-auto scrollbar-hide pt-2">
              {departments.map((dept, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${selectedDept === dept ? 'bg-amber-500 text-slate-950 shadow-sm' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* 🎴 بطاقات الخدمات المركزية الثمانية (8 الأيقونات الكبيرة بالمنصف) */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {filteredServices.map((service, idx) => (
              <a href={service.path} key={idx} className="group flex flex-col items-center p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-sm mb-2 group-hover:scale-105 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all">
                  {service.icon}
                </div>
                <span className="text-[11px] font-black text-slate-800 tracking-tight block group-hover:text-[#0f172a]">{service.title}</span>
                <span className="text-[9px] text-slate-400 block mt-0.5 group-hover:text-slate-500">{service.desc}</span>
              </a>
            ))}
            {filteredServices.length === 0 && <p className="col-span-full text-center text-slate-400 text-xs py-4">لا توجد خدمات مطابقة لبحثك</p>}
          </div>

          {/* 📊 الأقسام الثلاثة المنسقة بالأسفل (المقالات، الأخبار، الندوات القادمة) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* صندوق المقالات الأحدث */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-black text-slate-900 text-xs flex items-center gap-1.5">⚖️ أحدث المقالات</h3>
                  <a href="/articles" className="text-[10px] font-bold text-amber-500 hover:underline">عرض الكل ←</a>
                </div>
                <div className="flex flex-col gap-4">
                  {filteredArticles.map((art, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <span className="text-[9px] bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded font-black tracking-wide">{art.category}</span>
                      <h4 className="text-xs font-black text-slate-800 group-hover:text-amber-500 transition-colors mt-1 leading-snug">{art.title}</h4>
                      <span className="text-[9px] text-slate-400 block mt-0.5">{art.date}</span>
                    </div>
                  ))}
                  {filteredArticles.length === 0 && <p className="text-center text-slate-400 text-xs py-4">لا توجد مقالات مطابقة</p>}
                </div>
              </div>
            </div>

            {/* صندوق آخر الأخبار القانونية */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-black text-slate-900 text-xs flex items-center gap-1.5">📰 آخر الأخبار القانونية</h3>
                  <a href="/news" className="text-[10px] font-bold text-amber-500 hover:underline">عرض الكل ←</a>
                </div>
                <div className="flex flex-col gap-4">
                  {filteredNews.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <h4 className="text-xs font-black text-slate-800 group-hover:text-amber-500 transition-colors leading-snug">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] text-slate-400">{item.date}</span>
                        <span className="text-[9px] text-slate-300">•</span>
                        <span className="text-[9px] text-slate-400">{item.source}</span>
                      </div>
                    </div>
                  ))}
                  {filteredNews.length === 0 && <p className="text-center text-slate-400 text-xs py-4">لا توجد أخبار مطابقة</p>}
                </div>
              </div>
            </div>

            {/* صندوق الندوات والمحاضرات القادمة مع بطاقات التواريخ والعداد الزمني */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <h3 className="font-black text-slate-900 text-xs flex items-center gap-1.5">🎥 الندوات القادمة</h3>
                <a href="/seminars" className="text-[10px] font-bold text-amber-500 hover:underline">عرض الكل ←</a>
              </div>
              <div className="flex flex-col gap-3.5">
                {filteredSeminars.map((seminar, idx) => (
                  <div key={idx} className="border border-slate-100 p-2.5 rounded-xl flex items-center gap-3 hover:border-slate-200 transition-all cursor-pointer">
                    <div className="bg-[#0f172a] text-white rounded-xl w-12 h-12 flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="text-sm font-black leading-none">{seminar.day}</span>
                      <span className="text-[9px] text-amber-400 font-bold mt-0.5">{seminar.month}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-black text-slate-800 truncate mb-0.5">{seminar.title}</h4>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1">👤 {seminar.speaker}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5">🕒 {seminar.time}</p>
                    </div>
                  </div>
                ))}
                {filteredSeminars.length === 0 && <p className="text-center text-slate-400 text-xs py-4">لا توجد ندوات مطابقة</p>}
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* 👑 شريط التذييل (Footer) */}
      <footer className="w-full bg-[#0f172a] text-slate-400 text-center py-4 border-t border-slate-800 text-[11px] mt-12">
        جميع الحقوق محفوظة © أكاديمية القانون المغربي الباحث القانوني الأول 2026
      </footer>

    </div>
  );
}
