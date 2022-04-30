import { Header } from '~/components/base/header';
import { SkillsSection } from '~/components/index/SkillsSection';
import { Profile } from '~/components/index/Profile';
import ProjectsSection from '~/components/projects/ProjectsSection';
import styles from '../styles/Index.module.css';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import { Section } from '~/components/index/Section';

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <Profile className={styles.profileHeight} />
      <div className="flex flex-col gap-8 sm:gap-16 items-center">
        <Section title="Get the best ressources in your inbox">
          <div className="max-w-lg m-auto flex flex-col gap-4">
            <EmailsForm />
            <p className="text-base text-center">
              🔒 The emails are free and in french 🇫🇷, your data will remain
              secure and you can unsubscribe at any time.
            </p>
          </div>
        </Section>

        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
