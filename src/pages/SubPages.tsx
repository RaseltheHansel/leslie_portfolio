import { useEffect, useState } from 'react';
import { experience } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

function useFadeIn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return visible;
}

function AnimatedItem({ children, index }: { children: React.ReactNode; index: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 80 + index * 70);
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

function PageShell({ title, onBack, children }: { title: string; onBack: () => void; children: React.ReactNode }) {
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
          <button
            onClick={onBack}
            className={`group text-sm flex items-center gap-1.5 transition-all duration-200
              ${dark ? 'text-neutral-400 hover:text-white' : 'text-neutral-400 hover:text-neutral-700'}`}
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Back to Home
          </button>
          <h1 className="text-2xl font-extrabold">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ExperiencePage({ onBack }: { onBack: () => void }) {
  const { dark } = useTheme();
  const lineColor = dark ? 'bg-neutral-700' : 'bg-neutral-200';
  return (
    <PageShell title="Experience" onBack={onBack}>
      <div className="relative max-w-2xl">
        <div className={`absolute left-[9px] top-2 bottom-2 w-px ${lineColor}`} />
        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <AnimatedItem key={i} index={i}>
              <div
                className={`group relative flex items-start gap-5 py-4 px-2 -mx-2 rounded-xl
                  transition-colors duration-150
                  ${dark ? 'hover:bg-neutral-800/50' : 'hover:bg-neutral-50'}`}
              >
                <div className={`relative z-10 mt-1 w-[18px] h-[18px] shrink-0 rounded-sm border-2 transition-all duration-200
                  ${exp.active
                    ? dark ? 'bg-white border-white' : 'bg-neutral-900 border-neutral-900'
                    : dark ? 'bg-neutral-900 border-neutral-600' : 'bg-white border-neutral-300'}`}
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className={`font-bold text-sm leading-snug ${exp.italic ? 'italic' : ''}`}>{exp.title}</div>
                    <div className={`text-xs font-mono shrink-0 ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{exp.year}</div>
                  </div>
                  <div className={`text-xs mt-0.5 italic ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{exp.sub}</div>
                  {exp.bullets && (
                    <ul className={`mt-2 space-y-1 text-sm list-disc pl-4 ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
