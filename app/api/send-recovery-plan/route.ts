import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import RecoveryPlanEmail from '@/emails/RecoveryPlanEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, leakBreakdown, monthlyProduction } = body;

    // Validate required fields
    if (!email || !leakBreakdown || !monthlyProduction) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'DentivaSystems <onboarding@resend.dev>', // Will change to hello@dentivasystems.com after domain verification
      to: email,
      subject: `Your Revenue Recovery Plan - $${leakBreakdown.totalMonthlyLeak.toLocaleString()}/month`,
      react: RecoveryPlanEmail({ leakBreakdown, monthlyProduction }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
