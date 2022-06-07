// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mailchimpClient } from '~/api/mailchimp-client';

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

  const body = JSON.parse(req.body) as { email: string } | undefined;

  if (!body) {
    res.status(400).end();
    return;
  }

  const response = await mailchimpClient.lists.addListMember('e486e62638', {
    email_address: body.email,
    status: 'subscribed',
  });

  if (response.status === 200) {
    res.status(201);
  }
  res.status(400).end();
}
