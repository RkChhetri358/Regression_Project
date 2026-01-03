'use client';
import { useState } from 'react';
import Header from '@/components/Header';

export default function LoanPage() {
  const [formData, setFormData] = useState({ score: '', income: '', employed: '1' });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { score, income, employed } = formData;
      const res = await fetch(
        `http://localhost:8000/predict-loan?score=${score}&income=${income}&employed=${employed}`
      );
      const data = await res.json();
      setResult(data.status);
    } catch (error) {
      alert("Check if your Python API is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[2rem] shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Loan Eligibility AI</h2>
        
        <form onSubmit={handlePredict} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-600 uppercase">Credit Score</label>
            <input
              type="number"
              className="w-full p-3 bg-slate-50 border rounded-xl text-black"
              placeholder="e.g. 700"
              onChange={(e) => setFormData({ ...formData, score: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600 uppercase">Annual Income ($)</label>
            <input
              type="number"
              className="w-full p-3 bg-slate-50 border rounded-xl text-black"
              placeholder="e.g. 50000"
              onChange={(e) => setFormData({ ...formData, income: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600 uppercase">Employment Status</label>
            <select
              className="w-full p-3 bg-slate-50 border rounded-xl text-black"
              onChange={(e) => setFormData({ ...formData, employed: e.target.value })}
            >
              <option value="1">Employed</option>
              <option value="0">Unemployed</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
          >
            {loading ? "Processing Rules..." : "Check Eligibility"}
          </button>
        </form>

        {result && (
          <div className={`mt-8 p-6 rounded-2xl border text-center animate-in zoom-in duration-300 ${
            result === 'Approved' 
            ? 'bg-emerald-50 border-emerald-100' 
            : 'bg-rose-50 border-rose-100'
          }`}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Decision</p>
            <h3 className={`text-3xl font-black ${
              result === 'Approved' ? 'text-emerald-700' : 'text-rose-700'
            }`}>
              {result}
            </h3>
          </div>
        )}
      </div>
    </main>
  );
}