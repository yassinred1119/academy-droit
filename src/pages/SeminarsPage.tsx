import { useState } from 'react';
import { Clock, Calendar, ChevronLeft, Video } from 'lucide-react';

const tabs = ['القادمة', 'الماضية'];

const seminars = [
  { id: 1, title: 'قانون الأسرة بين مبدأ المساواة والقيم الثقافية', speaker: 'أ. أمين العلوي', avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop', day: '25', month: 'يونيو', year: '2024', time: '18:00 - 20:00', online: true, upcoming: true },
  { id: 2, title: 'الذكاء الاصطناعي والقانون', speaker: 'د. فاطمة الزهراء', avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop', day: '30', month: 'يونيو', year: '2024', time: '18:00 - 20:00', online: true, upcoming: true },
  { id: 3, title: 'الحماية القانونية الشخصية المعطيات', speaker: 'د. يوسف البكري', avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop', day: '05', month: 'يوليو', year: '2024', time: '16:00 - 18:00', online: false, upcoming: true },
  { id: 4, title: 'مستجدات القانون الجنائي الاقتصادي', speaker: 'أ. سارة المنصوري', avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop', day: '12', month: 'مارس', year: '2024', time: '18:00 - 20:00', online: true, upcoming: false },
  { id: 5, title: 'حقوق الإنسان في ضوء الدستور المغربي', speaker: 'د. محمد الكتاني', avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop', day: '20', month: 'فبراير', year: '2024', time: '17:00 - 19:00', online: false, upcoming: false },
];

const monthColors: Record<string, string> = {
  يونيو: 'bg-navy-800',
  يوليو: 'bg-gold-600',
  أغسطس: 'bg-navy-700',
  مارس: 'bg-navy-800',
  فبراير: 'bg-navy-700',
};

export default function SeminarsPage() {
  const [activeTab, setActiveTab] = useState('القادمة');

  const filtered = seminars.filter((s) => (activeTab === 'القادمة' ? s.upcoming : !s.upcoming));

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      {/* Header */}
      <div
        className="relative rounded-2xl overflow-hidden mb-6 p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2d5a 100%)' }}
      >
        <div className="flex items-center gap-2 text-gold-400 text-sm mb-2">
          <Video className="w-4 h-4" />
          <span>الندوات والمحاضرات</span>
        </div>
        <h1 className="text-2xl font-extrabold mb-1">الندوات والمحاضرات</h1>
        <p className="text-navy-300 text-sm">ندوات قانونية مع كبار الخبراء والأساتذة</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Seminars list */}
      <div className="space-y-4">
        {filtered.map((seminar) => (
          <div
            key={seminar.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-5 hover:shadow-md transition-shadow group"
          >
            {/* Date badge */}
            <div className={`${monthColors[seminar.month] || 'bg-navy-800'} text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shrink-0 min-w-[64px]`}>
              <span className="text-2xl font-extrabold leading-none">{seminar.day}</span>
              <span className="text-[11px] opacity-80 mt-0.5">{seminar.month}</span>
              <span className="text-[10px] opacity-60">{seminar.year}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-navy-900 text-base mb-2 group-hover:text-gold-600 transition-colors">{seminar.title}</h3>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <img src={seminar.avatar} alt={seminar.speaker} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs text-gray-500">{seminar.speaker}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />{seminar.time}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />{seminar.day} {seminar.month} {seminar.year}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${seminar.online ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {seminar.online ? 'عبر الإنترنت' : 'حضوري'}
                </span>
              </div>
            </div>

            {/* Action */}
            <div className="shrink-0">
              {seminar.upcoming ? (
                <button className="flex items-center gap-1.5 px-5 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-xl transition-colors">
                  التسجيل <ChevronLeft className="w-3 h-3" />
                </button>
              ) : (
                <button className="flex items-center gap-1.5 px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors">
                  <Video className="w-3 h-3" /> مشاهدة
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Video className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">لا توجد ندوات في هذا القسم</p>
        </div>
      )}
    </div>
  );
}
