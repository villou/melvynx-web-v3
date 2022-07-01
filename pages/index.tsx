import { Header } from '~/components/base/header';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import { Contact } from '~/components/landing-page/contact/Contact';
import Footer from '~/components/footer/Footer';
import { Profile } from '~/components/landing-page/profile/Profile';
import { Section } from '~/components/landing-page/Section';
import { SkillsSection } from '~/components/landing-page/skills/SkillsSection';
import ProjectsSection from '~/components/projects/ProjectsSection';
import { CoursesSection } from '~/components/landing-page/courses/CoursesSection';
import AnimatedBlob from '~/components/blob/AnimatedBlob';

export default function Home() {
  return (
    <div className="min-h-full">
      <AnimatedBlob />
      <Header />
      <Profile />
      <div className="flex flex-col gap-12 mt-16 sm:mt-0 sm:gap-24 items-center">
        <SkillsSection />
        <ProjectsSection />
        <CoursesSection />
        <Contact />
        <Section title="Join de DevLynx club !">
          <div className="max-w-lg m-auto flex flex-col gap-4">
            <p>
              You will receive a weekly email with developer news, my discovery
              of the week and tips that I use.
            </p>
            <EmailsForm />
            <p className="text-base text-center">
              🔒 The emails are free and in french 🇫🇷, your data will remain
              secure and you can unsubscribe at any time.
            </p>
          </div>
        </Section>
        <Footer />
      </div>
    </div>
  );
}
