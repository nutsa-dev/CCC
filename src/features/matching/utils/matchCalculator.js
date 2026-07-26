// src/features/matching/utils/matchCalculator.js

/**
 * ითვლის დამთხვევის (Match) პროცენტს კრეატორის სქილებსა და თასქის მოთხოვნებს შორის
 * @param {Array<string>} creatorSkills - კრეატორის სქილების ID-ების მასივი
 * @param {Array<string>} requiredSkills - თასქში მოთხოვნილი სქილების ID-ების მასივი
 * @returns {Object} { score: number, matchedSkills: Array<string>, isMatch: boolean }
 */
export const calculateMatchScore = (creatorSkills = [], requiredSkills = []) => {
  if (!requiredSkills || requiredSkills.length === 0) {
    return { score: 0, matchedSkills: [], isMatch: false };
  }

  // ვპოულობთ საერთო სქილების ID-ებს
  const matchedSkills = requiredSkills.filter(skillId => 
    creatorSkills.includes(skillId)
  );

  // ითვლება პროცენტულობა (მაგ. 2 მოთხოვნილიდან 2-ვე თუ აქვს = 100%)
  const score = Math.round((matchedSkills.length / requiredSkills.length) * 100);

  return {
    score,
    matchedSkills,
    isMatch: score > 0,
  };
};