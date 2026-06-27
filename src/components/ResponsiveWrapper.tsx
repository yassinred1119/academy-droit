import React from 'react';

interface ResponsiveWrapperProps {
  desktopView: React.ReactNode;
  mobileView: React.ReactNode;
}

export default function ResponsiveWrapper({ desktopView, mobileView }: ResponsiveWrapperProps) {
  return (
    <div className="w-full min-h-screen">
      {/* 📱 نسخة الهاتف: تظهر فقط على الشاشات الصغيرة وتختفي تماماً على شاشات الحاسوب الكبيرة */}
      <div className="block md:hidden w-full px-4 py-4 bg-slate-50 dark:bg-zinc-950 pb-20">
        {mobileView}
      </div>

      {/* 💻 نسخة الحاسوب: تختفي في الهاتف وتظهر بكامل عرضها وتصميمها الحالي في شاشات الحواسب */}
      <div className="hidden md:block w-full">
        {desktopView}
      </div>
    </div>
  );
}
