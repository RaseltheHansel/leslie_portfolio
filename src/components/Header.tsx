import { useState } from 'react';
import { about } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import type { Page } from '../data/portfolio';

const PHOTO_DEFAULT = '/images/profile-default.jpg';
const PHOTO_HOVER   = '/images/profile-hover.jpg';

interface HeaderProps { navigate: (p: Page) => void; }

export default function Header({ navigate }: HeaderProps) {
  const { dark, toggle } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`rounded-2xl border p-6 mb-4 transition-all duration-300
      ${dark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
      <div className="flex items-start gap-5">

        {/* Photo crossfade */}
        <div className="shrink-0 select-none">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative w-40 h-40 rounded-2xl overflow-hidden cursor-pointer
              transition-all duration-300 shadow-sm ${hovered ? 'shadow-md scale-[1.02]' : ''}`}
          >
            <img src={PHOTO_DEFAULT} alt={about.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`} />
            <img src={PHOTO_HOVER} alt={`${about.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-extrabold">{about.name}</h1>
          </div>
          <div className={`flex items-center gap-1.5 text-sm mb-1 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <span>📍</span>{about.location}
          </div>
          <div className={`text-sm mb-4 ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>{about.tagline}</div>

          <div className="flex gap-2 flex-wrap">
            {/* Download Resume */}
            <a href="/Leslie_Gabriel_Resume_ATS.pdf" download="Leslie_Gabriel_Resume_ATS.pdf"
              className="group px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-semibold
                flex items-center gap-1.5 hover:bg-neutral-700 active:scale-95 transition-all duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-y-0.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>

            {/* Experience */}
            <button onClick={() => navigate('experience')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5
                border transition-all duration-200 active:scale-95
                ${dark ? 'border-neutral-700 text-neutral-200 hover:border-neutral-400 hover:bg-neutral-800'
                       : 'border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50'}`}>
              💼 Experience
            </button>

            {/* Connect → jumps to footer contact section */}
            <a href="#contact"
              className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5
                border transition-all duration-200 active:scale-95
                ${dark ? 'border-neutral-700 text-neutral-200 hover:border-neutral-400 hover:bg-neutral-800'
                       : 'border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50'}`}>
              👥 Connect
            </a>
          </div>
        </div>

        {/* Dark mode toggle only */}
        <button onClick={toggle} title={dark ? 'Light mode' : 'Dark mode'}
          className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm
            transition-all duration-200 active:scale-90 shrink-0
            ${dark ? 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:border-neutral-500'
                   : 'border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'}`}>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}
