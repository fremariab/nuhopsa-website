import Link from 'next/link';

export default function DonateStrip() {
  return (
    <section className='donate-strip'>
      <div className='section-container donate-strip-inner'>
        <div className='donate-strip-text'>
          <h2 className='donate-strip-heading'>
            Support Holy Child's Next 80 Years
          </h2>
          <p className='donate-strip-sub'>
            Every contribution — big or small — funds scholarships, events, and
            the lasting legacy of Holy Child School and College.
          </p>
        </div>

        <div className='donate-strip-actions'>
          <Link href='/donate' className='donate-strip-btn-primary'>
            Donate now
          </Link>
          <Link
            href='/get-involved#sponsor'
            className='donate-strip-btn-outline'
          >
            Become a sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
