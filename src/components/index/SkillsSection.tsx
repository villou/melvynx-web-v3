import React from 'react';
import { skillsData } from '../base/skill/skill.data';
import { SkillItem } from '../base/skill/SkillItem';

export function SkillsSection() {
  return (
    <div>
      <h2 className="text-4xl text-center">Skills</h2>
      <div className="flex justify-between mt-8">
        {skillsData.map((skill) => (
          <div>
            <h3 className="text-2xl font-bold">{skill.title}</h3>
            <ul className="flex flex-col gap-2 mt-4">
              {skill.items.map((item) => (
                <SkillItem key={item.title} {...item}>
                  {item.title}
                </SkillItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
