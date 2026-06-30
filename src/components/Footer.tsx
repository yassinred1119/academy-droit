import { Link } from '../router';

const footerColumns = [
  {
    title: 'المحتوى التشريعي المغربي',
    links: [
      { label: 'مكتبة القوانين والظهائر', to: '/library' },
      { label: 'الأبحاث والدراسات القانونية', to: '/articles' },
      { label: 'الملخصات والاصدارات المركزة', to: '/summaries' },
    ],
  },
  {
    title: 'روابط ومستندات عملية',
    links: [
      { label: 'صيغ وقوالب العقود والمذكرات', to: '/writing' },
      { label: 'متابعة الساحة والأخبار القانونية', to: '/news' },
      { label: 'تغطيات الندوات والمحاضرات', to: '/seminars' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 md:py-14 border-t border-slate-900 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-900">
          
          {/* قسم الهوية والتعريف بالمنصة */}
          <div className="md:max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-sm text-white font-serif font-black">
                ق
              </div>
              <span className="font-black text-white text-base">منصة القانون المغربي</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-400 font-medium">
              البوابة الإلكترونية المغربية المستقلة الأولى المتخصصة في تيسير الوصول إلى المتون التشريعية والمقالات والاجتهادات القضائية وفق أحدث التحديثات الحية.
            </p>
          </div>

          {/* توليد أعمدة الروابط بشكل نظيف وسريع الحركية */}
          {footerColumns.map((col) => (
            <div key={col.title} className="text-right">
              <h4 className="font-black text-slate-200 text-xs md:text-sm mb-4 tracking-wide">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-xs text-slate-400 hover:text-amber-500 transition-colors duration-200 block py-0.5">
                      • {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* شريط الحقوق والموثوقية السفلي */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          <p className="text-[11px] text-slate-600 dark:text-slate-500 font-bold">
            © {new Date().getFullYear()} منصة القانون المغربي. جميع الحقوق محفوظة ومحدثة حياً وميكانيكياً.
          </p>
          <div className="flex gap-6 text-[10px] text-slate-500">
            <span>مصادر معتمدة من الجريدة الرسمية</span>
            <span>تصفح آمن ومحمي بالكامل</span>
          </div>
        </div>

      </div>
    </footer>
  );
}