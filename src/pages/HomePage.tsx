import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useRouter } from '../router';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('جميع الأقسام');
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // عدادات ديناميكية حية تحسب أعداد المستندات بناءً على البيانات الفعلية
  const [stats, setStats] = useState({
    totalLaws: 0,
    civilLaws: 0,
    criminalLaws: 0
  });

  const { navigate } = useRouter();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const { data, error } = await supabase.from('courses').select('*');
        if (error) {
          console.error('خطأ Supabase:', error.message);
        } else {
          const fetchedData = data || [];
          setCourses(fetchedData);
          
          // ميكانيكية الحساب الديناميكي للأرقام
          setStats({
            totalLaws: fetchedData.length,
            civilLaws: fetchedData.filter((c: any) => c.department === 'القانون المدني').length,
            criminalLaws: fetchedData.filter((c: any) => c.department === 'القانون الجنائي').length
          });
        }
      } catch (err) {
        console.error('خطأ غير متوقع:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  const departments = ["جميع الأقسام", "القانون المدني", "القانون الجنائي", "المسطرة المدنية", "المسطرة الجنائية", "قانون الشغل"];

  const mainServices = [
    { title: "مكتبة القوانين المغربية", desc: "النصوص التشريعية الكاملة", path: "/library" },
    { title: "المقالات والأبحاث", desc: "دراسات قانونية معمقة", path: "/articles" },
    { title: "الملخصات القانونية", desc: "مراجعات مركزة للطلاب", path: "/summaries" },
    { title: "قوالب الكتابة والمذكرات", desc: "صيغ وعقود جاهزة للتحميل", path: "/writing" },
    { title: "آخر الأخبار المستجدة", desc: "متابعة الساحة القانونية", path: "/news" },
    { title: "الندوات والمحاضرات", desc: "تغطيات علمية حصرية", path: "/seminars" },
  ];

  const sideTools = [
    { title: "البحث في القوانين والظهائر", path: "/laws-search" },
    { title: "الاجتهادات القضائية ومحكمة النقض", path: "/judgments-search" },
    { title: "المصطلحات القانونية (عربي/فرنسي)", path: "/terms" },
    { title: "التقويم والآجال القانونية", path: "/calendar" },
  ];

  // ميكانيكية الفلترة الذكية المزدوجة (تدمج البحث النصي مع القسم المختار)
  const filteredCourses = courses.filter(c => {
    const matchesSearch = (c.title || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (c.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (c.instructor || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "جميع الأقسام" || c.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full min-h-screen text-right font-['Tajawal'] bg-[#f8fafc] pb-12" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 py-4 md:py-8">

        {/* 💰 مساحة إعلانية علوية لـ Google AdSense */}
        <div className="w-full bg-slate-100 border border-dashed border-slate-300 rounded-xl py-3 md:py-5 text-center text-slate-400 text-[10px] md:text-xs mb-4 md:mb-6 font-bold">
          مساحة إعلانية مخصصة - Google AdSense (Responsive Banner)
        </div>
        
        {/* البانر الرئيسي المتجاوب */}
        <div className="w-full rounded-2xl relative overflow-hidden min-h-[260px] md:min-h-[360px] flex flex-col justify-between p-5 md:p-12 bg-cover bg-center shadow-sm mb-6 md:mb-8"
             style={{ backgroundImage: "linear-gradient(to left, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.65)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop')" }}>
          
          <div className="relative z-10 max-w-4xl">
            <span className="bg-amber-600 text-white text-[9px] md:text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">البوابة القانونية المغربية الحية</span>
            <h1 className="text-xl md:text-4xl font-black text-white mt-3 mb-2 md:mb-4 leading-tight">المرجع الأول والجامع للمحتوى والنصوص القانونية</h1>
            
            {/* شريط الأرقام الديناميكية المصغر داخل البانر لإعطاء قوة للموقع */}
            <div className="flex gap-4 my-3 text-slate-300 text-[11px] md:text-xs">
              <div>إجمالي المنشورات الحية: <span className="text-amber-500 font-bold">{loading ? '...' : stats.totalLaws}</span></div>
              <div className="border-r border-slate-700 pr-4">المدني: <span className="text-amber-500 font-bold">{loading ? '...' : stats.civilLaws}</span></div>
              <div className="border-r border-slate-700 pr-4">الجنائي: <span className="text-amber-500 font-bold">{loading ? '...' : stats.criminalLaws}</span></div>
            </div>

            {/* صندوق البحث المستجيب والميكانيكي */}
            <div className="bg-white rounded-xl p-1 flex items-center shadow-lg max-w-2xl mt-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 md:px-7 py-2 md:py-3 rounded-lg text-[11px] md:text-xs font-black transition-colors shrink-0">بحث ميكانيكي</button>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابدأ الكتابة للتصفية الفورية بدون تحديث الصفحة..." 
                className="w-full px-3 text-[11px] md:text-xs text-slate-800 outline-none text-right"
              />
            </div>
          </div>

          {/* أزرار الفلترة الميكانيكية التمريرية */}
          <div className="relative z-10 flex gap-2 overflow-x-auto pt-5 pb-1 scrollbar-none snap-x overflow-scrolling-touch">
            {departments.map((dept, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 md:px-5 py-1.5 rounded-lg text-[11px] md:text-xs font-bold border whitespace-nowrap transition-all snap-center ${selectedDept === dept ? 'bg-amber-600 text-white border-amber-600 shadow-sm' : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-700'}`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة الخدمات والمحتوى */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {mainServices.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(service.path)}
              className="bg-white border border-slate-100 p-4 md:p-5 rounded-xl md:rounded-2xl hover:border-amber-500/30 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-1 h-5 bg-amber-600 rounded-full mb-2 inline-block vertical-middle"></div>
                <h4 className="text-xs md:text-sm font-black text-slate-900 inline-block mr-2 align-middle">{service.title}</h4>
                <p className="text-slate-500 text-[10px] md:text-[11px] leading-relaxed mt-1.5">{service.desc}</p>
              </div>
              <span className="text-[9px] md:text-[10px] font-bold text-amber-600 mt-3 block group-hover:translate-x-[-4px] transition-transform text-left">تصفح القسم ←</span>
            </div>
          ))}
        </div>

        {/* التقسيم الذكي للمحتوى والعمود الجانبي */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* المحتوى السحابي المجلوب ديناميكياً من Supabase */}
          <div className="col-span-1 lg:col-span-3 bg-white border border-slate-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
              <h3 className="font-black text-slate-900 text-xs md:text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span> النصوص والتشريعات المتوفرة حالياً
              </h3>
              <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded">
                المطابقة الحالية: {filteredCourses.length} مستند
              </span>
            </div>
            
            {loading ? (
              <p className="text-center text-slate-400 text-xs py-8">جاري جلب البيانات السحابية الحية وحساب الأرقام...</p>
            ) : filteredCourses.length === 0 ? (
              <p className="text-center text-slate-400 text-xs py-8">لا توجد مستندات قانونية تطابق فلترك الحالي أو استعلام البحث.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.map((course, index) => (
                  <div key={course.id || index} className="border border-slate-100 p-4 rounded-xl bg-slate-50 flex flex-col justify-between hover:bg-slate-100/50 transition-colors">
                    <div>
                      <span className="text-[9px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded mb-2 inline-block">{course.department || 'تشريع عام'}</span>
                      <h4 className="text-xs md:text-sm font-black text-slate-900 mb-1">{course.title}</h4>
                      <p className="text-slate-600 text-[10px] md:text-xs leading-relaxed mb-4">{course.description}</p>
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-200/60 pt-2 mt-2">
                      <span className="text-[9px] text-slate-500">المرجع: {course.instructor}</span>
                      <span className="text-[9px] font-bold text-amber-600 cursor-pointer">تحميل النص الكامل ←</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* العمود الجانبي للأدوات والإعلانات */}
          <div className="col-span-1 flex flex-col gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-black text-slate-900 text-xs mb-2 pb-2 border-b border-slate-100">أدوات ومراجع سريعة</h3>
              <div className="flex flex-col gap-1">
                {sideTools.map((t, i) => (
                  <p key={i} onClick={() => navigate(t.path)} className="text-[10px] md:text-xs text-slate-600 hover:text-amber-600 py-2 border-b border-slate-50 cursor-pointer transition-colors font-medium">
                    • {t.title}
                  </p>
                ))}
              </div>
            </div>

            {/* 💰 مساحة إعلانية جانبية لجوجل أدسنس */}
            <div className="w-full bg-slate-100 border border-dashed border-slate-300 rounded-xl md:rounded-2xl py-8 md:py-12 text-center text-slate-400 text-[11px] md:text-xs font-bold px-4 flex items-center justify-center min-h-[180px] md:min-h-[250px]">
              مساحة إعلانية مخصصة <br /> Google AdSense <br /> (Sidebar Ad)
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}