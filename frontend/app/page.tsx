'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import PredictForm from '@/components/PredictForm';
import ResultDisplay from '@/components/ResultDisplay';

export default function Home() {
  const [salary, setSalary] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 antialiased">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-md border border-slate-100">
        
        <Header />

        <PredictForm 
          onResult={setSalary} 
          setLoading={setLoading} 
          loading={loading} 
        />

        <ResultDisplay salary={salary} />

        <div className="mt-10 pt-6 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-400 font-medium">
            CLIENT: NEXT.JS (TSX) • API: FASTAPI • ENGINE: SCIKIT-LEARN
          </p>
        </div>
      </div>
    </main>
  );
}