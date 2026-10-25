import { useTheme } from '../context/ThemeContext';

export default function AvailabilityCard() {
  const { dark } = useTheme();
  const cardCls = dark ? 'border-neutral-800 bg-neutral-900 text-white' : 'border-neutral-200 bg-white text-neutral-900';

  return (
    <div className={`rounded-2xl border p-7 transition-all duration-300 ${cardCls}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-emerald-400' : 'bg-emerald-500'}`} />
        <h2 className="text-base font-bold">Availability</h2>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-base font-semibold">Open for Work</div>
          <div className={`text-sm mt-1 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Virtual Assistant • Admin & Finance Support
          </div>
          <div className={`text-sm mt-1 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Manila, Philippines • Work From Home • Full-time
          </div>
        </div>
        <span className={`text-[11px] font-mono px-2 py-1 rounded-full border
          ${dark ? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
            : 'border-emerald-500/40 text-emerald-700 bg-emerald-500/10'}`}>
          Available
        </span>
      </div>
    </div>
  );  
}
