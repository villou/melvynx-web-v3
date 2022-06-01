import React from 'react';
import { skillsData } from '../../base/skill/skill.data';
import { SkillItem } from '../../base/skill';
import { Section } from '../Section';
import { FadeUpInView } from '~/components/hooks-based/InView';

export function SkillsSection() {
  return (
    <div className="hidden sm:block w-full">
      <Section title="Skills">
        <div className="flex justify-between">
          {skillsData.map((skill, i) => (
            <div key={skill.title}>
              <FadeUpInView delay={100 + i * 100}>
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </FadeUpInView>
              <ul className="flex flex-col gap-2 mt-4">
                {skill.items.map((item, y) => (
                  <FadeUpInView delay={120 + i * 100 + y * 10} key={item.title}>
                    <span>
                      <SkillItem {...item}>{item.title}</SkillItem>
                    </span>
                  </FadeUpInView>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
