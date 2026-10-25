import { useEffect, useState } from 'react';
import { techStackAll } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

function useFadeIn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return visible;
}

function AnimatedSection({ children, index }: { children: React.ReactNode; index: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 80 + index * 90);
    return () => clearTimeout(id);
  }, [index]);
  return (
    <div style={{
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 0.45s ease, transform 0.45s ease',
    }}>
      {children}
    </div>
  );
}

export default function TechStackPage({ onBack }: { onBack: () => void }) {
  const { dark } = useTheme();
  const visible = useFadeIn();
  return (
    <div className={`min-h-screen transition-colors ${dark ? 'bg-neutral-950 text-white' : 'page-bg text-neutral-900'}`}>
      <div
        className="max-w-4xl mx-auto px-6 py-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <div className="flex items-center gap-4 mb-10">
          <button onClick={onBack}
            className={`group text-sm flex items-center gap-1.5 transition-all duration-200
              ${dark ? 'text-neutral-400 hover:text-white' : 'text-neutral-400 hover:text-neutral-700'}`}>
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Back to Home
          </button>
          <h1 className="text-2xl font-extrabold">Skills</h1>
        </div>
        {Object.entries(techStackAll).map(([cat, skills], i) => (
          <AnimatedSection key={cat} index={i}>
            <div className="mb-10">
              <h2 className="text-base font-bold mb-3">{cat}</h2>
              <div className="flex flex-wrap gap-1.5">
                {(skills as string[]).map((s, j) => (
                  <BadgeItem key={s} label={s} sectionIndex={i} itemIndex={j} dark={dark} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

function BadgeItem({ label, sectionIndex, itemIndex, dark }: { label: string; sectionIndex: number; itemIndex: number; dark: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 120 + sectionIndex * 90 + itemIndex * 30);
    return () => clearTimeout(id);
  }, [sectionIndex, itemIndex]);
  return (
    <span
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.95)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
      className={`text-xs px-3 py-1 rounded-md border font-mono cursor-default
        transition-all duration-150 hover:scale-105 hover:-translate-y-px
        ${dark
          ? 'border-neutral-700 text-neutral-300 bg-neutral-800 hover:bg-neutral-700 hover:border-neutral-500'
          : 'border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-100 hover:border-neutral-300'}`}
    >
      {label}
    </span>
  );
}
