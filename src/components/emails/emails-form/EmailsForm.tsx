import React, { FormEvent } from 'react';

export function EmailsForm({
  placeholder = 'Your email address',
  callToAction = 'Join',
}: {
  placeholder?: string;
  callToAction?: string;
}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 sm:gap-6 w-full"
    >
      <input
        className="bg-paper border-primary border-2 px-2 py-2 rounded-md w-full text-textPrimary"
        placeholder={placeholder}
        type="email"
        id="email"
      />
      <button
        type="submit"
        className="bg-primary text-black px-6 py-3 w-full rounded-md"
      >
        {callToAction}
      </button>
    </form>
  );
}
