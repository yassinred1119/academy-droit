import { useState } from 'react';
import { FileText, BookOpen, Clipboard, Monitor, ChevronLeft, Sparkles } from 'lucide-react';

const templates = [
  {
    id: 1,
    icon: FileText,
    title: 'مقال قانوني',
    description: 'أنشئ مقالاً قانونياً احترافياً مع هيكل منظم وعناصر متكاملة',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    tags: ['مقدمة', 'عناصر', 'خاتمة'],
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'بحث جامعي',
    description: 'هيكل بحث أكاديمي متكامل مع المنهجية والمراجع',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    tags: ['إشكالية', 'منهجية', 'هيكل'],
  },
  {
    id: 3,
    icon: Clipboard,
    title: 'مذكرة قانونية',
    description: 'قوالب مذكرات قانونية جاهزة للاستخدام الفوري',
    color: 'bg-gold-50 border-gold-200',
    iconColor: 'text-gold-600',
    tags: ['دفاع', 'ادعاء', 'استئناف'],
  },
  {
    id: 4,
    icon: Monitor,
    title: 'عرض تقديمي',
    description: 'هيكل عرض قانوني للمحاضرات والندوات',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    tags: ['شرائح', 'محاور', 'ملخص'],
  },
];

const recentDocs = [
  { title: 'مقال حول المسؤولية التقصيرية', type: 'مقال قانوني', date: '2024/10/15', progress: 80 },
  { title: 'بحث في القانون الجنائي الخاص', type: 'بحث جامعي', date: '2024/10/10', progress: 45 },
  { title: 'مذكرة دفاع في قضية تجارية', type: 'مذكرة قانونية', date: '2024/10/08', progress: 100 },
];

export default function WritingPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [topic, setTopic] = useState('');

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      {/* Header */}
      <div
        className="relative rounded-2xl overflow-hidden mb-6 p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2d5a 100%)' }}
      >
        <div className="flex items-center gap-2 text-gold-400 text-sm mb-2">
          <Sparkles className="w-4 h-4" />
          <span>مركز الكتابة القانونية</span>
        </div>
        <h1 className="text-2xl font-extrabold mb-1">مركز الكتابة القانونية</h1>
        <p className="text-navy-300 text-sm">قوالب احترافية لتطوير كتاباتك القانونية</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Templates */}
        <div className="lg:col-span-2">
          <h2 className="font-bold text-navy-900 text-base mb-4">اختر نوع القالب</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {templates.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setSelectedTemplate(tmpl.id === selectedTemplate ? null : tmpl.id)}
                className={`text-right p-5 rounded-xl border-2 transition-all ${
                  selectedTemplate === tmpl.id
                    ? 'border-navy-900 bg-navy-50 shadow-md'
                    : `${tmpl.color} hover:shadow-md`
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm`}>
                  <tmpl.icon className={`w-6 h-6 ${tmpl.iconColor}`} />
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-1">{tmpl.title}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">{tmpl.description}</p>
                <div className="flex flex-wrap gap-1">
                  {tmpl.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/80 text-gray-600 border border-gray-200 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-navy-700">
                  استخدام القالب <ChevronLeft className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>

          {/* Topic input (shown when template selected) */}
          {selectedTemplate && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-navy-900 text-sm mb-3">أدخل موضوعك</h3>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="مثال: المسؤولية المدنية للطبيب في القانون المغربي..."
                rows={3}
                className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none focus:border-gold-400 resize-none"
                dir="rtl"
              />
              <button
                disabled={!topic.trim()}
                className="mt-3 flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white text-sm font-bold rounded-xl transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                إنشاء الهيكل
              </button>
            </div>
          )}
        </div>

        {/* Recent documents */}
        <div>
          <h2 className="font-bold text-navy-900 text-base mb-4">مستنداتك الأخيرة</h2>
          <div className="space-y-3">
            {recentDocs.map((doc) => (
              <div key={doc.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-navy-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-navy-900 line-clamp-2 leading-snug">{doc.title}</h4>
                    <span className="text-[10px] text-gold-600 font-bold">{doc.type}</span>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-gray-400">التقدم</span>
                        <span className="text-[10px] font-bold text-navy-700">{doc.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-navy-900 rounded-full transition-all"
                          style={{ width: `${doc.progress}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">{doc.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
            عرض جميع القوالب
          </button>
        </div>
      </div>
    </div>
  );
}
