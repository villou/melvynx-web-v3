import Head from 'next/head';
import React, { FormEvent } from 'react';
import Email from '../src/icons/Email';
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
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 sm:gap-6 w-full"
        >
          <input
            className="bg-paper border-primary border-2 px-2 py-2 rounded-md w-full text-textPrimary"
            placeholder="Ton address mail"
            type="email"
            id="email"
          />
          <button
            type="submit"
            className="bg-primary text-black px-6 py-3 w-full rounded-md"
          >
            Rejoindre
          </button>
        </form>
        <p className="text-textSecondary text-xs">
          🔒 Les emails sont gratuits, vos données resteront sécurisé et vous
          pourez vous désinscrire à tout moment.
        </p>
      </div>
    </>
  );
}
