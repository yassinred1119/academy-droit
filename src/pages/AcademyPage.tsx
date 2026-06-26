import { useState } from 'react';
import { Search, Users, BookOpen, Star, Clock, GraduationCap, ChevronLeft, Award } from 'lucide-react';

const academyStats = [
  { value: '+120', label: 'دورة تدريبية', icon: BookOpen },
  { value: '+15K', label: 'طالب نشط', icon: Users },
  { value: '+50', label: 'أستاذ متخصص', icon: GraduationCap },
  { value: '95%', label: 'نسبة النجاح', icon: Award },
];

const categories = ['الكل', 'القانون المدني', 'القانون الجنائي', 'المسطرة المدنية', 'القانون الدستوري', 'قانون الأسرة', 'القانون التجاري'];

const courses = [
  {
    id: 1,
    title: 'القانون الجنائي العام',
    instructor: 'أ. أمين العلوي',
    students: 1240,
    duration: '30 درس',
    rating: 4.8,
    level: 'مبتدئ',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
    category: 'القانون الجنائي',
    free: true,
  },
  {
    id: 2,
    title: 'قانون المسطرة المدنية',
    instructor: 'د. فاطمة الزهراء',
    students: 980,
    duration: '25 درس',
    rating: 4.9,
    level: 'متوسط',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
    category: 'المسطرة المدنية',
    free: false,
  },
  {
    id: 3,
    title: 'مدخل لدراسة القانون',
    instructor: 'د. يوسف البكري',
    students: 2150,
    duration: '20 درس',
    rating: 4.7,
    level: 'مبتدئ',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
    category: 'القانون المدني',
    free: true,
  },
  {
    id: 4,
    title: 'القانون الدستوري المغربي',
    instructor: 'أ. سعيد المنصوري',
    students: 870,
    duration: '18 درس',
    rating: 4.6,
    level: 'متقدم',
    image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
    category: 'القانون الدستوري',
    free: false,
  },
  {
    id: 5,
    title: 'قانون الأسرة والأحوال الشخصية',
    instructor: 'د. مريم الحسني',
    students: 1100,
    duration: '22 درس',
    rating: 4.8,
    level: 'متوسط',
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
    category: 'قانون الأسرة',
    free: false,
  },
];

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [query, setQuery] = useState('');

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === 'الكل' || c.category === activeCategory;
    const matchQ = !query || c.title.includes(query) || c.instructor.includes(query);
    return matchCat && matchQ;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      {/* Page header */}
      <div
        className="relative rounded-2xl overflow-hidden mb-6 p-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2d5a 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>الأكاديمية</span>
          </div>
          <h1 className="text-2xl font-extrabold mb-1">الأكاديمية القانونية</h1>
          <p className="text-navy-300 text-sm mb-6">تعلم القانون من الصفر إلى الاحتراف</p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {academyStats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">{s.value}</div>
                  <div className="text-[11px] text-navy-300">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن دورة أو أستاذ..."
            className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 bg-white"
          />
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-navy-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-navy-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses grid */}
      <h2 className="font-bold text-navy-900 text-lg mb-4">أشهر الدورات</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-2 right-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${course.free ? 'bg-green-500 text-white' : 'bg-gold-500 text-navy-900'}`}>
                  {course.free ? 'مجاني' : 'مدفوع'}
                </span>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="text-[10px] bg-black/50 text-white px-2 py-0.5 rounded-full">{course.level}</span>
              </div>
            </div>
            <div className="p-4">
              <span className="text-[10px] text-gold-600 font-bold uppercase">{course.category}</span>
              <h3 className="font-bold text-navy-900 text-sm mt-1 mb-2 line-clamp-2 leading-snug">{course.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{course.instructor}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students.toLocaleString()}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                <span className="flex items-center gap-1 text-gold-500"><Star className="w-3 h-3 fill-current" />{course.rating}</span>
              </div>
              <button className="mt-3 w-full py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
                ابدأ الدورة <ChevronLeft className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
