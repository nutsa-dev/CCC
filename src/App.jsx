// src/App.jsx
import React, { useState } from 'react';
import { CreatorSkillSelector } from './features/matching/components/CreatorSkillSelector';
import { MatchedCreatorsList } from './features/matching/components/MatchedCreatorsList';

function App() {
  // დინამიური state კრეატორის არჩეული სქილებისთვის (ნაგულისხმევად ვადებთ ორ სქილს)
  const [userSkills, setUserSkills] = useState(['design-social']);

  // სქილის ჩართვა/გამორთვა (Toggle)
  const handleToggleSkill = (skillId) => {
    setUserSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

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

      <main className="space-y-6">
        {/* სქილების სელექტორი კრეატორისთვის */}
        <CreatorSkillSelector
          selectedSkills={userSkills}
          onToggleSkill={handleToggleSkill}
        />

        {/* თასქის და კრეატორების სია */}
        <MatchedCreatorsList currentUserSkills={userSkills} />
      </main>
    </div>
  );
}

export default App;