'use client';
import { useState, FormEvent } from 'react';
import { PredictFormProps, PredictionResponse } from '../types/api';

export default function PredictForm({ onResult, setLoading, loading }: PredictFormProps) {
  const [years, setYears] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!years) return;

    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/predict-salary?years=${years}`);
      
      if (!response.ok) throw new Error("API Connection Failed");
      
      const data: PredictionResponse = await response.json();
      onResult(data.salary);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      alert("Please ensure the Python FastAPI server is running on localhost:8000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="years" className="block text-sm font-semibold text-slate-700 uppercase tracking-wider">
          Years of Experience
        </label>
        <input
          id="years"
          type="number"
          step="0.1"
          min="0"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="e.g., 5.5"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading || !years}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95 disabled:opacity-50"
      >
        {loading ? "Analyzing Model..." : "Calculate Prediction"}
      </button>
    </form>
  );
}