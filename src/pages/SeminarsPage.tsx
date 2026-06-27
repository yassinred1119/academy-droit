import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function SeminarsPage() {
  const [activeTab, setActiveTab] = useState('القادمة');
  const [seminars, setSeminars] = useState([]);

  // جلب البيانات تلقائياً من لوحة التحكم
  useEffect(() => {
    fetch('/data/seminars.json')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.seminars)) setSeminars(data.seminars);
        else if (Array.isArray(data)) setSeminars(data);
      })
      .catch((err) => console.log("خطأ في جلب بيانات الندوات:", err));
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 text-right bg-gray-50/50 min-h-screen" dir="rtl">
      {/* الأزرار العلوية لتصفح القادمة والماضية */}
      <div className="flex justify-end gap-2 mb-6">
        <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex gap-1">
          <button
            onClick={() => setActiveTab('الماضية')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'الماضية' ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            الماضية
          </button>
          <button
            onClick={() => setActiveTab('القادمة')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'القادمة' ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            القادمة
          </button>
        </div>
      </div>

      {/* قائمة الندوات المتطابقة مع التصميم المطلوب */}
      <div className="flex flex-col gap-4">
        {seminars.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-md transition-shadow"
          >
            {/* زر التسجيل الجانبي يفتح رابط الفورم في صفحة جديدة */}
            <div className="w-full md:w-auto order-3 md:order-1">
              <a
                href={item.formLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 px-7 py-2.5 bg-navy-950 text-white text-xs font-bold rounded-xl hover:bg-navy-900 transition-colors shadow-sm"
              >
                التسجيل <ChevronLeft className="w-4 h-4" />
              </a>
            </div>

            {/* تفاصيل الندوة (العنوان، الأستاذ، التوقيت) */}
            <div className="flex-1 text-right order-2 md:order-2 w-full md:w-auto">
              <h3 className="font-extrabold text-navy-900 text-base md:text-lg mb-2">
                {item.title}
              </h3>
              
              <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  {item.speaker && `أ. ${item.speaker}`}
                </span>
                <span>•</span>
                <span>{item.fullDate}</span>
                <span>•</span>
                <span>{item.time}</span>
                
                {/* بطاقة نوع الحضور (عبر الإنترنت / حضوري) */}
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.type === 'حضوري'
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-emerald-50 text-emerald-600'
                  }`}
                >
                  {item.type || 'عبر الإنترنت'}
                </span>
              </div>
            </div>

            {/* مربع التاريخ الجانبي الأنيق */}
            <div className="flex items-center gap-3 order-1 md:order-3 shrink-0 self-start md:self-center">
              <div className="bg-navy-950 text-white rounded-2xl w-16 h-20 flex flex-col items-center justify-center shadow-sm">
                <span className="text-2xl font-black leading-none mb-1">{item.day}</span>
                <span className="text-[10px] font-medium tracking-wider text-gray-300 opacity-90">
                  {item.monthYear?.split(' ')[0]}
                </span>
              </div>
            </div>
          </div>
        ))}

        {seminars.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            لا توجد ندوات مدرجة حالياً.
          </div>
        )}
      </div>
    </div>
  );
}
