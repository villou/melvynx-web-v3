export type SkillItem = {
  icon: React.ReactNode;
  title: string;
  isRainbow?: boolean;
};

export type SkillList = {
  title: string;
  items: SkillItem[];
};
