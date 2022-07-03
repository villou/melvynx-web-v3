import Head from 'next/head';
import Image from 'next/image';
import { Button } from '~/components/base/button';
import AnimatedBlob from '~/components/blob/AnimatedBlob';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import Footer from '~/components/footer/Footer';
import { Profile } from '~/components/landing-page/profile/Profile';
import { Body } from '~/components/library/Typography';
import styles from '../styles/modules/Emails.module.css';

export default function emails() {
  return (
    <>
      <Head>
        <title>Les mails privés de melvynx.dev</title>
      </Head>
      <AnimatedBlob />
      <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-lg m-auto mt-4 sm:mt-8 relative">
        <Image
          className={`${styles.icon}`}
          src="/images/mail-3d-icons.png"
          alt="Email"
          width={192}
          height={192}
          // style={{ overflow: 'visible' }}
          layout="raw"
        />

        <h1 className="text-4xl">Les mails privés de melvynx.dev</h1>
        <Body>
          Les méthodes, techniques et astuces simples pour devenir un meilleur dev
          et être épanoui dans son travail.
          <br />
          C'est le seul endroit où je partage les meilleures techniques et
          méthodes que j'ai apprises au fil des années.
        </Body>
        <ul className="text-base text-textSecondary">
          <li>Conseils pour trouver un job de développeur</li>
          <li>Veilles techniques sur le web, le mobile et des outils cool</li>
          <li>Tutoriels complets sur des sujets qui me passionnent</li>
          <li>Nouvelles sur mes activités en ligne</li>
        </ul>
        <br />
        <Body>
          Rejoins la tribu, on est plus de 300 développeurs passionnés.
        </Body>
        <EmailsForm callToAction="Rejoindre" placeholder="Ton adresse mail" />
        <p className="text-textSecondary text-xs">
          🔒 Les emails sont gratuits, vos données resteront sécurisées et vous
          pourrez vous désinscrire à tout moment.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-lg m-auto mt-4 sm:mt-8">
        <Body>
          Tu en veux plus ? Réserve 1h avec moi pour parler de tes objectifs et
          trouver le meilleur moyen de les atteindre.
        </Body>
        <Button
          href="https://calendly.com/melvynx/bilan-developer"
          className="w-full"
          variant="light"
          fullRounded={false}
          onClick={() => {
            gtag('event', 'go_to_calendly');
          }}
        >
          Prends un rendez-vous avec moi
        </Button>
      </div>
      <div className="my-20">
        <Profile
          className=""
          upperName="Hey toi ! Je suis -"
          descriptionHighlight="Développeur."
          description="Je suis passionné par le développement. J'ai envie de partager mes connaissances et mes expériences avec vous."
          fullScreenSize={false}
        />
      </div>
      <div className="my-20 flex flex-col gap-4">
        <h1 className="text-4xl">A propos de moi</h1>
        <Body>
          Je m'appelle Melvyn, j'ai 20 ans et je suis passionné par le
          développement depuis mes 14 ans.
        </Body>
        <Body>
          J'ai commencé par le développement WEB, avec HTML / CSS. J'ai ensuite
          créé un petit backend en PHP.
        </Body>
        <Body>
          Si tu as envie de voir ce magnifique site web, n'hésite pas à me le
          demander.
        </Body>
        <Body>
          J'ai la chance de pouvoir gagner ma vie grâce à ma passion depuis
          maintenant 3 ans. En dehors de ça, j'ai eu l'occasion de réaliser
          différents sites web pour plusieurs petits projets.
        </Body>
        <Body>
          J'ai pu, très tôt, apprendre et m'inspirer des meilleurs. En les
          observant et en les imitant, cela me permet aujourd'hui d'avoir une
          avance considérable et une très bonne expérience pour mon âge.
        </Body>
        <Body>
          Durant 6 ans, j'ai pu apprendre énormément de technologies
          différentes.
        </Body>
        <Body>
          Le développement, c'est un métier de fou où l'on peut exprimer sa
          créativité et ça, même en dehors des heures de travail, on peut
          apprendre en permanence ! On a la chance d'avoir des ressources de
          dingue, disponibles partout et à portée de main.
        </Body>
        <Body>
          Je veux partager ma passion avec toi et te permettre de ressentir les
          mêmes émotions incroyables que procure l'apprentissage du dev, c'est
          pourquoi je serais extrêmement heureux que mes mails t'aide à prendre
          la bonne voie. J'y consacre plusieurs heures par semaines et je suis
          fière rejoindre la communauté du Lynx.
        </Body>
      </div>
      <Footer />
    </>
  );
}
