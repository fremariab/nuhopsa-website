import Link from 'next/link';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: '80th Anniversary', href: '/anniversary' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Donate', href: '/donate' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer-root'>
      <div className='section-container'>
        {/* Top grid */}
        <div className='footer-grid'>
          {/* Brand col */}
          <div className='footer-brand-col'>
            <span className='footer-logo'>NUHOPSA</span>
            <p className='footer-tagline'>
              National Union of Holy Child Past Students Association —
              connecting alumni of Holy Child School and College across the
              globe.
            </p>
            {/* Social icons */}
            <div className='footer-socials'>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer-social-btn'
                  aria-label={s.label}
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className='footer-links-col'>
            <span className='footer-col-heading'>Quick links</span>
            <ul className='footer-link-list'>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className='footer-link'>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className='footer-contact-col'>
            <span className='footer-col-heading'>Get in touch</span>
            <ul className='footer-link-list'>
              <li>
                <a
                  href='mailto:website4nuhopsa@gmail.com'
                  className='footer-link'
                >
                  website4nuhopsa@gmail.com
                </a>
              </li>
            </ul>

            {/* 80th anniversary callout */}
            <div className='footer-anniv-card'>
              <span className='footer-anniv-eyebrow'>Now celebrating</span>
              <p className='footer-anniv-text'>
                80th Anniversary of Holy Child School & College
              </p>
              <Link href='/anniversary' className='footer-anniv-link'>
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='footer-bottom'>
          <span className='footer-copy'>
            © {year} NUHOPSA. All rights reserved.
          </span>
          <div className='footer-bottom-links'>
            <Link href='/privacy' className='footer-bottom-link'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='footer-bottom-link'>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
