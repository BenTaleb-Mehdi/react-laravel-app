import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header="Dashboard"
        >
          
          <div>
        
                <header className="mt-8">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                        <div className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-2">
                           Dashboard Overview
                        </div>
                    </div>
                </header>
      
          </div>

            <div className="py-6 space-y-6">
                {/* Section 1: Quick Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <p className="text-sm font-medium text-gray-500">Chiffre d'Affaire</p>
                        <h3 className="text-2xl font-black text-slate-800">12,450.00 DH</h3>
                    </div>

                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                        </div>
                        <p className="text-sm font-medium text-gray-500">Clients Totaux</p>
                        <h3 className="text-2xl font-black text-slate-800">48</h3>
                    </div>

                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">5 En attente</span>
                        </div>
                        <p className="text-sm font-medium text-gray-500">Factures</p>
                        <h3 className="text-2xl font-black text-slate-800">124</h3>
                    </div>
                </div>

                {/* Section 2: Welcome Message / Main Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-20%] left-[-5%] w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-2">Mar7ba bik f l-Dashboard dyalk! 🚀</h2>
                        <p className="text-indigo-100 max-w-md opacity-90">
                            Kolshi khdam mzyan. Tqder t-bda t-qad les factures dyalk aw t-chouf l-list dyal les clients men hna.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-indigo-50 transition-colors">
                                Créer une facture
                            </button>
                            <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-white/30 transition-colors">
                                Voir Rapports
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}