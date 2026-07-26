// src/constants/skills.js

export const SKILL_CATEGORIES = {
  PHOTOGRAPHY: 'ფოტოგრაფია',
  VIDEO: 'ვიდეო და ანიმაცია',
  DESIGN: 'გრაფიკა და UI/UX',
  CONTENT: 'კონტენტი და კოპირაითინგი',
};

export const SKILLS_LIST = [
  // ფოტოგრაფია
  { id: 'photo-portrait', name: 'პორტრეტული გადაღება', category: SKILL_CATEGORIES.PHOTOGRAPHY },
  { id: 'photo-product', name: 'პროდუქტის / საგნობრივი ფოტო', category: SKILL_CATEGORIES.PHOTOGRAPHY },
  { id: 'photo-event', name: 'ღონისძიებების გადაღება', category: SKILL_CATEGORIES.PHOTOGRAPHY },
  
  // ვიდეო
  { id: 'video-editing', name: 'ვიდეო მონტაჟი', category: SKILL_CATEGORIES.VIDEO },
  { id: 'video-reels', name: 'Reels / TikTok ვიდეოები', category: SKILL_CATEGORIES.VIDEO },
  { id: 'video-color', name: 'ფერების კორექცია (Color Grading)', category: SKILL_CATEGORIES.VIDEO },
  
  // დიზაინი
  { id: 'design-ui', name: 'UI/UX დიზაინი', category: SKILL_CATEGORIES.DESIGN },
  { id: 'design-brand', name: 'ბრენდინგი და ლოგო', category: SKILL_CATEGORIES.DESIGN },
  { id: 'design-social', name: 'სოციალური მედიის ბანერები', category: SKILL_CATEGORIES.DESIGN },
];

export const USER_ROLES = {
  CREATOR: 'კრეატორი',
  COMPANY: 'კომპანია',
};