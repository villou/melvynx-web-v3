import { Header } from '~/components/base/header';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import { Profile } from '~/components/landing-page/Profile';
import { Section } from '~/components/landing-page/Section';
import { SkillsSection } from '~/components/landing-page/SkillsSection';
import { Contact } from '~/components/landing-page/Contact';
import ProjectsSection from '~/components/projects/ProjectsSection';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <Profile />
      <div className="flex flex-col gap-8 mt-16 sm:mt-0 sm:gap-16 items-center">
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
        <Contact />
      </div>
    </div>
  );
}
