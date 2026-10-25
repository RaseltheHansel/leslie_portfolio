import { about } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function AboutCard() {
  const { dark } = useTheme();

  const bodyText = dark ? 'text-neutral-300' : 'text-neutral-600';
  const subText  = dark ? 'text-neutral-400' : 'text-neutral-500';
  const monoText = dark ? 'text-neutral-500' : 'text-neutral-400';
  const divider  = dark ? 'border-neutral-800' : 'border-neutral-100';
  const cardCls  = dark
    ? 'border-neutral-800 bg-neutral-900 text-white'
    : 'border-neutral-200 bg-white text-neutral-900';

  return (
    <div className={`rounded-2xl border p-6 transition-colors ${cardCls}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <span className={`text-sm ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>👤</span>
        <h2 className="text-sm font-bold">About Me</h2>
      </div>

      {/* Bio */}
      {about.bio.map((p, i) => (
        <p key={i} className={`text-sm leading-relaxed mb-3 last:mb-0 ${bodyText}`}>{p}</p>
      ))}

      {/* Education */}
      <div className={`mt-5 pt-5 border-t ${divider}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm">🎓</span>
          <span className="text-sm font-bold">Education</span>
        </div>
        <div className="flex flex-col gap-3">
          {about.education.map((e, i) => (
            <div key={i}>
              <div className="font-bold text-sm">{e.school}</div>
              <div className={`text-xs mt-0.5 ${subText}`}>{e.degree}</div>
              <div className={`text-xs mt-0.5 font-mono ${monoText}`}>{e.years}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
