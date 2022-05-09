import { HiMail } from 'react-icons/hi';
import { Button } from '../../base/button';
import ContactButton from '../ContactButton';
import { Section } from '../Section';

export const Contact = () => {
  return (
    <Section title="Contact">
      <div className="flex flex-col items-center gap-4">
        <p>Feel free to contact me by email or through my social networks.</p>
        <ContactButton />
        <Button href="mailto:contact@melvynx.com" icon={<HiMail />}>
          contact@melvynx.com
        </Button>
      </div>
    </Section>
  );
};
