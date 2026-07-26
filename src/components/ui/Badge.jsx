// src/components/ui/Badge.jsx
import React from 'react';

export const Badge = ({ label, variant = 'default', score }) => {
  // დინამიური ფერები Match-ინგის ქულის მიხედვით
  const getVariantStyle = () => {
    if (variant === 'match') {
      if (score >= 80) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      if (score >= 50) return 'bg-amber-100 text-amber-800 border-amber-300';
      return 'bg-slate-100 text-slate-700 border-slate-300';
    }
    return 'bg-slate-100 text-slate-800 border-slate-200';
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getVariantStyle()}`}>
      {label}
      {score !== undefined && ` • ${score}% დამთხვევა`}
    </span>
  );
};