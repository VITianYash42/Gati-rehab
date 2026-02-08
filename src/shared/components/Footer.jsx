import React from 'react';

const Footer = () => {
    return (
        <div className="pt-24 pb-12 text-center">
            <div className="inline-flex flex-col items-center">
                <div className="w-12 h-1 border-t-2 border-slate-200 mb-6 opacity-30"></div>
                <p className="text-slate-600 text-sm font-black uppercase tracking-[0.15em]">
                    © {new Date().getFullYear()} GATI REHAB
                </p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mt-4 max-w-md mx-auto leading-relaxed">
                    Measurements are approximate and intended for rehabilitation guidance only
                </p>
            </div>
        </div>
    );
};

export default Footer;
