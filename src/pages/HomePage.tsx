import { useState } from 'react';
import { Link } from '../router';
import {
  Search, ChevronDown, User, UserPlus, BookOpen, FileText, AlignLeft,
  Newspaper, Video, PenTool, Scale, GraduationCap, Bot, Shield,
  Clock, Calendar, ArrowLeft, HelpCircle, BookMarked, Crown, LayoutGrid,
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const categoryChips = ['القانون المدني', 'القانون الجنائي', 'المسطرة الجنائية', 'قانون الشغل'];

const quickTools = [
  { icon: GraduationCap, label: 'الأكاديمية', sub: 'دورات واختبارات', to: '/academy' },
  { icon: BookOpen, label: 'مكتبة القوانين', sub: 'جميع القوانين المغربية', to: '/library' },
  { icon: FileText, label: 'المقالات', sub: 'مقالات قانونية موثوقة', to: '/articles' },
  { icon: AlignLeft, label: 'الملخصات', sub: 'ملخصات شاملة', to: '/summaries' },
  { icon: Bot, label: 'المساعد القانوني', sub: 'ذكاء اصطناعي قانوني', to: '/assistant' },
  { icon: Video, label: 'الندوات', sub: 'ندوات ومحاضرات', to: '/seminars' },
  { icon: Newspaper, label: 'الأخبار', sub: 'آخر أخبار القانون', to: '/news' },
  { icon: PenTool, label: 'قوالب الكتابة', sub: 'مقالات وبحوث جاهزة', to: '/writing' },
];

const articles = [
  { title: 'شرح الفصل 378 من القانون الجنائي المغربي', date: '24 ماي 2024', image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=200&h=130&fit=crop' },
  { title: 'التمييز بين المسؤولية العقدية والمسؤولية التقصيرية', date: '22 ماي 2024', image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=200&h=130&fit=crop' },
  { title: 'بطلان عقد الزواج في القانون المغربي', date: '20 ماي 2024', image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200&h=130&fit=crop' },
];

const news = [
  { title: 'صدور قانون رقم 02.23 المتعلق بالمسطرة المدنية', date: '25 ماي 2024', image: 'https://images.pexels.com/photos/5668853/pexels-photo-5668853.jpeg?auto=compress&cs=tinysrgb&w=200&h=130&fit=crop' },
  { title: 'المجلس الأعلى يصدر قرارات جديدة حول الاجتهاد القضائي', date: '23 ماي 2024', image: 'https://images.pexels.com/photos/1575937/pexels-photo-1575937.jpeg?auto=compress&cs=tinysrgb&w=200&h=130&fit=crop' },
  { title: 'تعديل بعض مقتضيات قانون الشغل المغربي', date: '21 ماي 2024', image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=200&h=130&fit=crop' },
];

const seminars = [
  { title: 'الذكاء الاصطناعي والقانون', speaker: 'د. محمد الكتاني', day: '28', month: 'ماي', time: '18:00 - 20:00', color: 'bg-navy-800' },
  { title: 'قراءة في مستجدات القانون الجنائي', speaker: 'د. فاطمة الزهراء', day: '05', month: 'يونيو', time: '18:00 - 20:00', color: 'bg-gold-600' },
  { title: 'حماية المعطيات الشخصية في القانون المغربي', speaker: 'د. يوسف السلاوي', day: '12', month: 'يونيو', time: '18:00 - 20:00', color: 'bg-navy-700' },
];

const sideQuickLinks = [
  { icon: Search, label: 'البحث في القوانين', to: '/library' },
  { icon: Scale, label: 'البحث في الاجتهادات', to: '/library' },
  { icon: FileText, label: 'نماذج ومذكرات قانونية', to: '/writing' },
  { icon: HelpCircle, label: 'الأسئلة الشائعة', to: '/community' },
  { icon: BookMarked, label: 'المصطلحات القانونية', to: '/library' },
  { icon: Calendar, label: 'التقويم القانوني', to: '/seminars' },
];

const stats = [
  { icon: FileText, value: '+5000', label: 'مقال قانوني' },
  { icon: AlignLeft, value: '+2000', label: 'PDF ملخص' },
  { icon: GraduationCap, value: '+150', label: 'دورة تدريبية' },
  { icon: User, value: '+100K', label: 'طالب ومستخدم' },
  { icon: UserPlus, value: '+20', label: 'أساتذة ومراجعون' },
  { icon: Shield, value: '+10', label: 'سنوات من الخبرة' },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section
      className="relative min-h-[300px] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2d5a 50%, #0d1b3e 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative z-10 w-full px-6 py-12 text-center text-white">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-3 leading-snug">منصة متكاملة للطالب والباحث القانوني</h1>
        <p className="text-navy-200 text-base mb-8">كل ما تحتاجه في دراستك وفهمك للقانون المغربي في مكان واحد</p>

        <div className="max-w-2xl mx-auto flex items-stretch bg-white rounded-xl shadow-xl overflow-hidden mb-6">
          <button className="flex items-center gap-2 px-4 border-l border-gray-200 text-gray-600 text-sm font-medium whitespace-nowrap hover:bg-gray-50 transition-colors">
            جميع الأقسام <ChevronDown className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن مقال، قانون، مادة قانونية..."
            className="flex-1 px-4 py-3.5 text-gray-800 placeholder-gray-400 text-sm outline-none"
            dir="rtl"
          />
          <button className="flex items-center gap-2 px-6 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm transition-colors">
            <Search className="w-4 h-4" /> بحث
          </button>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2">
          {categoryChips.map((chip) => (
            <button key={chip} className="px-4 py-1.5 rounded-full border border-white/40 text-white/90 text-xs font-medium hover:bg-white/10 hover:border-white/70 transition-colors">
              {chip}
            </button>
          ))}
          <Link to="/academy" className="px-4 py-1.5 rounded-full bg-gold-500 text-navy-900 text-xs font-bold hover:bg-gold-400 transition-colors flex items-center gap-1.5">
            <LayoutGrid className="w-3 h-3" /> استكشف الأقسام
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── QUICK TOOLS ──────────────────────────────────────────────────────────────

function QuickToolsGrid() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="grid grid-cols-4 lg:grid-cols-8 divide-x divide-x-reverse divide-gray-100">
        {quickTools.map((tool) => (
          <Link key={tool.label} to={tool.to} className="flex flex-col items-center gap-2 px-3 py-5 hover:bg-gold-50 group transition-colors">
            <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-gold-100 flex items-center justify-center transition-colors">
              <tool.icon className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-navy-800">{tool.label}</div>
              <div className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">{tool.sub}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-bold text-navy-900 text-base mb-1">مرحباً بك في أكاديمية القانون</h3>
        <p className="text-gray-500 text-xs mb-4 leading-relaxed">سجل الدخول للاستفادة من جميع الميزات والخدمات</p>
        <Link to="/profile" className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors mb-2">
          <User className="w-4 h-4" /> تسجيل الدخول
        </Link>
        <Link to="/profile" className="w-full flex items-center justify-center gap-2 border border-navy-900 text-navy-900 hover:bg-navy-50 py-2.5 rounded-lg text-sm font-medium transition-colors">
          <UserPlus className="w-4 h-4" /> إنشاء حساب جديد
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-bold text-navy-900 text-base mb-4 flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-gold-500" /> أدوات سريعة
        </h3>
        <ul className="space-y-1">
          {sideQuickLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 group transition-colors">
                <item.icon className="w-4 h-4 text-gold-500 group-hover:text-gold-600" />
                <span className="text-sm text-gray-700 group-hover:text-navy-900 font-medium">{item.label}</span>
                <ArrowLeft className="w-3 h-3 text-gray-300 group-hover:text-gold-500 mr-auto transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-navy-900 rounded-xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-2 left-3 opacity-10"><Crown className="w-16 h-16" /></div>
        <Crown className="w-8 h-8 text-gold-400 mb-3" />
        <h3 className="font-bold text-base mb-1">اشترك الآن</h3>
        <p className="text-navy-300 text-xs mb-4 leading-relaxed">واحصل على محتوى حصري ومزايا لا محدودة</p>
        <button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 py-2.5 rounded-lg text-sm font-bold transition-colors">
          اكتشف الباقات
        </button>
      </div>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto flex gap-4 px-4 pt-4 items-start">
        <main className="flex-1 min-w-0 flex flex-col gap-4">
          <Hero />
          <QuickToolsGrid />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Articles */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-navy-900 text-base">أحدث المقالات</h2>
                <Link to="/articles" className="text-gold-600 text-xs font-medium hover:text-gold-500 flex items-center gap-1">
                  عرض الكل <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>
              <ul className="space-y-4 flex-1">
                {articles.map((a) => (
                  <li key={a.title} className="flex gap-3 group">
                    <img src={a.image} alt={a.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Link to="/articles" className="text-sm font-semibold text-navy-800 group-hover:text-gold-600 line-clamp-2 leading-snug transition-colors">
                        {a.title}
                      </Link>
                      <p className="text-xs text-gray-400 mt-1">{a.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/articles" className="mt-4 block text-center text-sm text-navy-800 border border-navy-200 hover:bg-navy-50 py-2.5 rounded-lg transition-colors font-medium">
                جميع المقالات
              </Link>
            </div>

            {/* News */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-navy-900 text-base">آخر الأخبار القانونية</h2>
                <Link to="/news" className="text-gold-600 text-xs font-medium hover:text-gold-500 flex items-center gap-1">
                  عرض الكل <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>
              <ul className="space-y-4 flex-1">
                {news.map((n) => (
                  <li key={n.title} className="flex gap-3 group">
                    <img src={n.image} alt={n.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Link to="/news" className="text-sm font-semibold text-navy-800 group-hover:text-gold-600 line-clamp-2 leading-snug transition-colors">
                        {n.title}
                      </Link>
                      <p className="text-xs text-gray-400 mt-1">{n.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/news" className="mt-4 block text-center text-sm text-navy-800 border border-navy-200 hover:bg-navy-50 py-2.5 rounded-lg transition-colors font-medium">
                جميع الأخبار
              </Link>
            </div>

            {/* Seminars */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-navy-900 text-base">الندوات القادمة</h2>
                <Link to="/seminars" className="text-gold-600 text-xs font-medium hover:text-gold-500 flex items-center gap-1">
                  عرض الكل <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>
              <ul className="space-y-3 flex-1">
                {seminars.map((s) => (
                  <li key={s.title} className="flex gap-3 group">
                    <div className={`${s.color} text-white rounded-xl px-3 py-2 flex flex-col items-center justify-center shrink-0 min-w-[52px]`}>
                      <span className="text-lg font-extrabold leading-none">{s.day}</span>
                      <span className="text-[10px] opacity-80 mt-0.5">{s.month}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to="/seminars" className="text-sm font-semibold text-navy-800 group-hover:text-gold-600 line-clamp-2 leading-snug transition-colors">
                        {s.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-2.5 h-2.5 text-gray-500" />
                        </div>
                        <span className="text-xs text-gray-500">{s.speaker}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-[11px] text-gray-400">{s.time}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/seminars" className="mt-4 block text-center text-sm text-navy-800 border border-navy-200 hover:bg-navy-50 py-2.5 rounded-lg transition-colors font-medium">
                جميع الندوات
              </Link>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-20 self-start w-72 shrink-0">
          <Sidebar />
        </aside>
      </div>

      {/* Stats */}
      <div className="max-w-[1400px] mx-auto px-4 mt-4">
        <section className="bg-white border-t border-gray-100 py-8 rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-navy-700" />
                </div>
                <div className="font-extrabold text-xl text-navy-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
