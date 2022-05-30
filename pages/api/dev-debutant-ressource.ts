// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const getUrl = (email: string) =>
  `https://assets.mailerlite.com/jsonp/31712/forms/54344827392755352/subscribe?callback=jQuery183039929301963520514_1653929127509&fields%5Bemail%5D=${email}&ml-submit=1&anticsrf=true&ajax=1&guid=b973260c-07b7-1a4a-c762-84f00523363b&_=1653929138373`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const body = JSON.parse(req.body) as { email: string } | undefined;

  if (!body) {
    res.status(400).end();
    return;
  }

  const result = await fetch(getUrl(body.email), {
    method: 'GET',
  });

  if (result.ok) {
    res.status(204).end();
    return;
  }

  res.status(404).end();
}
