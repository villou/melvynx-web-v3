import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '~/components/base/button';
import { Header } from '~/components/base/header';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { FaFigma } from 'react-icons/fa';
import styles from '../styles/Index.module.css';
import clsx from 'clsx';
import { SkillsList } from '~/components/base/skill/SkillsList';

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <div
        className={clsx(
          'flex justify-center sm:justify-between w-full items-center gap-6 sm:gap-12  flex-col-reverse sm:flex-row',
          styles.meHeight
        )}
      >
        <div className="flex flex-col gap-6 sm:gap-10 w-full">
          <div className="w-fit flex flex-col gap-2 relative">
            <img src="/images/point-bg.svg" className={styles.pointBg} />
            <p className="text-gradient-primary text-2xl font-bold">
              Hey there! I'm -
            </p>
            <h1 className="text-7xl font-bold text-gradient-primary">
              Melvyn Malherbe.
            </h1>
          </div>
          <p className="text-4xl text-textSecondary">
            <b className="text-textPrimary">Software Enginner.</b> Self-taught
            from a young age and then in a company
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
      <div>
        <h2 className="text-4xl text-center">Skills</h2>
        <SkillsList
          title="Design"
          items={[
            { title: 'Figma', icon: <FaFigma /> },
            { title: 'Figma1', icon: <FaFigma />, isRainbow: true },
            { title: 'Figma2', icon: <FaFigma /> },
          ]}
        />
      </div>
    </div>
  );
}
