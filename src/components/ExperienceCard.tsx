import { experience } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import type { Page } from '../data/portfolio';

export default function ExperienceCard({ navigate }: { navigate: (p: Page) => void }) {
  const { dark } = useTheme();
  const cardCls = dark ? 'border-neutral-800 bg-neutral-900 text-white' : 'border-neutral-200 bg-white text-neutral-900';
  const lineColor = dark ? 'bg-neutral-700' : 'bg-neutral-200';

  return (
    <div className={`rounded-2xl border p-6 transition-all duration-300 ${cardCls}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className={`text-sm ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>💼</span>
          <h2 className="text-sm font-bold">Experience</h2>
        </div>
        <button onClick={() => navigate('experience')}
          className={`group flex items-center gap-1 text-xs transition-all duration-200
            ${dark ? 'text-neutral-500 hover:text-neutral-200' : 'text-neutral-400 hover:text-neutral-700'}`}>
          View All
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-[9px] top-2 bottom-2 w-px ${lineColor}`} />

        <div className="flex flex-col gap-0">
          {experience.map((exp, i) => (
            <div key={i}
              className={`group relative flex items-start gap-4 py-3 px-1 -mx-1 rounded-lg
                transition-colors duration-150
                ${dark ? 'hover:bg-neutral-800/40' : 'hover:bg-neutral-50'}`}>
              {/* Square dot */}
              <div className={`relative z-10 mt-1 w-[18px] h-[18px] shrink-0 rounded-sm border-2 transition-all duration-200
                ${exp.active
                  ? dark ? 'bg-white border-white' : 'bg-neutral-900 border-neutral-900'
                  : dark ? 'bg-neutral-900 border-neutral-600' : 'bg-white border-neutral-300'}`}
              />
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-bold leading-snug ${exp.italic ? 'italic' : ''}`}>{exp.title}</div>
                <div className={`text-xs mt-0.5 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{exp.sub}</div>
              </div>
              <div className={`text-xs font-mono shrink-0 mt-0.5 ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{exp.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
