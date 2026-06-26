import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Home, MessageSquare, BookOpen, Lightbulb } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const sidebarNav = [
  { icon: Home, label: 'الرئيسية' },
  { icon: MessageSquare, label: 'عام' },
  { icon: BookOpen, label: 'الاستشارات' },
  { icon: Lightbulb, label: 'الموارد' },
];

const suggestions = [
  'ما هو تعريف العقد في القانون المدني المغربي؟',
  'شرح إجراءات 2 من 3 التقاضي في القضايا الجنائية',
  'ما هي حقوق العامل في حالة الفصل التعسفي في القانون المغربي؟',
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'assistant',
    content: 'مرحباً! أنا مساعدك القانوني الذكي. يمكنني الإجابة على أي موضوع قانوني في القانون المغربي وساعدتك في البحث والفهم. كيف يمكنني مساعدتك اليوم؟',
  },
];

const autoReplies: Record<string, string> = {
  'عقد': 'العقد في القانون المدني المغربي هو اتفاق يلتزم بموجبه شخص أو أشخاص آخرون بمنح أو فعل أو الامتناع عن فعل شيء ما. ينعقد العقد بإيجاب وقبول، ويشترط لصحته: أهلية المتعاقدين، وتراضيهم، ومحل قابل للتعامل، وسبب مشروع.',
  'فصل': 'الفصل التعسفي في قانون الشغل المغربي هو إنهاء العقد دون مبرر مشروع. يحق للعامل في هذه الحالة الحصول على: تعويض عن الفصل التعسفي، وتعويض الإخطار، وتعويض عن العطلة المؤدى عنها.',
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [activeSide, setActiveSide] = useState('الرئيسية');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const key = Object.keys(autoReplies).find((k) => text.includes(k));
      const reply = key
        ? autoReplies[key]
        : 'شكراً على سؤالك. يمكنني مساعدتك في مجال القانون المغربي. يُرجى توضيح سؤالك أكثر حتى أتمكن من تقديم إجابة دقيقة ومفيدة.';
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6 h-[calc(100vh-120px)] flex gap-5">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 hidden lg:block">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-900">مساعد القانوني</div>
              <div className="text-[10px] text-green-500 font-medium">● متاح الآن</div>
            </div>
          </div>
          <ul className="space-y-1">
            {sidebarNav.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveSide(item.label)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSide === item.label ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-navy-900 rounded-xl p-4 text-white">
          <p className="text-xs text-navy-300 leading-relaxed">المساعد القانوني يُقدم معلومات عامة فقط وليس استشارة قانونية رسمية.</p>
        </div>
      </aside>

      {/* Chat area */}
      <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Chat header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
            <Bot className="w-4 h-4 text-gold-400" />
          </div>
          <div>
            <div className="font-bold text-navy-900 text-sm">مرحباً! أنا مساعدك القانوني الذكي</div>
            <div className="text-[10px] text-gray-400">يمكنك أن تسألني عن أي موضوع قانوني</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-gold-500' : 'bg-navy-900'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-navy-900" /> : <Bot className="w-4 h-4 text-gold-400" />}
              </div>
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-navy-900 text-white rounded-tl-sm'
                    : 'bg-gray-100 text-navy-900 rounded-tr-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-gold-400" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-xs border border-navy-200 text-navy-700 hover:bg-navy-50 px-3 py-1.5 rounded-full transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
              placeholder="اكتب سؤالك القانوني هنا..."
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
              dir="rtl"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-8 h-8 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white rounded-lg flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
