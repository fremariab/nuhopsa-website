import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className='hero-root'>
      <div className='hero-inner'>
        {/* Left — text content */}
        <div className='hero-content'>
          <span className='hero-eyebrow'>80th Anniversary Celebrations</span>

          <h1 className='hero-heading'>
            Rooted in Legacy,
            <br />
            Connected Forever
          </h1>

          <p className='hero-sub'>
            Celebrating 80 years of Holy Child excellence. Join thousands of
            alumni across the globe — reconnect, give back, and be part of
            something larger than yourself.
          </p>

          <div className='hero-actions'>
            <Link href='/register' className='hero-btn-primary'>
              Register as alumni
            </Link>
            <Link href='/anniversary' className='hero-btn-outline'>
              80th Anniversary →
            </Link>
          </div>

          {/* Stat strip */}
          <div className='hero-stats'>
            <div className='hero-stat'>
              <span className='hero-stat-num'>80+</span>
              <span className='hero-stat-lbl'>Years of excellence</span>
            </div>
            <div className='hero-stat-divider' />
            <div className='hero-stat'>
              <span className='hero-stat-num'>5k+</span>
              <span className='hero-stat-lbl'>Alumni worldwide</span>
            </div>
            <div className='hero-stat-divider' />
            <div className='hero-stat'>
              <span className='hero-stat-num'>1945</span>
              <span className='hero-stat-lbl'>Founded</span>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className='hero-image-col'>
          <div className='hero-image-wrap'>
            {/* Swap src here when real photo is ready */}
            <div className='hero-image-placeholder'>
              <span className='hero-placeholder-text'>Photo coming soon</span>
            </div>

            {/* Floating anniversary badge — overlaps image edge */}
            <div className='hero-badge'>
              <span className='hero-badge-num'>80</span>
              <span className='hero-badge-lbl'>Years</span>
            </div>

            {/* Floating stat card — bottom left overlap */}
            <div className='hero-float-card'>
              <span className='hero-float-num'>1945</span>
              <span className='hero-float-lbl'>Est. Holy Child</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
