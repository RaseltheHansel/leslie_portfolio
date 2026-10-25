import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import type { Page } from './data/portfolio';

// Components
import Header from './components/Header';
import AboutCard from './components/AboutCard';
import ExperienceCard from './components/ExperienceCard';
import TechStackCard from './components/TechStackCard';
import AvailabilityCard from './components/AvailabilityCard';
import FooterCard from './components/FooterCard';

// Pages
import TechStackPage from './pages/TechStackPage';
import { ExperiencePage } from './pages/SubPages';

// ── Home ──────────────────────────────────────────────────────────────────────
function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const { dark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors
      ${dark ? 'bg-neutral-950 text-white' : 'page-bg text-neutral-900'}`}>
      <div className="max-w-5xl mx-auto px-6 py-6">

        <Header navigate={navigate} />

        <div className="grid grid-cols-2 gap-4 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <AboutCard />
            <AvailabilityCard />
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4">
            <ExperienceCard navigate={navigate} />
            <TechStackCard navigate={navigate} />
          </div>
        </div>

        <FooterCard />

        {/* Copyright */}
        <div className={`text-center text-xs mt-6 mb-2
          ${dark ? 'text-neutral-600' : 'text-neutral-400'}`}>
          © 2026 Leslie Yciar D. Gabriel. All rights reserved.
        </div>
      </div>
    </div>
  );
}

// ── Router ────────────────────────────────────────────────────────────────────
function Router() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'techstack')      return <TechStackPage    onBack={() => setPage('home')} />;
  if (page === 'experience')     return <ExperiencePage   onBack={() => setPage('home')} />;

  return <HomePage navigate={setPage} />;
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
