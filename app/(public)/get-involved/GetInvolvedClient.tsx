'use client';

import { useState } from 'react';

type FormState = Record<string, string>;
type Status = 'idle' | 'loading' | 'success' | 'error';

function useForm(initial: FormState) {
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const reset = () => {
    setValues(initial);
    setStatus('idle');
    setMessage('');
  };

  return {
    values,
    status,
    message,
    setStatus,
    setMessage,
    handleChange,
    reset,
  };
}

/* ── Volunteer Form ── */
function VolunteerForm() {
  const {
    values,
    status,
    message,
    setStatus,
    setMessage,
    handleChange,
    reset,
  } = useForm({ name: '', email: '', phone: '', area: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: wire to API route
    setTimeout(() => {
      setStatus('success');
      setMessage("Thank you! We'll be in touch soon.");
    }, 1000);
  };

  if (status === 'success')
    return <FormSuccess message={message} onReset={reset} />;

  return (
    <form className='gi-form' onSubmit={handleSubmit}>
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
            placeholder='Your full name'
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
      <div className='gi-form-row'>
        <div className='gi-field'>
          <label className='gi-label'>Phone number</label>
          <input
            name='phone'
            type='tel'
            value={values.phone}
            onChange={handleChange}
            className='gi-input'
            placeholder='+233 ...'
          />
        </div>
        <div className='gi-field'>
          <label className='gi-label'>Area of interest *</label>
          <select
            name='area'
            required
            value={values.area}
            onChange={handleChange}
            className='gi-input gi-select'
          >
            <option value=''>Select an area</option>
            <option>Event planning & logistics</option>
            <option>Communications & social media</option>
            <option>Fundraising & donations</option>
            <option>Alumni outreach</option>
            <option>Education & mentoring support</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className='gi-field'>
        <label className='gi-label'>Anything else you'd like us to know?</label>
        <textarea
          name='message'
          value={values.message}
          onChange={handleChange}
          className='gi-input gi-textarea'
          placeholder='Tell us about your skills, availability, or ideas...'
          rows={4}
        />
      </div>
      <button
        type='submit'
        className='btn-primary gi-submit'
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Sign up to volunteer'}
      </button>
    </form>
  );
}

/* ── Mentor Form ── */
function MentorForm() {
  const {
    values,
    status,
    message,
    setStatus,
    setMessage,
    handleChange,
    reset,
  } = useForm({
    name: '',
    email: '',
    profession: '',
    company: '',
    bio: '',
    year: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage(
        "Thank you for signing up to mentor! We'll reach out with next steps.",
      );
    }, 1000);
  };

  if (status === 'success')
    return <FormSuccess message={message} onReset={reset} />;

  return (
    <form className='gi-form' onSubmit={handleSubmit}>
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
            placeholder='Your full name'
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
      <div className='gi-form-row'>
        <div className='gi-field'>
          <label className='gi-label'>Profession / Industry *</label>
          <input
            name='profession'
            type='text'
            required
            value={values.profession}
            onChange={handleChange}
            className='gi-input'
            placeholder='e.g. Medicine, Law, Tech...'
          />
        </div>
        <div className='gi-field'>
          <label className='gi-label'>Company / Organisation</label>
          <input
            name='company'
            type='text'
            value={values.company}
            onChange={handleChange}
            className='gi-input'
            placeholder='Where you currently work'
          />
        </div>
      </div>
      <div className='gi-form-row'>
        <div className='gi-field'>
          <label className='gi-label'>Year of graduation *</label>
          <input
            name='year'
            type='text'
            required
            value={values.year}
            onChange={handleChange}
            className='gi-input'
            placeholder='e.g. 1998'
          />
        </div>
      </div>
      <div className='gi-field'>
        <label className='gi-label'>Brief bio *</label>
        <textarea
          name='bio'
          required
          value={values.bio}
          onChange={handleChange}
          className='gi-input gi-textarea'
          placeholder='Tell students a bit about your journey and what you can offer as a mentor...'
          rows={4}
        />
      </div>
      <button
        type='submit'
        className='btn-primary gi-submit'
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Become a mentor'}
      </button>
    </form>
  );
}

/* ── Sponsor Form ── */
function SponsorForm() {
  const {
    values,
    status,
    message,
    setStatus,
    setMessage,
    handleChange,
    reset,
  } = useForm({ name: '', email: '', organisation: '', tier: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage(
        'Thank you for your interest in sponsoring NUHOPSA! Our team will be in touch.',
      );
    }, 1000);
  };

  if (status === 'success')
    return <FormSuccess message={message} onReset={reset} />;

  return (
    <form className='gi-form' onSubmit={handleSubmit}>
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
            placeholder='Your full name'
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
      <div className='gi-form-row'>
        <div className='gi-field'>
          <label className='gi-label'>Organisation / Company</label>
          <input
            name='organisation'
            type='text'
            value={values.organisation}
            onChange={handleChange}
            className='gi-input'
            placeholder='Your company or organisation'
          />
        </div>
        <div className='gi-field'>
          <label className='gi-label'>Sponsorship tier of interest *</label>
          <select
            name='tier'
            required
            value={values.tier}
            onChange={handleChange}
            className='gi-input gi-select'
          >
            <option value=''>Select a tier</option>
            <option>Gold Sponsor</option>
            <option>Silver Sponsor</option>
            <option>Bronze Sponsor</option>
            <option>Custom / In-kind</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className='gi-field'>
        <label className='gi-label'>Message</label>
        <textarea
          name='message'
          value={values.message}
          onChange={handleChange}
          className='gi-input gi-textarea'
          placeholder='Tell us about your sponsorship goals or any questions you have...'
          rows={4}
        />
      </div>
      <button
        type='submit'
        className='btn-primary gi-submit'
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Express interest'}
      </button>
    </form>
  );
}

/* ── Success state ── */
function FormSuccess({
  message,
  onReset,
}: {
  message: string;
  onReset: () => void;
}) {
  return (
    <div className='gi-success'>
      <span className='gi-success-icon'>✓</span>
      <p className='gi-success-msg'>{message}</p>
      <button className='btn-outline gi-reset' onClick={onReset}>
        Submit another response
      </button>
    </div>
  );
}

/* ── Section wrapper ── */
function InvolvedSection({
  id,
  icon,
  eyebrow,
  heading,
  description,
  children,
  dark = false,
}: {
  id: string;
  icon: string;
  eyebrow: string;
  heading: string;
  description: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={
        dark ? 'gi-section gi-section-dark' : 'gi-section gi-section-light'
      }
    >
      <div className='section-container gi-section-inner'>
        <div className='gi-section-header'>
          <span className='gi-section-icon'>{icon}</span>
          <span className={`section-eyebrow ${dark ? 'gi-eyebrow-dark' : ''}`}>
            {eyebrow}
          </span>
          <h2 className={`gi-section-heading ${dark ? 'gi-heading-dark' : ''}`}>
            {heading}
          </h2>
          <p className={`gi-section-desc ${dark ? 'gi-desc-dark' : ''}`}>
            {description}
          </p>
        </div>
        <div className='gi-form-wrap'>{children}</div>
      </div>
    </section>
  );
}

/* ── Main export ── */
export default function GetInvolvedClient() {
  return (
    <>
      <InvolvedSection
        id='volunteer'
        icon='🤝'
        eyebrow='Give your time'
        heading='Volunteer with NUHOPSA'
        description='Help us plan events, run outreach programmes, and support the NUHOPSA community. Every hour you give strengthens our network.'
      >
        <VolunteerForm />
      </InvolvedSection>

      <InvolvedSection
        id='mentor'
        icon='🎓'
        eyebrow='Share your journey'
        heading='Become a Mentor'
        description='Be the guide you wish you had. Share your professional experience with current Holy Child students and help shape the next generation.'
        dark
      >
        <MentorForm />
      </InvolvedSection>

      <InvolvedSection
        id='sponsor'
        icon='🤲'
        eyebrow='Invest in legacy'
        heading='Sponsor NUHOPSA'
        description='Support our events, scholarship fund, and alumni initiatives. Sponsorship puts your brand at the heart of a proud and engaged community.'
      >
        <SponsorForm />
      </InvolvedSection>
    </>
  );
}
