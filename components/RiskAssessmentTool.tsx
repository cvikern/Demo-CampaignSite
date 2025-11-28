import React, { useState } from 'react';
import { analyzeInsiderRisk } from '../services/geminiService';
import { RiskAnalysisResponse } from '../types';

const RiskAssessmentTool: React.FC = () => {
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RiskAnalysisResponse | null>(null);

  const handleAnalyze = async () => {
    if (!context.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeInsiderRisk(context);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-12 mb-20 bg-brand-card border border-white/5 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Input Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-brand-orange/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ED7D55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-5.523 0-10 0-10z"></path><path d="M8.5 8.5v.01"></path><path d="M16 16v.01"></path><path d="M12 12v.01"></path><path d="M8.5 16v.01"></path><path d="M16 8.5v.01"></path></svg>
             </div>
             <h2 className="text-3xl font-bold text-white">AI Threat Forecaster</h2>
          </div>
          
          <p className="text-gray-400 mb-6">
            Describe your organization's current structure, recent layoffs, data access policies, or a specific scenario. Our Gemini-powered engine will predict potential insider risk vectors.
          </p>

          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g., We are a financial firm with 500 employees. We recently announced a 10% workforce reduction and use cloud storage without strict DLP policies..."
            className="w-full h-40 bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-orange/50 transition-colors resize-none mb-6"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading || !context}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              loading || !context 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-brand-orange hover:text-white'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Vector...
              </>
            ) : (
              'Run Simulation'
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-black/30 rounded-xl border border-white/5 p-6 h-full min-h-[400px]">
           {!result && !loading && (
             <div className="h-full flex flex-col items-center justify-center text-gray-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
               <p>Awaiting scenario data...</p>
             </div>
           )}

           {loading && (
             <div className="h-full flex flex-col items-center justify-center text-brand-orange animate-pulse">
               <p className="text-xl font-mono">PROCESSING NEURAL THREADS...</p>
             </div>
           )}

           {result && (
             <div className="animate-in fade-in duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-semibold">Risk Analysis Report</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    result.riskScore > 7 ? 'bg-red-500/20 text-red-500' : 
                    result.riskScore > 4 ? 'bg-yellow-500/20 text-yellow-500' : 
                    'bg-green-500/20 text-green-500'
                  }`}>
                    RISK SCORE: {result.riskScore}/10
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Summary</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{result.summary}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Identified Threats</h4>
                  <ul className="space-y-2">
                    {result.keyThreats.map((threat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-brand-orange mt-1">⚠</span>
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                   <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Strategic Recommendations</h4>
                   <div className="grid gap-2">
                      {result.recommendations.map((rec, i) => (
                        <div key={i} className="bg-white/5 p-3 rounded border-l-2 border-brand-orange">
                          <p className="text-xs text-white">{rec}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentTool;
