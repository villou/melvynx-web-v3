import { HiMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';
import { Button } from '../base/button';

type SocialNetwork =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'newsletter'
  | 'twitter'
  | 'youtube';

type ContactButtonsProps = {
  activeLinks?: SocialNetwork[];
};

export default function ContactButtons({
  activeLinks = ['twitter'],
}: ContactButtonsProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {activeLinks.includes('github') && (
        <Button href="https://github.com/Melvynx" icon={<SiGithub />}>
          Github
        </Button>
      )}
      {activeLinks.includes('twitter') && (
        <Button href="https://twitter.com/melvynxdev" icon={<SiTwitter />}>
          Twitter
        </Button>
      )}
      {activeLinks.includes('youtube') && (
        <Button
          href="https://www.youtube.com/channel/UC5HDIVwuqoIuKKw-WbQ4CvA"
          icon={<SiYoutube />}
        >
          Youtube
        </Button>
      )}
      {activeLinks.includes('newsletter') && (
        <Button href="/emails" icon={<HiMail />}>
          Newsletter
        </Button>
      )}
      {activeLinks.includes('linkedin') && (
        <Button
          href="https://www.linkedin.com/in/melvyn-malherbe/"
          icon={<SiLinkedin />}
        >
          LinkedIn
        </Button>
      )}
      {activeLinks.includes('mail') && (
        <Button href="mailto:contact@melvynx.com" icon={<HiMail />}>
          contact@melvynx.com
        </Button>
      )}
    </div>
  );
}
