import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, propertyType, monthlyBill, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !propertyType || !monthlyBill) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Vajra Renew <onboarding@resend.dev>',
      to: 'vajrarenew@gmail.com',
      replyTo: email || undefined,
      subject: `New Solar Quote from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a2332; color: #d4af37; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">☀️ New Solar Quote Request</h1>
          </div>
          <div style="background: #f5f5f5; padding: 30px;">
            <h2 style="color: #1a2332;">Customer Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Property Type:</strong> ${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}</p>
            <p><strong>Monthly Bill:</strong> ₹${monthlyBill}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            <p style="color: #888; font-size: 12px; margin-top: 20px;">
              ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your request' },
      { status: 500 }
    );
  }
}