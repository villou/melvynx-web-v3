import client from '@mailchimp/mailchimp_marketing';

const mailchimpClient = client;

console.log(process.env.MAILCHIMP_CLIENT_SECRET, process.env.MAILCHIMP_PREFIX);

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_CLIENT_SECRET,
  server: process.env.MAILCHIMP_PREFIX,
});

export { mailchimpClient };
