import client from '@mailchimp/mailchimp_marketing';

const mailchimpClient = client;
mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_CLIENT_ID,
  server: process.env.MAILCHIMP_PREFIX,
});

export { mailchimpClient };
