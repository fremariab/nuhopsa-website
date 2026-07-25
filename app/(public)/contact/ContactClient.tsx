'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const topics = [
  'General enquiry',
  'Alumni registration',
  '80th Anniversary',
  'Donations & sponsorship',
  'Volunteering & mentoring',
  'Media & press',
  'Other',
];

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'website4nuhopsa@gmail.com',
    href: 'mailto:website4nuhopsa@gmail.com',
  },
  {
    icon: '📘',
    label: 'Facebook',
    value: 'NUHOPSA',
    href: 'https://facebook.com',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@nuhopsa',
    href: 'https://instagram.com',
  },
  {
    icon: '🐦',
    label: 'Twitter / X',
    value: '@nuhopsa',
    href: 'https://x.com',
  },
];

const faqs = [
  {
    q: 'How do I register as a NUHOPSA member?',
    a: 'Head to our Register page and complete the 3-step alumni registration form. It takes less than 5 minutes.',
  },
  {
    q: 'How can I donate to the scholarship fund?',
    a: 'Visit our Donate page to choose a fund and make a secure payment via Paystack.',
  },
  {
    q: 'I graduated from Holy Child College, not the School. Can I still join?',
    a: 'Absolutely — NUHOPSA welcomes alumni from both Holy Child School and Holy Child College.',
  },
  {
    q: 'How do I get involved in the 80th Anniversary events?',
    a: 'Visit the 80th Anniversary page for highlights and the Get Involved page to volunteer or sponsor.',
  },
];

export default function ContactClient() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: wire to /api/contact route
    setTimeout(() => {
      setStatus('success');
      setMessage("Thank you! We'll get back to you within 2–3 business days.");
    }, 1000);
  };

  return (
    <section className='section-light contact-wrap'>
      <div className='section-container contact-inner'>
        {/* Left — form */}
        <div className='contact-form-col'>
          <div className='donate-form-card'>
            {status === 'success' ? (
              <div className='gi-success'>
                <div className='gi-success-icon'>✓</div>
                <p className='gi-success-msg'>{message}</p>
                <button
                  className='btn-outline'
                  onClick={() => {
                    setStatus('idle');
                    setValues({ name: '', email: '', topic: '', message: '' });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className='gi-form' onSubmit={handleSubmit}>
                <div>
                  <h2 className='donate-form-heading'>Send us a message</h2>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-body)',
                      opacity: 0.6,
                      marginTop: '0.25rem',
                    }}
                  >
                    We typically respond within 2–3 business days.
                  </p>
                </div>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>Full name *</label>
                    <input
                      name='name'
                      type='text'
                      required
                      value={values.name}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Your name'
                    />
                  </div>
                  <div className='gi-field'>
                    <label className='gi-label'>Email address *</label>
                    <input
                      name='email'
                      type='email'
                      required
                      value={values.email}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='you@example.com'
                    />
                  </div>
                </div>

                <div className='gi-field'>
                  <label className='gi-label'>Topic *</label>
                  <select
                    name='topic'
                    required
                    value={values.topic}
                    onChange={handleChange}
                    className='gi-input gi-select'
                  >
                    <option value=''>Select a topic</option>
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className='gi-field'>
                  <label className='gi-label'>Message *</label>
                  <textarea
                    name='message'
                    required
                    value={values.message}
                    onChange={handleChange}
                    className='gi-input gi-textarea'
                    placeholder='How can we help?'
                    rows={5}
                  />
                </div>

                {status === 'error' && (
                  <p className='donate-error'>{message}</p>
                )}

                <button
                  type='submit'
                  className='btn-primary gi-submit'
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right — contact info + FAQ */}
        <div className='contact-info-col'>
          {/* Contact details */}
          <div>
            <span className='section-eyebrow'>Reach us directly</span>
            <h2 className='contact-side-heading'>Contact Information</h2>
            <div className='contact-info-list'>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  className='contact-info-item'
                >
                  <span className='contact-info-icon'>{item.icon}</span>
                  <div>
                    <div className='contact-info-label'>{item.label}</div>
                    <div className='contact-info-value'>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FAQ accordion */}
          <div>
            <span className='section-eyebrow'>Quick answers</span>
            <h2 className='contact-side-heading'>Frequently Asked Questions</h2>
            <div className='contact-faq-list'>
              {faqs.map((faq, i) => (
                <div key={i} className='contact-faq-item'>
                  <button
                    className='contact-faq-q'
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`contact-faq-icon ${openFaq === i ? 'contact-faq-icon-open' : ''}`}
                    >
                      ﹢
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className='contact-faq-a'>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
