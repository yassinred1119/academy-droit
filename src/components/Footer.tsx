import { Link } from '../router';

const cols = [
  {
    title: 'المحتوى',
    links: [
      { label: 'المقالات', to: '/articles' },
      { label: 'الملخصات', to: '/summaries' },
      { label: 'الأخبار', to: '/news' },
      { label: 'الندوات', to: '/seminars' },
    ],
  },
  {
    title: 'الخدمات',
    links: [
      { label: 'الأكاديمية', to: '/academy' },
      { label: 'مكتبة القوانين', to: '/library' },
      { label: 'المساعد القانوني', to: '/assistant' },
      { label: 'مركز الكتابة', to: '/writing' },
    ],
  },
  {
    title: 'المجتمع',
    links: [
      { label: 'المجتمع القانوني', to: '/community' },
      { label: 'الملف الشخصي', to: '/Maintenance' },
      { label: 'الباقات', to: '/' },
      { label: 'الدعم الفني', to: '/' },
    ],
  },
];

const trust = [
  { icon: '★', label: 'مصادر موثوقة', sub: 'محتوى من مصادر رسمية' },
  { icon: '↺', label: 'محدث باستمرار', sub: 'تحديث المحتوى أولاً بأول' },
  { icon: '⛨', label: 'آمن وموثوق', sub: 'حماية بياناتك وخصوصيتك' },
  { icon: '❓', label: 'دعم فني', sub: 'نحن هنا لمساعدتك' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 py-10 mt-6" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* البراند والتعريف */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center text-sm">
                ⚖️
              </div>
              <span className="font-bold text-gold-400">أكاديمية القانون المغربي</span>
            </div>
            <p className="text-xs leading-relaxed text-navy-400 mb-4">
              منصة القانون المغربي الأولى للطلاب والباحثين والمهنيين.
            </p>
            <div className="flex items-center gap-2">
              {['Y', 'F', 'I', 'L'].map((s) => (
                <span
                  key={s}
                  className="w-7 h-7 rounded-full bg-navy-800 hover:bg-gold-500 flex items-center justify-center transition-colors cursor-pointer group"
                >
                  <span className="text-[10px] text-navy-400 group-hover:text-navy-900 font-bold">{s}</span>
                </span>
              ))}
            </div>
          </div>

          {/* أعمدة الروابط */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white text-sm mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-xs text-navy-400 hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* الشريط السفلي وشعارات الثقة */}
        <div className="border-t border-navy-800 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">© {new Date().getFullYear()} أكاديمية القانون المغربي. جميع الحقوق محفوظة.</p>
          <div className="hidden lg:flex items-center gap-6">
            {trust.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-right">
                <span className="text-gold-500 text-base">{item.icon}</span>
                <div>
                  <div className="text-xs font-bold text-white">{item.label}</div>
                  <div className="text-[10px] text-navy-500">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}