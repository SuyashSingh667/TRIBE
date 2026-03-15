import React, { useState } from "react";
import { mockData } from "../data/mockData";
import { useNavigate } from "react-router-dom";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { hero, registration } = mockData.landing;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      navigate("/dashboard");
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden font-sans bg-[#0f172a] selection:bg-blue-500/30">

      {/* Background Effects */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-blue-600/10 via-[#0f172a] to-[#0f172a] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <div className="relative px-6 py-4 w-full max-w-7xl mx-auto z-50">
        <header className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold">T</span>
            </div>

            <span className="text-[32px] font-black tracking-tight text-white">
              TRIBE
            </span>

            <nav className="hidden md:flex items-center gap-6 ml-8 text-sm text-white/70">
              <div className="relative group cursor-pointer z-50">
                <span className="hover:text-white transition-colors py-2 flex items-center gap-1">
                  About
                </span>
                
                {/* Tooltip Description */}
                <div className="absolute top-full left-0 mt-4 w-[360px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-[#1f2940]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50 relative">
                    {/* Tooltip Triangle Component */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-[#1f2940]/95 border-t border-l border-white/10 rotate-45"></div>
                    
                    <p className="text-xs text-slate-300 leading-relaxed font-medium mt-1">
                      CampusConnect is a centralized web platform designed to organize and simplify college club activities and events.
                      <br/><br/>
                      It allows students to explore clubs, understand their activities, and easily track upcoming events.
                      <br/><br/>
                      The platform includes a calendar-based view so students can quickly see what is happening on campus and when.
                      <br/><br/>
                      Club administrators can manage events, update club information, and share important details in one place.
                      <br/><br/>
                      Built using React and a structured backend, the system improves communication, participation, and overall campus engagement.
                    </p>
                  </div>
                </div>
              </div>
              <span className="hover:text-white cursor-pointer py-2">Features</span>
              <span className="hover:text-white cursor-pointer py-2">Clubs</span>
            </nav>
          </div>

          {/* SIGN IN */}
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-6 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white rounded-full transition border border-white/10"
          >
            Sign In
          </button>
        </header>

        {/* LOGIN MODAL */}
        {showLoginModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-[#1f2940] border border-white/10 p-8 rounded-[30px] shadow-2xl w-full max-w-[400px] relative animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => setShowLoginModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div className="mb-8 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 mx-auto mb-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h2 className="text-[24px] font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-slate-400 text-sm">Enter your details to sign in</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                <input
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Email Address"
                  type="email"
                  className="h-[50px] bg-white/5 border border-white/10 rounded-xl px-4 outline-none text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500"
                />
                
                <input
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Password"
                  type="password"
                  className="h-[50px] bg-white/5 border border-white/10 rounded-xl px-4 outline-none text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500 tracking-widest pt-1"
                />

                <button
                  type="submit"
                  className="h-[52px] mt-4 bg-[#2b6eff] text-white font-semibold rounded-full hover:bg-[#1a5ceb] transition shadow-lg shadow-blue-500/20"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* HERO */}
      <main className="flex-grow flex items-center justify-center relative z-10 py-16 px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">

            <p className="text-blue-400 font-semibold uppercase text-sm tracking-wide">
              Campus Club Platform
            </p>

            <h1 className="text-[120px] lg:text-[150px] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-200 to-blue-500">
              {hero.title}
            </h1>

            <p className="text-[20px] text-slate-300 max-w-xl leading-[1.6]">
              Discover campus clubs, explore events, and track everything
              happening around you — all in one place with a simple calendar view.
            </p>

            {/* FEATURES */}
            <div className="flex gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">📅 Event Calendar</span>
              <span className="flex items-center gap-2">🏛 Explore Clubs</span>
              <span className="flex items-center gap-2">🚀 Easy Discovery</span>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:justify-self-end w-full max-w-[460px]">

            <div className="bg-[#1f2940]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[30px] shadow-2xl hover:scale-[1.01] transition-transform duration-300 flex flex-col gap-6">

              <div>
                <h2 className="text-[24px] font-bold text-white">
                  Start your journey
                </h2>
                <p className="text-slate-400 text-sm">
                  Create an account to access the platform.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Full Name"
                  className="h-[50px] bg-white/5 border border-white/10 rounded-xl px-4 outline-none text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500"
                />

                <input
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="Email Address"
                  type="email"
                  className="h-[50px] bg-white/5 border border-white/10 rounded-xl px-4 outline-none text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500"
                />

                <input
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value
                    }))
                  }
                  placeholder="Password"
                  type="password"
                  className="h-[50px] bg-white/5 border border-white/10 rounded-xl px-4 outline-none text-white placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500"
                />

                {/* CTA */}
                <button
                  type="submit"
                  className="h-[52px] mt-2 bg-[#2b6eff] text-white font-semibold rounded-full hover:bg-[#1a5ceb] transition shadow-lg shadow-blue-500/20"
                >
                  Create Account
                </button>

                {/* GOOGLE LOGIN */}
                <button
                  type="button"
                  className="h-[50px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center gap-3 text-white hover:bg-white/10 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

              </form>

              <p className="text-xs text-slate-500 text-center">
                By signing up, you agree to our{" "}
                <span className="text-blue-400 hover:underline cursor-pointer">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-blue-400 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;