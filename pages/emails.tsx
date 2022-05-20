import Head from 'next/head';
import React, { FormEvent } from 'react';
import { EmailsForm } from '~/components/emails/emails-form/EmailsForm';
import { Profile } from '~/components/landing-page/profile/Profile';
import styles from '../styles/Emails.module.css';

type EmailType = {
  email: HTMLInputElement;
};

export default function emails() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get query params
    const query = new URLSearchParams(window.location.search);

    const value = e.currentTarget.email.value;

    const data = { email: value, from: query.get('f') ?? 'website' };

    fetch('/api/add-emails', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      console.log('All good');
    });
  };

  return (
    <>
      <Head>
        <title>Les Tips du Lynx</title>
      </Head>
      <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-lg m-auto mt-4 sm:mt-8">
        <img
          className={'w-24 h-24 ' + styles.icon}
          src="/icons/email.svg"
          alt="Email"
        />
        <h1 className="text-4xl">Les Email Innovant du Lynx</h1>
        <p className="text-base text-textSecondary ">
          Les méthodes, techniques et astuce simple pour devenir un meilleur dev
          et être épanoui dans son travail.
          <br />
          Je t'accompagne pour que tu puisse devenir un développeur{' '}
          <b>rentier</b> en partant de 0 et que tu puisse enfin être libre.
        </p>
        <EmailsForm placeholder="Ton adresse mail" />
        <p className="text-textSecondary text-xs">
          🔒 Les emails sont gratuits, vos données resteront sécurisé et vous
          pourez vous désinscrire à tout moment.
        </p>
      </div>
      <div className="my-20">
        <Profile
          className=""
          upperName="Hey toi! Je suis -"
          descriptionHighlight="Développeur."
          description="Je suis passionné par le développement. J'ai envie de partager mes connaissances et mes expériences avec vous."
          fullScreenSize={false}
        />
      </div>
      <div className="my-20"></div>
    </>
  );
}
