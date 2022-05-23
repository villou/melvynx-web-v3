// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const getUrl = (email: string) =>
  `https://assets.mailerlite.com/jsonp/31712/forms/53915443112445919/subscribe?callback=jQuery18308587922972304468_1651522141189&fields[email]=${email}&ml-submit=1&anticsrf=true&ajax=1&guid=bf8dc5ca-618d-0180-6994-5383829a025a&_=1651522151865`;

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
