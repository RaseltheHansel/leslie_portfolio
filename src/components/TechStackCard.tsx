import { techStack } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import type { Page } from '../data/portfolio';

export default function TechStackCard({ navigate }: { navigate: (p: Page) => void }) {
  const { dark } = useTheme();
  const cardCls = dark ? 'border-neutral-800 bg-neutral-900 text-white' : 'border-neutral-200 bg-white text-neutral-900';

  return (
    <div className={`rounded-2xl border p-6 transition-all duration-300 ${cardCls}`}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={dark ? 'text-neutral-400' : 'text-neutral-500'}>
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          <h2 className="text-sm font-bold">Skills</h2>
        </div>
        <button onClick={() => navigate('techstack')}
          className={`group flex items-center gap-1 text-xs transition-all duration-200
            ${dark ? 'text-neutral-500 hover:text-neutral-200' : 'text-neutral-400 hover:text-neutral-700'}`}>
          View All
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
      <div className="space-y-4">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <p className={`text-xs font-semibold mb-2 ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>{category}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span key={item}
                  className={`text-xs px-2.5 py-1 rounded-md border cursor-default
                    transition-all duration-150 hover:scale-105 hover:-translate-y-px
                    ${dark ? 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-violet-950/50 hover:border-violet-500 hover:text-violet-300'
                           : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-violet-50 hover:border-violet-400 hover:text-violet-700'}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
