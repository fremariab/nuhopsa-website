import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with NUHOPSA. We'd love to hear from you — whether you have a question, suggestion, or just want to reconnect.",
};

export default function ContactPage() {
  return (
    <main>
      <section className='page-hero'>
        <div className='section-container page-hero-inner'>
          <span className='section-eyebrow'>Get in touch</span>
          <h1 className='page-hero-heading'>Contact Us</h1>
          <p className='page-hero-sub'>
            Have a question, suggestion, or just want to reconnect? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      <ContactClient />
    </main>
  );
}
