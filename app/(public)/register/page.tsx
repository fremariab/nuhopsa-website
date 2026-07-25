import type { Metadata } from 'next';
import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Register as a NUHOPSA alumni member. Connect with fellow Holy Child past students across the globe.',
};

export default function RegisterPage() {
  return (
    <main>
      <section className='page-hero'>
        <div className='section-container page-hero-inner'>
          <span className='section-eyebrow'>Join the network</span>
          <h1 className='page-hero-heading'>Alumni Registration</h1>
          <p className='page-hero-sub'>
            Register as a NUHOPSA member and stay connected with Holy Child past
            students across the globe.
          </p>
        </div>
      </section>

      <RegisterClient />
    </main>
  );
}
