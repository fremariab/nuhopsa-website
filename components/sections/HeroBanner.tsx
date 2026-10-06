import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className='hero-root'>
      <div className='hero-inner'>
        {/* Left — text content */}
        <div className='hero-content'>
          <h1 className='hero-heading hero-entrance hero-entrance-heading'>
            Rooted in Legacy,
            <br />
            Connected Forever
          </h1>

          <p className='hero-sub hero-entrance hero-entrance-sub'>
            Celebrating 80 years of Holy Child excellence. Join thousands of
            alumni across the globe — reconnect, give back, and be part of
            something larger than yourself.
          </p>

          <div className='hero-actions'>
            <Link
              href='/register'
              className='hero-btn-primary hero-entrance hero-entrance-primary'
            >
              Register as alumni
            </Link>
            <Link
              href='/anniversary'
              className='hero-btn-outline hero-entrance hero-entrance-secondary'
            >
              80th Anniversary →
            </Link>
          </div>
        </div>

        {/* Right — image */}
        <div className='hero-image-col'>
          <div className='hero-image-wrap'>
            <div className='hero-image-real'>
              <Image
                src='/images/img2.png'
                alt='Holy Child alumni'
                fill
                className='hero-img'
                priority
              />
            </div>

            <div className='hero-badge-stack' aria-label='80 years of Holy Child'>
              <div className='hero-badge hero-badge-back' aria-hidden='true'>
                <span>ALUMNI</span>
              </div>
              <div className='hero-badge hero-badge-front'>
                <span className='hero-badge-num'>80</span>
                <span className='hero-badge-lbl'>Years</span>
              </div>
            </div>

            {/* Floating stat card — bottom left overlap */}
            <div className='hero-float-card'>
              <span className='hero-float-num'>1946</span>
              <span className='hero-float-lbl'>Est. Holy Child</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
