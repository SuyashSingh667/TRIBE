import React from 'react';
import { mockData } from '../data/mockData';
import { Link } from 'react-router-dom';

interface CulturalClubsProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export const CulturalClubs: React.FC<CulturalClubsProps> = ({
  children,
  className = '',
  ...props
}) => {
  const { culturalClubs } = mockData;

  return (
    <div className={`bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col ${className}`} {...props}>
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 lg:px-20">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">hub</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">TRIBE</h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <main className="flex-1 px-6 py-10 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-none tracking-tighter uppercase">COUNCIL</h1>
              <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Cultural Clubs</p>
            </div>
            <Link to="/dashboard" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold transition-all group">
              <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span>Back to Dashboard</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {culturalClubs.map((club, i) => (
              <div key={i} className="relative group aspect-square rounded-xl overflow-hidden bg-primary/5 backdrop-blur-md border border-white/10 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${club.image})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-bold leading-tight">{club.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 lg:px-20 border-t border-slate-200 dark:border-slate-800 bg-white/5 dark:bg-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 TRIBE Membership. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Terms of Service</a>
            <a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CulturalClubs;
