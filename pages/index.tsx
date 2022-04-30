import { Header } from '~/components/base/header';
import { SkillsSection } from '~/components/index/SkillsSection';
import { Profile } from '~/components/index/Profile';
import ProjectsSection from '~/components/projects/ProjectsSection';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <Profile className={styles.profileHeight} />
      <div className="flex flex-col gap-8 sm:gap-16">
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
