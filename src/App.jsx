// src/App.jsx
import React from 'react';
import { MatchedCreatorsList } from './features/matching/components/MatchedCreatorsList';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <header className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          CCC — Content Creator & Company Matching
        </h1>
        <p className="text-slate-600 mt-2">
          პლატფორმა კრეატორებისა და კომპანიების დასაკავშირებლად
        </p>
      </header>

      <main>
        <MatchedCreatorsList />
      </main>
    </div>
  );
}

export default App;