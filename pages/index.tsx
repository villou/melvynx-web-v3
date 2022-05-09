import { Header } from '~/components/base/header';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import { Contact } from '~/components/landing-page/contact/Contact';
import Footer from '~/components/footer/Footer';
import { Profile } from '~/components/landing-page/profile/Profile';
import { Section } from '~/components/landing-page/Section';
import { SkillsSection } from '~/components/landing-page/skills/SkillsSection';
import ProjectsSection from '~/components/projects/ProjectsSection';
import { CoursesSection } from '~/components/landing-page/courses/CoursesSection';

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <Profile />
      <div className="flex flex-col gap-8 mt-16 sm:mt-0 sm:gap-20 items-center">
        <Section title="Join the Devlynx team and get best tips !">
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
        <CoursesSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
