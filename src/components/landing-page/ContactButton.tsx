import { HiMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';
import { Button } from '../base/button';

export default function ContactButton() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button href="https://twitter.com/melvynxdev" icon={<SiTwitter />}>
        Twitter
      </Button>
      <Button href="https://github.com/Melvynx" icon={<SiGithub />}>
        Github
      </Button>
      {/* <Button
        href="https://www.youtube.com/channel/UC5HDIVwuqoIuKKw-WbQ4CvA"
        icon={<SiYoutube />}
      >
        Youtube
      </Button> */}
      <Button href="/emails" icon={<HiMail />}>
        Newsletter
      </Button>
      <Button
        href="https://www.linkedin.com/in/melvyn-malherbe/"
        icon={<SiLinkedin />}
      >
        LinkedIn
      </Button>
    </div>
  );
}
