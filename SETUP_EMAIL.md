# Email Notifications Setup Guide

## Step 1: Get Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up (free)
2. Verify your email address
3. Go to **API Keys** in the dashboard
4. Click **Create API Key**
5. Name it "Credrace Production"
6. Copy the API key (starts with `re_...`)

## Step 2: Set Your Notification Email

Decide which email address you want to receive notifications at (e.g., your Gmail).

## Step 3: Add Environment Variables

1. Create a `.env.local` file in the root of your project (same folder as `package.json`)
2. Add these two lines:

```env
RESEND_API_KEY=re_your_actual_api_key_here
NOTIFICATION_EMAIL=your-email@example.com
```

**Important:** 
- Replace `re_your_actual_api_key_here` with your actual Resend API key
- Replace `your-email@example.com` with your actual email address
- Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 4: Restart Your Dev Server

After adding the environment variables, restart your Next.js dev server:

```bash
npm run dev
```

## Step 5: Test It!

1. Open your website
2. Click "Get Connected" button
3. Fill out the form and submit
4. Check your email inbox - you should receive a notification!

---

## What Happens When Someone Submits?

1. User fills out the "Get Connected" form
2. Form data is sent to `/api/connect`
3. You receive a beautiful email notification with:
   - Loan type
   - Phone number
   - Email address
   - Timestamp
4. User sees a success message

---

## Troubleshooting

**No email received?**
- Check your spam folder
- Verify `RESEND_API_KEY` is correct in `.env.local`
- Verify `NOTIFICATION_EMAIL` is correct
- Check the terminal/console for error messages
- Make sure you restarted the dev server after adding env variables

**Email goes to spam?**
- This is normal for test emails from `onboarding@resend.dev`
- Later, you can add your own domain to Resend for better deliverability

---

## Next Steps (Optional)

- Add Google Sheets integration to store all submissions
- Add your own domain to Resend for better email deliverability
- Set up webhook to send to your CRM
