// src/features/matching/components/MatchedCreatorsList.jsx
import React from 'react';
import { Badge } from '../../../components/ui/Badge';
import { SKILLS_LIST } from '../../../constants/skills';
import { calculateMatchScore } from '../utils/matchCalculator';

// Mock მონაცემები ტესტირებისთვის
const mockTask = {
  id: 'task-1',
  title: 'პროდუქტის გადაღება და სოციალური მედიის ბანერები',
  requiredSkills: ['photo-product', 'design-social'], // კომპანიას სჭირდება ეს 2 სქილი
};

export const MatchedCreatorsList = ({ currentUserSkills = [] }) => {
  const mockCreators = [
    {
      id: 'creator-1',
      name: 'გიორგი ბერიძე',
      role: 'ფოტოგრაფი & დიზაინერი',
      skills: ['photo-product', 'design-social', 'photo-portrait'],
    },
    {
      id: 'creator-2',
      name: 'ანა ნეიძე',
      role: 'ვიდეომეიკერი',
      skills: ['video-editing', 'video-reels'],
    },
    {
      id: 'creator-3',
      name: 'ნუცა კურდაძე',
      role: 'Front-End & UI/UX',
      // თუ სქილები არჩეულია, იყენებს დინამიურ სქილებს, თუ არა — default-ად 'design-ui'-ს
      skills: currentUserSkills.length > 0 ? currentUserSkills : ['design-ui'],
    },
  ];

  // იპოვე სქილის დასახელება ID-ით
  const getSkillName = (skillId) => {
    const skill = SKILLS_LIST.find((s) => s.id === skillId);
    return skill ? skill.name : skillId;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      {/* თასქის სათაური */}
      <div className="mb-6 pb-4 border-b border-slate-100">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
          აქტიური თასქი
        </span>
        <h2 className="text-xl font-bold text-slate-800 mt-1">
          {mockTask.title}
        </h2>
        
        <div className="mt-2 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500">მოთხოვნილი სქილები:</span>
          {mockTask.requiredSkills.map((skillId) => (
            <Badge key={skillId} label={getSkillName(skillId)} />
          ))}
        </div>
      </div>

      {/* შესაბამისი კრეატორების სია */}
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        შესაბამისი კრეატორები
      </h3>

      <div className="space-y-4">
        {mockCreators.map((creator) => {
          // ითვლება Match score თითოეულ კრეატორზე
          const { score, isMatch } = calculateMatchScore(
            creator.skills,
            mockTask.requiredSkills
          );

          return (
            <div
              key={creator.id}
              className={`p-4 rounded-lg border transition-all ${
                isMatch
                  ? 'border-slate-200 hover:border-indigo-300 bg-slate-50/50'
                  : 'border-slate-100 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900">{creator.name}</h4>
                  <p className="text-sm text-slate-500">{creator.role}</p>
                </div>

                {/* Match Score-ის ბეჯი */}
                <Badge
                  variant="match"
                  score={score}
                  label={isMatch ? 'Match' : 'არ ემთხვევა'}
                />
              </div>

              {/* კრეატორის სქილები */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {creator.skills.map((skillId) => (
                  <Badge key={skillId} label={getSkillName(skillId)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};