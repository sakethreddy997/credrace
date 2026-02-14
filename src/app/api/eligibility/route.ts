import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if API key exists (for build time)
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

// ─── Your email where you want to receive notifications ───
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "your-email@example.com";

interface EligibilitySubmission {
  loanType: string;
  phone: string;
  email: string;
  // Optional: Add more fields if you want to capture eligibility results
  eligibleAmount?: string;
  matchedLenders?: number;
}

const LOAN_TYPE_LABELS: Record<string, string> = {
  home: "Home Loan",
  personal: "Personal Loan",
  "two-wheeler": "Two-Wheeler Loan",
  business: "Business Loan",
};

export async function POST(request: NextRequest) {
  try {
    const body: EligibilitySubmission = await request.json();
    const { loanType, phone, email, eligibleAmount, matchedLenders } = body;

    // ─── Validation ───
    if (!loanType || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields: loanType, phone, email" },
        { status: 400 }
      );
    }

    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number. Must be 10 digits." },
        { status: 400 }
      );
    }

    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ─── Send email notification ───
    const loanTypeLabel = LOAN_TYPE_LABELS[loanType] || loanType;
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const resend = getResend();
    if (resend) {
      try {
        await resend.emails.send({
        from: "Credrace <onboarding@resend.dev>",
        to: NOTIFICATION_EMAIL,
        subject: `New Eligibility Check: ${loanTypeLabel} - Credrace`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
                .info-row { margin: 15px 0; padding: 12px; background: white; border-radius: 6px; border-left: 3px solid #10b981; }
                .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
                .value { font-size: 16px; color: #111827; margin-top: 4px; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">📊 New Eligibility Check</h1>
                  <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">Someone completed eligibility check and wants to apply</p>
                </div>
                <div class="content">
                  <div class="info-row">
                    <div class="label">Loan Type</div>
                    <div class="value">${loanTypeLabel}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Phone Number</div>
                    <div class="value">+91 ${phone}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Email Address</div>
                    <div class="value">${email}</div>
                  </div>
                  ${eligibleAmount ? `
                  <div class="info-row">
                    <div class="label">Eligible Amount</div>
                    <div class="value">${eligibleAmount}</div>
                  </div>
                  ` : ""}
                  ${matchedLenders ? `
                  <div class="info-row">
                    <div class="label">Matched Lenders</div>
                    <div class="value">${matchedLenders} lenders</div>
                  </div>
                  ` : ""}
                  <div class="info-row">
                    <div class="label">Submitted At</div>
                    <div class="value">${timestamp}</div>
                  </div>
                  <div style="margin-top: 25px; padding: 15px; background: #fef3c7; border-radius: 6px; border-left: 3px solid #f59e0b;">
                    <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
                      ⚠️ This user has completed eligibility check and is ready to apply. A dedicated loan manager should reach out within 2 hours.
                    </p>
                  </div>
                </div>
                <div class="footer">
                  <p>This is an automated notification from Credrace</p>
                  <p style="margin-top: 5px;">You're receiving this because you're set as the notification recipient.</p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
New Eligibility Check - Credrace

Loan Type: ${loanTypeLabel}
Phone: +91 ${phone}
Email: ${email}
${eligibleAmount ? `Eligible Amount: ${eligibleAmount}\n` : ""}
${matchedLenders ? `Matched Lenders: ${matchedLenders}\n` : ""}
Submitted: ${timestamp}

This user has completed eligibility check and is ready to apply. A dedicated loan manager should reach out within 2 hours.
        `.trim(),
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Still return success even if email fails
      }
    } else {
      console.warn("Resend API key not configured. Email notification skipped.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! A dedicated loan manager will reach out within 2 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
