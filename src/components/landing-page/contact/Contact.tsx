import ContactButtons from '../ContactButtons';
import { Section } from '../Section';

export const Contact = () => (
  <Section title="Contact">
    <div className="flex flex-col items-center gap-4">
      <p>Feel free to contact me by email or through my social networks.</p>
      <ContactButtons activeLinks={['github', 'linkedin', 'mail', 'twitter']} />
    </div>
  </Section>
);
