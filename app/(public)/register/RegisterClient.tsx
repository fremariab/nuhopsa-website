'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type Step = 1 | 2 | 3;

type FormData = {
  // Step 1 — Personal
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  nationality: string;
  country: string;
  city: string;

  // Step 2 — Holy Child
  campus: string;
  yearFrom: string;
  yearTo: string;
  houseOrClass: string;
  memories: string;

  // Step 3 — Professional & Involvement
  profession: string;
  company: string;
  linkedin: string;
  involvement: string[];
  newsletter: boolean;
};

const initial: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  nationality: '',
  country: '',
  city: '',
  campus: '',
  yearFrom: '',
  yearTo: '',
  houseOrClass: '',
  memories: '',
  profession: '',
  company: '',
  linkedin: '',
  involvement: [],
  newsletter: false,
};

const steps = [
  { num: 1, label: 'Personal details' },
  { num: 2, label: 'Holy Child years' },
  { num: 3, label: 'Professional & involvement' },
];

const involvementOptions = [
  'Volunteer',
  'Mentor',
  'Sponsor',
  'Donate',
  'Events only',
];

export default function RegisterClient() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletter') {
        setData((d) => ({ ...d, newsletter: checked }));
      } else {
        setData((d) => ({
          ...d,
          involvement: checked
            ? [...d.involvement, value]
            : d.involvement.filter((v) => v !== value),
        }));
      }
    } else {
      setData((d) => ({ ...d, [name]: value }));
    }
  };

  const next = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prev = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: wire to /api/alumni POST route
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') {
    return (
      <section className='section-light reg-success-wrap'>
        <div className='section-container reg-success'>
          <div
            className='gi-success-icon'
            style={{ width: 64, height: 64, fontSize: '1.5rem' }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <h2 className='reg-success-heading'>Welcome to NUHOPSA!</h2>
          <p className='reg-success-msg'>
            Thank you, {data.firstName}. Your registration has been received.
            We'll send a confirmation to <strong>{data.email}</strong> shortly.
          </p>
          <div className='reg-success-actions'>
            <a href='/' className='btn-primary'>
              Back to home
            </a>
            <a href='/get-involved' className='btn-outline'>
              Get involved
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='section-light reg-wrap'>
      <div className='section-container reg-inner'>
        {/* Progress steps */}
        <div className='reg-steps'>
          {steps.map((s, i) => (
            <div key={s.num} className='reg-step-item'>
              <div
                className={`reg-step-circle ${
                  step > s.num
                    ? 'reg-step-done'
                    : step === s.num
                      ? 'reg-step-active'
                      : 'reg-step-upcoming'
                }`}
              >
                {step > s.num ? <FontAwesomeIcon icon={faCheck} /> : s.num}
              </div>
              <span
                className={`reg-step-label ${step === s.num ? 'reg-step-label-active' : ''}`}
              >
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`reg-step-line ${step > s.num ? 'reg-step-line-done' : ''}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className='reg-card'>
          <form onSubmit={handleSubmit}>
            {/* ── Step 1 ── */}
            {step === 1 && (
              <div className='reg-step-body'>
                <h2 className='reg-step-heading'>Personal Details</h2>
                <p className='reg-step-sub'>Tell us a bit about yourself.</p>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>First name *</label>
                    <input
                      name='firstName'
                      type='text'
                      required
                      value={data.firstName}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Abena'
                    />
                  </div>
                  <div className='gi-field'>
                    <label className='gi-label'>Last name *</label>
                    <input
                      name='lastName'
                      type='text'
                      required
                      value={data.lastName}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Kusi'
                    />
                  </div>
                </div>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>Email address *</label>
                    <input
                      name='email'
                      type='email'
                      required
                      value={data.email}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='you@example.com'
                    />
                  </div>
                  <div className='gi-field'>
                    <label className='gi-label'>Phone number</label>
                    <input
                      name='phone'
                      type='tel'
                      value={data.phone}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='+233 ...'
                    />
                  </div>
                </div>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>Date of birth</label>
                    <input
                      name='dob'
                      type='date'
                      value={data.dob}
                      onChange={handleChange}
                      className='gi-input'
                    />
                  </div>
                  <div className='gi-field'>
                    <label className='gi-label'>Nationality</label>
                    <input
                      name='nationality'
                      type='text'
                      value={data.nationality}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Ghanaian'
                    />
                  </div>
                </div>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>Country of residence *</label>
                    <input
                      name='country'
                      type='text'
                      required
                      value={data.country}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Ghana'
                    />
                  </div>
                  <div className='gi-field'>
                    <label className='gi-label'>City</label>
                    <input
                      name='city'
                      type='text'
                      value={data.city}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Accra'
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 2 ── */}
            {step === 2 && (
              <div className='reg-step-body'>
                <h2 className='reg-step-heading'>Your Holy Child Years</h2>
                <p className='reg-step-sub'>
                  Tell us about your time at Holy Child.
                </p>

                <div className='gi-field'>
                  <label className='gi-label'>Campus *</label>
                  <select
                    name='campus'
                    required
                    value={data.campus}
                    onChange={handleChange}
                    className='gi-input gi-select'
                  >
                    <option value=''>Select campus</option>
                    <option>Holy Child School</option>
                    <option>Holy Child College</option>
                    <option>Both</option>
                  </select>
                </div>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>Year of entry *</label>
                    <input
                      name='yearFrom'
                      type='text'
                      required
                      value={data.yearFrom}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='e.g. 1990'
                    />
                  </div>
                  <div className='gi-field'>
                    <label className='gi-label'>Year of graduation *</label>
                    <input
                      name='yearTo'
                      type='text'
                      required
                      value={data.yearTo}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='e.g. 1994'
                    />
                  </div>
                </div>

                <div className='gi-field'>
                  <label className='gi-label'>House / Class group</label>
                  <input
                    name='houseOrClass'
                    type='text'
                    value={data.houseOrClass}
                    onChange={handleChange}
                    className='gi-input'
                    placeholder='e.g. Fatima House, 3B...'
                  />
                </div>

                <div className='gi-field'>
                  <label className='gi-label'>
                    A favourite memory from Holy Child
                  </label>
                  <textarea
                    name='memories'
                    value={data.memories}
                    onChange={handleChange}
                    className='gi-input gi-textarea'
                    placeholder='Share a memory — it might feature in our alumni spotlight!'
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* ── Step 3 ── */}
            {step === 3 && (
              <div className='reg-step-body'>
                <h2 className='reg-step-heading'>Professional & Involvement</h2>
                <p className='reg-step-sub'>
                  Help us connect you with the right opportunities.
                </p>

                <div className='gi-form-row'>
                  <div className='gi-field'>
                    <label className='gi-label'>Profession / Industry</label>
                    <input
                      name='profession'
                      type='text'
                      value={data.profession}
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
                      value={data.company}
                      onChange={handleChange}
                      className='gi-input'
                      placeholder='Where you work'
                    />
                  </div>
                </div>

                <div className='gi-field'>
                  <label className='gi-label'>LinkedIn profile</label>
                  <input
                    name='linkedin'
                    type='url'
                    value={data.linkedin}
                    onChange={handleChange}
                    className='gi-input'
                    placeholder='https://linkedin.com/in/...'
                  />
                </div>

                <div className='gi-field'>
                  <label className='gi-label'>
                    How would you like to get involved?
                  </label>
                  <div className='reg-checkboxes'>
                    {involvementOptions.map((opt) => (
                      <label key={opt} className='reg-checkbox-label'>
                        <input
                          type='checkbox'
                          name='involvement'
                          value={opt}
                          checked={data.involvement.includes(opt)}
                          onChange={handleChange}
                          className='reg-checkbox'
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <label className='reg-checkbox-label reg-newsletter'>
                  <input
                    type='checkbox'
                    name='newsletter'
                    checked={data.newsletter}
                    onChange={handleChange}
                    className='reg-checkbox'
                  />
                  Subscribe to the NUHOPSA newsletter
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className='reg-nav'>
              {step > 1 && (
                <button type='button' className='btn-outline' onClick={prev}>
                  ← Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type='button'
                  className='btn-primary reg-next'
                  onClick={next}
                >
                  Next →
                </button>
              ) : (
                <button
                  type='submit'
                  className='btn-primary reg-next'
                  disabled={status === 'loading'}
                >
                  {status === 'loading'
                    ? 'Submitting...'
                    : 'Complete registration'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
