import React from 'react';
import { mockData } from '../data/mockData';
import { Link } from 'react-router-dom';

interface TechnicalClubsProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export const TechnicalClubs: React.FC<TechnicalClubsProps> = ({
  children,
  className = '',
  ...props
}) => {
  const { user, technicalClubs } = mockData;

  return (
    <div className={`flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 ${className}`} {...props}>
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white/5 backdrop-blur-md border-r border-slate-200/10 hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">hub</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">TRIBE</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium">Dashboard</span>
          </Link>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/20 text-primary border border-primary/30">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-medium">Clubs</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">event</span>
            <span className="font-medium">Events</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="font-medium">Profile</span>
          </div>

          <div className="pt-8 pb-2 px-4 uppercase text-xs font-bold text-slate-500 tracking-widest">Support</div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium">Settings</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
            <span className="material-symbols-outlined">help</span>
            <span className="font-medium">Help Center</span>
          </div>
        </nav>
        <div className="p-4 mt-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center">
            <p className="text-xs text-slate-400 mb-2">Technical Portal</p>
            <p className="font-bold">TRIBE v2.4</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
              <input className="w-full bg-slate-800/50 border-slate-700 rounded-xl pl-10 pr-4 py-2 focus:ring-primary focus:border-primary text-sm" placeholder="Search clubs, domains or leads..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">{user.name}</p>
                <p className="text-xs text-slate-400">{user.techRole}</p>
              </div>
              <img alt="Profile" className="w-10 h-10 rounded-full border-2 border-primary object-cover" src={user.avatar} />
            </div>
          </div>
        </header>

        {/* Grid Content */}
        <div className="p-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-2">CABINET</h2>
              <p className="text-lg font-medium text-primary tracking-widest uppercase">Technical Clubs and Chapters</p>
            </div>
            <Link to="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </Link>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {technicalClubs.map((club, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-[0_0_20px_rgba(37,123,244,0.4)] border border-transparent hover:border-primary hover:-translate-y-1">
                <div className={`h-32 w-full bg-gradient-to-br ${club.gradientClass} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                      <span className="material-symbols-outlined text-white text-xl">{club.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{club.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{club.description}</p>
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">{club.members} Members</span>
                    <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Suggest Club card */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group border-dashed border-2 border-slate-700 hover:border-primary flex items-center justify-center min-h-[220px]">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">add</span>
                </div>
                <p className="font-bold text-slate-400 group-hover:text-primary">Suggest Club</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalClubs;
