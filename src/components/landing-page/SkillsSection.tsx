import React from 'react';
import { skillsData } from '../base/skill/skill.data';
import { SkillItem } from '../base/skill/SkillItem';
import { Section } from './Section';

export function SkillsSection() {
  return (
    <div className="hidden sm:block w-full">
      <Section title="Skills">
        <div className="flex justify-between">
          {skillsData.map((skill) => (
            <div key={skill.title}>
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
      </Section>
    </div>
  );
}
