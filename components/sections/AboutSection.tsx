import Link from 'next/link';

const stats = [
  { num: '80', lbl: 'Years of excellence' },
  { num: '70k+', lbl: 'Alumni worldwide' },
  { num: '1946', lbl: 'Year established' },
  { num: '∞', lbl: 'Impact' },
];

export default function AboutSection() {
  return (
    <section className='about-root section-light'>
      <div className='section-container about-inner'>
        {/* Left — image col */}
        <div className='about-image-col'>
          <div className='about-image-wrap'>
            {/* Main image placeholder */}
            <div className='about-image-placeholder'>
              <img src='/images/img1.jpeg' alt='picture' />
            </div>

            {/* Secondary image — overlaps bottom right */}
            <div className='about-image-secondary'>
              <img src='/images/img3.png' alt='picture' />
            </div>

            {/* Overlap stat card */}
            <div className='about-overlap-card'>
              <span className='about-overlap-num'>FACTA</span>
              <span className='about-overlap-lbl'>NON VERBA</span>
            </div>
          </div>
        </div>

        {/* Right — text col */}
        <div className='about-text-col'>
          <h2 className='about-heading'>
            A Global Network of Holy Child Alumni
          </h2>

          <p className='about-body'>
            NUHOPSA — the National Union of Holy Child Past Students Association
            — unites alumni of Holy Child School and Holy Child College
            worldwide. We foster connection, mentorship, and a shared pride in
            our heritage across generations and borders.
          </p>

          <p className='about-body'>
            From fundraising to reunions and volunteering, NUHOPSA exists to
            ensure that the Holy Child spirit lives on long after graduation.
          </p>

          {/* Stat grid */}
          <div className='about-stats'>
            {stats.map((s) => (
              <div key={s.lbl} className='about-stat-tile'>
                <span className='about-stat-num'>{s.num}</span>
                <span className='about-stat-lbl'>{s.lbl}</span>
              </div>
            ))}
          </div>

          <div className='about-actions'>
            <Link href='/about' className='btn-primary'>
              Our story
            </Link>
            <Link href='/register' className='btn-outline'>
              Join NUHOPSA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
