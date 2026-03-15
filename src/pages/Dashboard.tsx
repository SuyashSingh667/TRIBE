import React from 'react';
import { mockData } from '../data/mockData';
import { Link } from 'react-router-dom';
import cardBgImage from '../assets/card-bg.jpg';

interface DashboardProps {
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  children,
  className = '',
  ...props
}) => {
  const { dashboard } = mockData;

  return (
    <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 ${className}`} {...props}>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-slate-200/10 px-4 md:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button className="flex items-center px-5 py-2 text-sm font-bold bg-[#2b6eff] text-white rounded-full hover:bg-[#1a5ceb] transition-colors shadow-lg shadow-blue-500/20">
              DON'T KNOW WHAT TO JOIN?
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-white/5 backdrop-blur-md hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <button className="p-2.5 rounded-xl bg-white/5 backdrop-blur-md hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-12 flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            {dashboard.hero.title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            {dashboard.hero.description}
          </p>
        </section>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dashboard.cards.map((card) => (
            <Link
              key={card.id}
              to={card.path}
              className={`hover:-translate-y-2 group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border ${card.borderClass} p-8 flex flex-col justify-between min-h-[420px] cursor-pointer shadow-2xl ${card.shadowClass} transition-transform duration-200`}
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 opacity-15 group-hover:scale-105 transition-transform duration-700 mix-blend-screen"
                style={{ backgroundImage: `url(${cardBgImage})` }}
              />
              
              {/* Gradient Overlay for Readability */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradientClass} z-0 opacity-80 group-hover:opacity-90 transition-opacity`} />

              <div className="relative z-10 absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className={`material-symbols-outlined text-8xl ${card.textClass}`}>{card.bgIcon}</span>
              </div>
              <div className="relative z-10">
                <div className={`size-12 rounded-lg flex items-center justify-center mb-6 ${card.bgClass} ${card.textClass}`}>
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 uppercase">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.description}</p>
              </div>
              <div className={`flex items-center gap-2 mt-8 font-bold group-hover:gap-4 transition-all ${card.textClass}`}>
                <span>{card.actionText}</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto px-10 py-8 border-t border-slate-200/5 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">© 2024 TRIBE ECOSYSTEM. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Protocol</a>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
