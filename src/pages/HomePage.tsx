```react
import { useState } from 'react';
import { Link } from '../router';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  // 📝 البيانات الثابتة للأدوات السريعة كما في التصميم الأصلي
  const quickTools = [
    { title: "الأكاديمية", desc: "دورات واختبارات", path: "/academy", icon: "🎓", bg: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400" },
    { title: "مكتبة القوانين", desc: "جميع القوانين المغربية", path: "/library", icon: "📖", bg: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400" },
    { title: "المقالات", desc: "مقالات قانونية موثوقة", path: "/articles", icon: "📄", bg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" },
    { title: "الملخصات", desc: "ملخصات شاملة", path: "/summaries", icon: "⚖️", bg: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400" },
    { title: "المساعد القانوني", desc: "ذكاء اصطناعي قانوني", path: "/assistant", icon: "🤖", bg: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400" },
    { title: "الندوات", desc: "ندوات ومحاضرات", path: "/seminars", icon: "🎥", bg: "bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400" },
    { title: "الأخبار", desc: "آخر أخبار القانون", path: "/news", icon: "📰", bg: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400" },
    { title: "قوالب الكتابة", desc: "مقالات وبحوث جاهزة", path: "/writing", icon: "✒️", bg: "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400" },
  ];

  // 📝 البيانات الثابتة لأحدث المقالات
  const articles = [
    { title: "شرح الفصل 378 من القانون الجنائي المغربي", date: "24 ماي 2024", category: "القانون الجنائي" },
    { title: "التمييز بين المسؤولية العقدية والمسؤولية التقصيرية", date: "22 ماي 2024", category: "القانون المدني" },
  ];

  // 📝 البيانات الثابتة لأخبار القانون
  const news = [
    { title: "صدور قانون رقم 02.23 المتعلق بالمسطرة المدنية", date: "25 ماي 2024" },
    { title: "المجلس الأعلى يصدر قرارات جديدة حول الاجتهاد القضائي", date: "20 ماي 2024" },
  ];

  // 📝 البيانات الثابتة للندوات والمؤتمرات
  const seminars = [
    { title: "الذكاء الاصطناعي والقانون", speaker: "د. محمد الكناني", day: "28", month: "ماي", time: "20:00 - 18:00" },
    { title: "قراءة في مستجدات القانون الجنائي", speaker: "د. فاطمة الزهراء", day: "05", month: "يونيو", time: "20:00 - 18:00" },
  ];

  return (
    <div className="w-full min-h-screen text-right font-['Tajawal']" dir="rtl">

      {/* ==========================================================================
         📱 1. نسخة الهاتف المحمول (تظهر تلقائياً في شاشات الجوال وتختفي في الحاسوب)
         ========================================================================== */}
      <div className="block md:hidden px-4 py-5 bg-slate-50 dark:bg-[#030712] min-h-screen pb-12">
        
        {/* البانر الترحيبي الذكي المدمج */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#090d16] text-white p-5 rounded-2xl shadow-md mb-5 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-[#facc15] text-[10px] font-bold mb-2">
            ✨ منصتك القانونية الأولى بالمغرب
          </span>
          <h1 className="text-lg font-black text-white mb-1">أكاديمية القانون المغربي</h1>
          <p className="text-slate-300 text-[11px] leading-relaxed">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد.</p>
        </div>

        {/* شريط البحث للهاتف */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="ابحث عن مادة، قانون، أو مقال..."
            className="w-full pr-10 pl-4 py-3 bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 rounded-xl text-xs outline-none text-slate-900 dark:text-slate-100 shadow-sm"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
        </div>

        {/* شبكة الأدوات السريعة - متناسقة تماماً في الهاتف */}
        <div className="mb-6">
          <h2 className="font-bold text-navy-900 dark:text-slate-100 text-xs mb-3 flex items-center gap-1.5">
            <span className="w-1 h-3.5 bg-[#f59e0b] rounded-full"></span> أدوات سريعة
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickTools.map((tool, idx) => (
              <Link to={tool.path} key={idx} className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-slate-100 dark:border-zinc-800/50 flex items-center gap-3 shadow-sm active:scale-98 transition-transform">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${tool.bg} shrink-0`}>
                  {tool.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{tool.title}</div>
                  <div className="text-[9px] text-slate-400 truncate mt-0.5">{tool.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* الندوات القادمة في الجوال */}
        <div className="mb-6">
          <h2 className="font-bold text-navy-900 dark:text-slate-100 text-xs mb-3 flex items-center gap-1.5">
            <span className="w-1 h-3.5 bg-[#f59e0b] rounded-full"></span> الندوات القادمة
          </h2>
          <div className="flex flex-col gap-3">
            {seminars.map((seminar, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-3 rounded-xl flex items-center gap-3 shadow-sm">
                <div className="bg-[#0f172a] text-white rounded-lg w-11 h-12 flex flex-col items-center justify-center shrink-0">
                  <span className="text-sm font-black leading-none">{seminar.day}</span>
                  <span className="text-[9px] text-slate-300 mt-0.5">{seminar.month}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-850 dark:text-slate-200 text-xs truncate mb-0.5">{seminar.title}</h3>
                  <p className="text-[10px] text-slate-400">{seminar.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* أحدث المقالات في الجوال */}
        <div className="mb-6">
          <h2 className="font-bold text-navy-900 dark:text-slate-100 text-xs mb-3 flex items-center gap-1.5">
            <span className="w-1 h-3.5 bg-[#f59e0b] rounded-full"></span> أحدث المقالات القانونية
          </h2>
          <div className="flex flex-col gap-3">
            {articles.map((art, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-slate-100 dark:border-zinc-800 shadow-sm">
                <span className="text-[9px] font-bold text-[#f59e0b] bg-amber-500/10 px-2 py-0.5 rounded">
                  {art.category}
                </span>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs mt-2 leading-relaxed">{art.title}</h3>
                <div className="text-[9px] text-slate-400 mt-2 text-left">{art.date}</div>
              </div>
            ))}
          </div>
        </div>

      </div>


      {/* ==========================================================================
         💻 2. نسخة الحاسوب الكاملة (تظهر في شاشات الحاسوب وتختفي تلقائياً في الهاتف)
         ========================================================================== */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 py-8">
        
        {/* صف البانر الترحيبي الكبير + مربع الدخول */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          
          {/* البانر الرئيسي العريض (3 أعمدة) */}
          <div className="col-span-3 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e293b] text-white p-10 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden min-h-[280px]">
            <div className="relative z-10 max-w-xl">
              <h1 className="text-3xl font-black text-white mb-3">منصة متكاملة للطلاب والباحث القانوني</h1>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد.</p>
              
              {/* محرك البحث الداخلي */}
              <div className="bg-white rounded-xl p-1.5 flex items-center shadow-lg max-w-md">
                <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2.5 rounded-lg text-xs font-bold shrink-0 transition-colors">
                  🔍 بحث
                </button>
                <input 
                  type="text" 
                  placeholder="ابحث عن مقال، قانون، مادة قانونية..." 
                  className="w-full px-4 text-xs text-slate-800 outline-none bg-transparent text-right"
                />
              </div>
            </div>
            
            {/* أوسمة التصنيفات الشائعة في الأسفل */}
            <div className="relative z-10 flex items-center gap-2 mt-4 overflow-x-auto scrollbar-hide">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 cursor-pointer transition-colors">القانون المدني</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 cursor-pointer transition-colors">الجنائي العام</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 cursor-pointer transition-colors">المسطرة الجنائية</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 cursor-pointer transition-colors">المسطرة المدنية</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 cursor-pointer transition-colors">قانون الشغل</span>
            </div>
          </div>

          {/* مربع تسجيل الدخول الجانبي (عمود واحد) */}
          <div className="col-span-1 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-black text-slate-900 dark:text-white text-base mb-1">مرحباً بك في أكاديمية القانون</h3>
              <p className="text-slate-400 text-xs leading-relaxed">سجل الدخول للاستفادة من جميع الميزات والخدمات الحصرية.</p>
            </div>
            <div className="flex flex-col gap-2.5 mt-4">
              <button className="w-full py-2.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold rounded-xl transition-colors">
                تسجيل الدخول
              </button>
              <button className="w-full py-2.5 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors">
                إنشاء حساب جديد
              </button>
            </div>
          </div>

        </div>

        {/* عرض الأدوات السريعة كبطاقات كاملة لنسخة الحاسوب */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm mb-8">
          <div className="grid grid-cols-8 gap-4 text-center">
            {quickTools.map((tool, idx) => (
              <Link to={tool.path} key={idx} className="group flex flex-col items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm mb-2 group-hover:scale-105 transition-transform ${tool.bg}`}>
                  {tool.icon}
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{tool.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* شبكة المحتوى السفلي المكونة من 3 أعمدة رئيسية */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* 1. أحدث المقالات */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-navy-900 dark:text-white text-sm">أحدث المقالات</h3>
              <span className="text-xs text-slate-400 cursor-pointer hover:text-[#f59e0b]">عرض الكل ←</span>
            </div>
            <div className="flex flex-col gap-4">
              {articles.map((art, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <span className="text-[10px] bg-amber-500/10 text-[#f59e0b] px-2 py-0.5 rounded font-bold">{art.category}</span>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1.5 group-hover:text-[#f59e0b] transition-colors">{art.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">{art.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. آخر أخبار القانون */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-navy-900 dark:text-white text-sm">آخر الأخبار القانونية</h3>
              <span className="text-xs text-slate-400 cursor-pointer hover:text-[#f59e0b]">عرض الكل ←</span>
            </div>
            <div className="flex flex-col gap-4">
              {news.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#f59e0b] transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. الندوات والمؤتمرات القادمة */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-navy-900 dark:text-white text-sm">الندوات القادمة</h3>
              <span className="text-xs text-slate-400 cursor-pointer hover:text-[#f59e0b]">عرض الكل ←</span>
            </div>
            <div className="flex flex-col gap-3">
              {seminars.map((seminar, idx) => (
                <div key={idx} className="border border-slate-100 dark:border-zinc-800 p-3 rounded-xl flex items-center gap-3">
                  <div className="bg-[#0f172a] text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-black leading-none">{seminar.day}</span>
                    <span className="text-[9px] text-slate-300 mt-0.5">{seminar.month}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{seminar.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{seminar.speaker}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}


```
