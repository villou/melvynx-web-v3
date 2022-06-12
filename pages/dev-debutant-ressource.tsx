import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Button } from '~/components/base/button';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import Footer from '~/components/footer/Footer';
import { Profile } from '~/components/landing-page/profile/Profile';
import { Body } from '~/components/library/Typography';

const getWebsite = (from: string | null) => {
  switch (from) {
    case 'i':
      return 'instagram';
    case 'f':
      return 'facebook';
    case 't':
      return 'twitter';
    case 'l':
      return 'linkedin';
    default:
      return 'normal';
  }
};

export default function DevDebutantRessource() {
  useEffect(() => {
    // get query params
    const query = new URLSearchParams(window.location.search);
    // get the f param
    const from = query.get('f');

    gtag('event', 'view_page', {
      event_category: 'dev_debutant_ressource',
      event_label: 'dev_debutant_ressource',
      method: getWebsite(from),
    });
  }, []);

  return (
    <>
      <Head>
        <title>Les Astuces Privées du Lynx</title>
      </Head>
      <div className="max-w-2xl m-auto">
        <Image
          src="/images/dev-debutant-ressource.png"
          alt="Email"
          width={7496}
          height={4236}
        />
        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-1xl m-auto mt-4 sm:mt-8">
          <h1 className="text-4xl">
            Obtiens gratuitement ma ressource pour suivre la méthode "pas à pas"
            👍
          </h1>
          <Body>
            Le monde du développement t'intéresses mais tu ne sais pas par où
            commencer et tu as trop peur de te lancer dans l'inconnu ? A l'aide
            des connaissances que j'ai acquises durant 4 ans, j'ai créé pour toi
            une ressource interactive complètement gratuite.
            <br />
            <br />
            Elle va te permettre de définir et de comprendre ce qui est fait
            pour toi mais elle va également te faire gagner un temps précieux
            pour obtenir les réponses que tu recherches rapidement et te
            permettre de réinvestir ce temps dans ton apprentissage.
            <br />
            <br />
            Tu auras toutes les clés en main pour bien débuter, donc à toi de
            jouer !
          </Body>
          <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-lg m-auto">
            <EmailsForm
              callToAction="Recevoir"
              placeholder="Ton adresse mail sur laquelle tu recevras la ressource"
              endpoint="dev-debutant-ressource"
              successMessage="Merci pour ton inscription, tu recevras la ressource dans 2 secondes dans ta boîte mail. Regarde bien les spams si tu ne la reçois pas."
            />
            <p className="text-textSecondary text-xs">
              🔒 Les emails sont gratuits, vos données resteront sécurisés et
              vous pourez vous désinscrire à tout moment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-lg m-auto mt-4 sm:mt-8">
        <Body>
          Tu en veux plus ? Réserve 1h avec moi pour parler de tes objectifs et
          trouver le meilleur moyen de les atteindre.
        </Body>
        <Button
          href="https://calendly.com/melvynx/coaching-cadeau"
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
