// src/features/matching/components/CreatorSkillSelector.jsx
import React from 'react';
import { SKILLS_LIST } from '../../../constants/skills';
import { Badge } from '../../../components/ui/Badge';

export const CreatorSkillSelector = ({ selectedSkills = [], onToggleSkill }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-800">
          კრეატორის პროფილი — სქილების მართვა
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          მონიშნე შენი უნარები, რომ რეალურ დროში დაინახო Match % აქტიურ თასქებთან:
        </p>
      </div>

      {/* სქილების ასარჩევი ღილაკები */}
      <div className="flex flex-wrap gap-2">
        {SKILLS_LIST.map((skill) => {
          const isSelected = selectedSkills.includes(skill.id);

          return (
            <button
              key={skill.id}
              onClick={() => onToggleSkill(skill.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-300'
              }`}
            >
              {skill.name} {isSelected && '✓'}
            </button>
          );
        })}
      </div>

      {/* არჩეული სქილების ჯამური რაოდენობა */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          არჩეულია: <strong className="text-slate-800">{selectedSkills.length}</strong> უნარი
        </span>

        {selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {selectedSkills.map((skillId) => {
              const skill = SKILLS_LIST.find((s) => s.id === skillId);
              return <Badge key={skillId} label={skill ? skill.name : skillId} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};