import type { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faGlobe, faGem } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about NUHOPSA — the National Union of Holy Child Past Students Association, our mission, history, and executive team.',
};

const executives = [
  { initials: 'AK', name: 'Abena Kusi', role: 'President' },
  { initials: 'MO', name: 'Mabel Ofori', role: 'Secretary' },
  { initials: 'EA', name: 'Esi Agyeman', role: 'Treasurer' },
  { initials: 'SA', name: 'Serwaa Asante', role: 'Events Lead' },
  { initials: 'AA', name: 'Akua Amponsah', role: 'PRO' },
  { initials: 'YD', name: 'Yaa Darko', role: 'Welfare Officer' },
];

const milestones = [
  { year: '1946', event: 'Holy Child School founded' },
  { year: '1960', event: 'First alumni association formed' },
  { year: '1985', event: 'Holy Child College established' },
  { year: '2000', event: 'NUHOPSA formally constituted' },
  { year: '2015', event: 'First international alumni summit' },
  { year: '2025', event: '80th Anniversary celebrations' },
];

const socialLinks = ['in', 'tw', 'fb'];

export default function AboutPage() {
  return (
    <main className='about-page'>
      {/* ── Page Hero ── */}
      <section className='page-hero'>
        <div className='section-container page-hero-inner'>
          <h1 className='page-hero-heading'>About NUHOPSA</h1>

          <p className='page-hero-sub'>
            Uniting Holy Child alumni across generations and borders — for
            connection, mentorship, and shared legacy.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className='section-light'>
        <div className='section-container mv-grid'>
          <div className='mv-card'>
            <span className='mv-icon'>
              <FontAwesomeIcon icon={faBullseye} />
            </span>
            <h2 className='mv-title'>Our Mission</h2>
            <p className='mv-text'>
              To foster a strong, engaged global network of Holy Child past
              students who actively contribute to the growth of their alma
              mater, support current students, and uphold the values instilled
              by Holy Child School and College.
            </p>
          </div>

          <div className='mv-card mv-card-dark'>
            <span className='mv-icon'>
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <h2 className='mv-title mv-title-light'>Our Vision</h2>
            <p className='mv-text mv-text-light'>
              A thriving, connected alumni community that serves as a lifelong
              resource for Holy Child graduates — wherever they are in the
              world.
            </p>
          </div>

          <div className='mv-card'>
            <span className='mv-icon'>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <h2 className='mv-title'>Our Values</h2>
            <p className='mv-text'>
              Integrity, excellence, solidarity, and service — the cornerstones
              of Holy Child that we carry with us beyond the school gates.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className='section-cream'>
        <div className='section-container story-grid'>
          <div className='story-text'>
            <h2 className='story-heading'>
              Eight Decades of Holy Child Spirit
            </h2>
            <p className='story-body'>
              Holy Child School was founded in 1946 by the Society of the Holy
              Child Jesus, with a mission to provide girls with an education
              rooted in faith, excellence, and service. Over eight decades, it
              has grown into one of Ghana's most respected institutions.
            </p>
            <p className='story-body'>
              NUHOPSA was formally constituted to give past students a unified
              voice — a platform to stay connected, give back, and celebrate the
              institution that shaped them. Today, our members span every
              continent, every profession, and every generation of Holy Child
              graduates.
            </p>
            <Link
              href='/anniversary'
              className='btn-primary'
              style={{ width: 'fit-content' }}
            >
              80th Anniversary →
            </Link>
          </div>

          {/* Milestones */}
          <div className='milestones'>
            <div className='milestone-list'>
              {milestones.map((m, i) => (
                <div key={i} className='milestone-item'>
                  <div className='milestone-dot' />
                  <div className='milestone-content'>
                    <span className='milestone-year'>{m.year}</span>
                    <span className='milestone-event'>{m.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className='about-cta'>
        <div className='section-container about-cta-inner'>
          <div>
            <span
              className='section-eyebrow'
              style={{ borderBottomColor: 'var(--color-gold)' }}
            >
              Ready to reconnect?
            </span>
            <h2 className='about-cta-heading'>Join the NUHOPSA Community</h2>
            <p className='about-cta-sub'>
              Register as an alumna, volunteer, mentor, or donor — every form of
              participation strengthens our network.
            </p>
          </div>
          <div className='about-cta-actions'>
            <Link href='/register' className='donate-strip-btn-primary'>
              Register now
            </Link>
            <Link href='/get-involved' className='donate-strip-btn-outline'>
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
