import React from 'react';
import './Footer.css';

function Footer({ contactEmail, phoneNumber, socialMediaLinks }) {
  return (
    <footer className="footer" aria-label="Footer">
      <address aria-label="Contact Information">
        Contact us: <a href={`mailto:${contactEmail}`}>{contactEmail}</a> | {phoneNumber}
      </address>
      <nav aria-label="Social Media Links">
        Follow us: 
        {socialMediaLinks.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.url} aria-label={link.name}>
              {link.name}
            </a>
            {index < socialMediaLinks.length - 1 && ' | '}
          </React.Fragment>
        ))}
      </nav>
    </footer>
  );
}

Footer.defaultProps = {
  contactEmail: 'bloomaway@gmail.com',
  phoneNumber: '+254 713 567 124',
  socialMediaLinks: [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
  ],
};

export default Footer;