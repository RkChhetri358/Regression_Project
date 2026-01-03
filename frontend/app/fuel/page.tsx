'use client';
import { useState, useEffect } from 'react';

export default function FuelPage() {
  const [speed, setSpeed] = useState(55);
  const [mpg, setMpg] = useState<number | null>(null);

  // Function to call the API
  const getMPG = async (val: number) => {
    const res = await fetch(`http://localhost:8000/predict-fuel?speed=${val}`);
    const data = await res.json();
    setMpg(data.mpg);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">Fuel Efficiency Curve</h1>
        
        <input 
          type="range" min="10" max="100" value={speed}
          className="w-full h-3 bg-indigo-100 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <p className="text-center mt-2 font-bold text-indigo-600">{speed} Speed</p>

        <button 
          onClick={() => getMPG(speed)}
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold"
        >
          Calculate Efficiency
        </button>

        {mpg && (
          <div className="mt-8 text-center animate-in fade-in">
            <p className="text-slate-500 text-sm uppercase">Predicted MPG</p>
            <p className="text-5xl font-black text-slate-900">{mpg}</p>
          </div>
        )}
      </div>
    </div>
  );
}