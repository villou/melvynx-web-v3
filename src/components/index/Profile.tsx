import clsx from 'clsx';
import Image from 'next/image';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { Button } from '../base/button';

export const Profile = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      'flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12  flex-col-reverse sm:flex-row',
      className
    )}
  >
    <div className="flex flex-col gap-6 sm:gap-10 w-full">
      <div className="w-fit flex flex-col gap-2 relative">
        <img
          src="/images/point-bg.svg"
          style={{
            left: '-16px',
            top: '-16px',
            position: 'absolute',
          }}
        />
        <p className="text-gradient-primary text-2xl font-bold">
          Hey there! I'm -
        </p>
        <h1 className="text-7xl font-bold text-gradient-primary">
          Melvyn Malherbe.
        </h1>
      </div>
      <p className="text-4xl text-textSecondary">
        <b className="text-textPrimary">Software Enginner.</b> Self-taught from
        a young age and then in a company
      </p>
      <div className="flex gap-2 flex-wrap">
        <Button href="https://twitter.com/melvynx_" icon={<AiFillGithub />}>
          Twitter
        </Button>
        <Button
          href="https://www.youtube.com/channel/UC5HDIVwuqoIuKKw-WbQ4CvA"
          icon={<AiFillYoutube />}
        >
          Youtube
        </Button>
        <Button href="/emails" icon={<HiMail />}>
          Newsletter
        </Button>
        <Button icon={<AiFillLinkedin />}>LinkedIn</Button>
      </div>
    </div>
    <div className="w-fit">
      <div className="w-32 h-32 sm:w-fit sm:h-fit">
        <Image
          width={400}
          height={400}
          className="rounded-full"
          src="/images/my-face.png"
          alt="face of melvyn"
        />
      </div>
    </div>
  </div>
);
