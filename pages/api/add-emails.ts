// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const body = JSON.parse(req.body);
  const email = body as string;

  if (!email) {
    res.status(400).end();
    return;
  }

  const result = await fetch(
    'https://connect.mailerlite.com/api/v2/subscribers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_TOKEN ?? '',
      },
      body: JSON.stringify({
        email,
        fields: {
          from: body.from ?? 'website',
        },
      }),
    }
  );

  const resultBody = await result.json();
  console.log(resultBody);

  res.status(204).end();
}
