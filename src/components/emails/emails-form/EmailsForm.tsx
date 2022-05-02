import clsx from 'clsx';
import React, { FormEvent, useState } from 'react';
import { Button } from '~/components/base/button';

type EmailsFormProps = {
  placeholder?: string;
  callToAction?: string;
  successMessage?: string;
  errorMessage?: string;
};

export function EmailsForm({
  placeholder = 'Your email address',
  callToAction = 'Join',
  successMessage = 'Thanks for subscribing! Check your inbox!',
  errorMessage = 'Something went wrong, please try again.',
}: {
  placeholder?: string;
  callToAction?: string;
  successMessage?: string;
  errorMessage?: string;
}) {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const query = new URLSearchParams(window.location.search);

    const value = e.currentTarget.email.value;

    const data = { email: value };

    fetch('/api/add-emails', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setMessage(successMessage);
        } else {
          setMessage(errorMessage);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 sm:gap-6 w-full"
    >
      <input
        className="bg-paper border-primary text-lg border-2 px-2 py-2.5 rounded-md w-full text-textPrimary"
        placeholder={placeholder}
        type="email"
        id="email"
      />
      {message && (
        <p
          className={clsx('text-sm', {
            'text-green-400': message === successMessage,
            'text-red-400': message === errorMessage,
          })}
        >
          {message}
        </p>
      )}
      <Button
        disabled={message !== null}
        className="w-full"
        variant="primary"
        loading={isLoading}
      >
        {callToAction}
      </Button>
    </form>
  );
}
