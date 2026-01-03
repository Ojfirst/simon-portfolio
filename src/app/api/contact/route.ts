import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		if (!/^\S+@\S+\.\S+$/.test(email)) {
			return NextResponse.json(
				{ error: 'Invalid email address' },
				{ status: 400 }
			);
		}

		await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: [process.env.CONTACT_TO_EMAIL!],
			replyTo: [email],
			subject: `New Contact Message from ${name}`,
			html: `
        <div style="font-family: sans-serif">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
		});

		return NextResponse.json(
			{ message: 'Message successfully sent' },
			{ status: 201 }
		);
	} catch (error) {
		console.error('Contact API error:', error);
		return NextResponse.json(
			{ error: 'Failed to send message' },
			{ status: 500 }
		);
	}
}
