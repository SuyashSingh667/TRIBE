import React from 'react';
import { mockData } from '../data/mockData';
import { Link } from 'react-router-dom';

export const SportsCommittee: React.FC = () => {
  const { user, sportsClubs } = mockData;

  return (
    <div className="relative min-h-screen w-full flex-col overflow-x-hidden font-display bg-[#161a23] text-slate-100">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#161a23] px-4 md:px-10 py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center justify-center p-2 rounded-lg bg-blue-500 text-white">
              <span className="material-symbols-outlined text-xl">pie_chart</span>
            </Link>
            <h2 className="text-xl font-black tracking-tight text-white mt-1">TRIBE</h2>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
             <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
             <input 
               type="text" 
               placeholder="Search clubs..." 
               className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
             />
          </div>

          <div className="flex items-center gap-3">
            <button className="size-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-slate-300">notifications</span>
            </button>
            <div className="size-10 rounded-full bg-slate-800 border-2 border-white/10 p-0.5 overflow-hidden">
              <img alt="User profile" className="w-full h-full object-cover rounded-full" src={user.avatar} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto w-full px-4 md:px-10 py-12 flex-1 flex flex-col">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="text-5xl md:text-[56px] font-black tracking-tighter mb-2 flex flex-wrap gap-2">
              <span className="text-white">SPORTS</span>
              <span className="text-[#3b82f6]">COMMITTEE</span>
            </h1>
            <p className="text-slate-400 font-bold tracking-[0.2em] text-sm uppercase">
              Elite Sports Clubs Management
            </p>
          </div>
          <Link 
            to="/dashboard"
            className="flex items-center gap-2 px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Dashboard
          </Link>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
          {sportsClubs.map((club, i) => (
            <div 
              key={i} 
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background gradient block for when images load/fail */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 rounded-2xl"></div>
              
              <img 
                src={club.image} 
                alt={club.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-lg mb-2 relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform">{club.name}</h3>
                <div className="h-1 w-6 bg-[#3b82f6] rounded-full mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="flex justify-center mb-10">
          <Link 
            to="/dashboard"
            className="flex items-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold rounded-full transition-colors border border-white/10"
          >
            <span className="material-symbols-outlined text-sm">keyboard_double_arrow_left</span>
            BACK TO DASHBOARD
          </Link>
        </div>

      </main>
    </div>
  );
};

export default SportsCommittee;
