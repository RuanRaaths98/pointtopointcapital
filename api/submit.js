export const config = {
  api: { bodyParser: true },
};

const THANKYOU_URL = 'https://tax.point-point.co.za/thankyou';
const FORMSPREE_URL = 'https://formspree.io/f/mwvwdqwe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  const body = req.body || {};

  // Honeypot — silent pass-through (don't reveal the block to bots)
  if (body._gotcha) {
    return res.redirect(302, THANKYOU_URL);
  }

  // Verify Turnstile token with Cloudflare
  const token = body['cf-turnstile-response'];
  if (!token) {
    return res.redirect(302, '/?blocked=1');
  }

  let turnstileOk = false;
  try {
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });
    const { success } = await verify.json();
    turnstileOk = success;
  } catch (_) {
    turnstileOk = false;
  }

  if (!turnstileOk) {
    return res.redirect(302, '/?blocked=1');
  }

  // Forward clean data to Formspree (strip Turnstile token and honeypot)
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(body)) {
    if (key !== 'cf-turnstile-response' && key !== '_gotcha') {
      params.append(key, String(value));
    }
  }

  try {
    const formspreeRes = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: params.toString(),
    });

    if (formspreeRes.ok) {
      return res.redirect(302, THANKYOU_URL);
    }
  } catch (_) {}

  return res.redirect(302, '/?error=1');
}
