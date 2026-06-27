react
import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FileText, 
  Video, 
  FolderOpen, 
  Search, 
  ArrowLeft, 
  Award, 
  ChevronLeft, 
  Clock, 
  User, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import { Link } from '../router';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentArticles, setRecentArticles] = useState([]);
  const [recentSeminars, setRecentSeminars] = useState([]);
  const [recentLaws, setRecentLaws] = useState([]);

  // جلب البيانات الأساسية لعرضها بشكل ديناميكي ومباشر في واجهة المستخدم
  useEffect(() => {
    // جلب المقالات
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => {
        const list = data.articles || data;
        if (Array.isArray(list)) setRecentArticles(list.slice(0, 3));
      })
      .catch(() => {});

    // جلب الندوات
    fetch('/data/seminars.json')
      .then(res => res.json())
      .then(data => {
        const list = data.seminars || data;
        if (Array.isArray(list)) setRecentSeminars(list.slice(0, 2));
      })
      .catch(() => {});

    // جلب نصوص مكتبة القوانين
    fetch('/data/library.json')
      .then(res => res.json())
      .then(data => {
        const list = data.library || data;
        if (Array.isArray(list)) setRecentLaws(list.slice(0, 3));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full min-h-screen text-right" dir="rtl">

      {/* ==========================================================================
         📱 1. نسخة الهاتف المحمول (تظهر فقط في الهاتف وتختفي تماماً في الحاسوب)
         ========================================================================== */}
      <div className="block md:hidden px-4 py-5 bg-white dark:bg-[#09090b] transition-colors duration-200 min-h-screen">
        
        {/* البانر الترحيبي الذكي للجوال (شكل بطاقة تطبيق ذكي) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#090d16] text-white p-5 rounded-3xl shadow-md mb-6">
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-[#facc15] text-[10px] font-bold mb-3 border border-amber-500/20">
              <Sparkles className="w-3 h-3" /> منصتك القانونية الأولى بالمغرب
            </span>
            <h1 className="text-xl font-black leading-tight text-white mb-2">أكاديمية القانون المغربي</h1>
            <p className="text-slate-300 text-xs font-medium leading-relaxed max-w-[90%]">
              دليلك الشامل للدراسة القانونية، ملخصات المواد، القوانين الرسمية والندوات التفاعلية.
            </p>
          </div>
        </div>

        {/* شريط البحث المطور المريح لليد */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="ابحث عن مادة، قانون، أو مقال قانوني..."
            className="w-full pr-11 pl-4 py-3 bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl text-xs outline-none shadow-sm focus:border-amber-500 dark:focus:border-amber-500 transition-all text-right text-slate-900 dark:text-slate-100"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
        </div>

        {/* قسم الأدوات السريعة الدائرية الفخمة (Quick Circle Tools) */}
        <div className="mb-6">
          <h2 className="font-extrabold text-[#0f172a] dark:text-slate-100 text-sm mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-4 bg-[#f59e0b] rounded-full"></span> أدوات سريعة
          </h2>
          <div className="grid grid-cols-4 gap-3 text-center">
            
            <Link to="/library" className="flex flex-col items-center group">
              <div className="w-13 h-13 rounded-2xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-[#f59e0b] shadow-sm mb-2 transition-transform active:scale-95">
                <FolderOpen className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">مكتبة القوانين</span>
            </Link>

            <Link to="/summaries" className="flex flex-col items-center group">
              <div className="w-13 h-13 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm mb-2 transition-transform active:scale-95">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">ملخصات المواد</span>
            </Link>

            <Link to="/articles" className="flex flex-col items-center group">
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm mb-2 transition-transform active:scale-95">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">البحوث والمقالات</span>
            </Link>

            <Link to="/seminars" className="flex flex-col items-center group">
              <div className="w-13 h-13 rounded-2xl bg-pink-50 dark:bg-pink-950/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shadow-sm mb-2 transition-transform active:scale-95">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">الندوات والمؤتمرات</span>
            </Link>

          </div>
        </div>

        {/* قسم الندوات القادمة في الجوال */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold text-[#0f172a] dark:text-slate-100 text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-4 bg-[#f59e0b] rounded-full"></span> الندوات والمؤتمرات القادمة
            </h2>
            <Link to="/seminars" className="text-xs font-bold text-[#f59e0b] flex items-center gap-0.5">
              الكل <ChevronLeft className="w-4.5 h-4.5" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentSeminars.map((seminar, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 p-4 rounded-2xl flex items-center gap-4">
                {/* مربع التاريخ الأنيق المصغر */}
                <div className="bg-[#0f172a] dark:bg-zinc-800 text-white rounded-xl w-12 h-14 flex flex-col items-center justify-center shrink-0">
                  <span className="text-base font-black leading-none">{seminar.day || "25"}</span>
                  <span className="text-[9px] text-slate-300 mt-0.5">{seminar.monthYear?.split(' ')[0] || "يونيو"}</span>
                </div>
                {/* التفاصيل النصية */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xs mb-1 truncate">{seminar.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span>{seminar.speaker && `أ. ${seminar.speaker}`}</span>
                    <span>•</span>
                    <span className="px-1.5 py-0.2 rounded bg-emerald-100/10 text-emerald-500 font-bold">{seminar.type || "عبر الإنترنت"}</span>
                  </div>
                </div>
                {/* زر التنقل للفورم */}
                <a 
                  href={seminar.formLink || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center text-[#0f172a] dark:text-white shrink-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* قسم أحدث المقالات في الجوال */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold text-[#0f172a] dark:text-slate-100 text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-4 bg-[#f59e0b] rounded-full"></span> أحدث البحوث والمقالات القانونية
            </h2>
            <Link to="/articles" className="text-xs font-bold text-[#f59e0b] flex items-center gap-0.5">
              الكل <ChevronLeft className="w-4.5 h-4.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {recentArticles.map((article, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col">
                <img src={article.image} alt={article.title} className="w-full h-32 object-cover shrink-0" />
                <div className="p-4 flex-1">
                  <span className="inline-block bg-amber-500/10 text-[#f59e0b] text-[9px] font-bold px-2 py-0.5 rounded-md mb-2">
                    {article.category}
                  </span>
                  <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xs mb-2 leading-relaxed">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 border-t border-slate-100 dark:border-zinc-800 pt-2">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* تذييل الصفحة للجوال */}
        <div className="text-center py-6 border-t border-slate-100 dark:border-zinc-800 mt-8">
          <div className="font-bold text-slate-400 text-[10px]">جميع الحقوق محفوظة © أكاديمية القانون المغربي ٢٠٢٦</div>
        </div>

      </div>


      {/* ==========================================================================
         💻 2. نسخة الحاسوب الكاملة (تظهر فقط في الحاسوب وتختفي تماماً في الهاتف)
         ========================================================================== */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 py-8 transition-all duration-300">
        
        {/* البانر الترحيبي العريض المذهل لسطح المكتب */}
        <div className="bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#0a0f1d] text-white p-10 rounded-3xl shadow-xl flex items-center justify-between gap-10 mb-10 relative overflow-hidden">
          <div className="absolute right-1/2 bottom-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
          
          <div className="flex-1 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-[#facc15] text-xs font-bold mb-4 border border-amber-500/20">
              <Award className="w-4 h-4" /> المنصة الأكاديمية الرسمية المتكاملة بالمملكة المغربية
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3">أكاديمية القانون المغربي</h1>
            <p className="text-slate-300 text-sm font-medium max-w-2xl mb-6 leading-relaxed">
              مرجعك العلمي الدائم لدراسة وفهم فروع القانون العام والخاص بالمغرب. ملخصات المواد الجامعية المنقحة، مكتبة نصوص وظهائر محدثة باستمرار، وندوات أكاديمية تفاعلية.
            </p>
            <div className="flex items-center gap-3">
              <Link to="/summaries" className="px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-white text-xs font-bold rounded-xl transition-all shadow-md">
                ابدأ تصفح الملخصات
              </Link>
              <Link to="/library" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/10 transition-all">
                مكتبة القوانين المغربية
              </Link>
            </div>
          </div>

          <div className="w-72 h-44 bg-white/5 border border-white/10 rounded-2xl shrink-0 backdrop-blur-sm p-5 flex flex-col justify-between">
            <div className="text-right">
              <div className="text-xs text-slate-400 font-bold mb-1">إحصائيات الأكاديمية</div>
              <div className="text-3xl font-black text-[#facc15]">+ ١٥٠</div>
              <div className="text-xs text-slate-300 mt-1">قانون وظهير شريف متاح للتحميل المجاني</div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2">
              <span>تحديث يومي مستمر</span>
              <span>⚡</span>
            </div>
          </div>
        </div>

        {/* البحث والتصفية المتقدم لسطح المكتب */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-4 rounded-2xl shadow-sm mb-8 flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن البحوث، والملخصات، ومكتبة القوانين المغربية..."
              className="w-full pr-11 pl-4 py-3 border border-slate-100 dark:border-zinc-800 rounded-xl text-xs outline-none bg-slate-50 dark:bg-zinc-950 text-right text-slate-900 dark:text-slate-100"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-bold ml-1">تصفح سريع:</span>
            <Link to="/summaries" className="px-4 py-2 bg-slate-100 dark:bg-zinc-800 hover:bg-[#0f172a] hover:text-white dark:hover:bg-[#0f172a] text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold transition-all">الملخصات القانونية</Link>
            <Link to="/library" className="px-4 py-2 bg-slate-100 dark:bg-zinc-800 hover:bg-[#0f172a] hover:text-white dark:hover:bg-[#0f172a] text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold transition-all">مكتبة النصوص والظهائر</Link>
          </div>
        </div>

        {/* تنظيم الشبكة: المقالات + الندوات والمكتبة جانباً */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* العمود الرئيسي اليمين: أحدث المقالات والبحوث */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-850 pb-3">
              <h2 className="font-extrabold text-[#0f172a] dark:text-slate-100 text-lg flex items-center gap-2">
                <span className="w-2 h-5 bg-[#f59e0b] rounded-full"></span> المقالات والأبحاث القانونية الجديدة
              </h2>
              <Link to="/articles" className="text-xs font-bold text-[#f59e0b] flex items-center gap-1 hover:underline">
                جميع المقالات <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((article, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                  <div className="relative h-44 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" />
                    <span className="absolute top-3 right-3 bg-[#0f172a] text-white text-[10px] font-bold px-3 py-1 rounded-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm mb-2 leading-relaxed group-hover:text-[#f59e0b] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                        مقال قانوني مراجع وشامل يحتوي على دراسات وتحليلات دقيقة ومتنوعة.
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-50 dark:border-zinc-800/60 pt-3">
                      <span className="flex items-center gap-1"><User className="w-4 h-4 text-slate-300" /> {article.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-slate-300" /> {article.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* العمود اليسار الجانبي: الندوات ومكتبة القوانين */}
          <div className="flex flex-col gap-8">
            
            {/* الندوات والمؤتمرات */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-850 pb-3">
                <h2 className="font-extrabold text-[#0f172a] dark:text-slate-100 text-base flex items-center gap-2">
                  <span className="w-2 h-5 bg-[#f59e0b] rounded-full"></span> ندوات ومؤتمرات
                </h2>
                <Link to="/seminars" className="text-xs font-bold text-[#f59e0b] flex items-center gap-1 hover:underline">
                  المزيد
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {recentSeminars.map((seminar, idx) => (
                  <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-4 rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-[#0f172a] dark:bg-zinc-800 text-white rounded-2xl w-14 h-16 flex flex-col items-center justify-center shrink-0">
                      <span className="text-xl font-black leading-none">{seminar.day || "15"}</span>
                      <span className="text-[10px] text-slate-300 mt-1">{seminar.monthYear?.split(' ')[0] || "يوليو"}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xs mb-1.5 truncate">{seminar.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <span>{seminar.speaker && `أ. ${seminar.speaker}`}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-extrabold">{seminar.type || "عبر الإنترنت"}</span>
                      </div>
                    </div>
                    <a 
                      href={seminar.formLink || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-white hover:bg-slate-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* مكتبة القوانين المغربية */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-850 pb-3">
                <h2 className="font-extrabold text-[#0f172a] dark:text-slate-100 text-base flex items-center gap-2">
                  <span className="w-2 h-5 bg-[#f59e0b] rounded-full"></span> مستندات قانونية حديثة
                </h2>
                <Link to="/library" className="text-xs font-bold text-[#f59e0b] flex items-center gap-1 hover:underline">
                  المكتبة
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                {recentLaws.map((law, idx) => (
                  <div key={idx} className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-4 rounded-xl flex items-center justify-between gap-3 shadow-sm">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xs truncate mb-1">{law.title}</h3>
                      <p className="text-[10px] text-slate-400 font-medium truncate">{law.subtitle}</p>
                    </div>
                    <a 
                      href={law.fileUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-[#0f172a] dark:bg-zinc-800 hover:bg-[#1e293b] text-white text-[10px] font-bold rounded-lg transition-colors shrink-0"
                    >
                      عرض المستند
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
