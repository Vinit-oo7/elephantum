import { Link } from 'react-router-dom';
import Icon from './AppIcon';

const Footer = () => {
    const currentYear = new Date()?.getFullYear();

    const navigationLinks = [
        { path: '/homepage', label: 'Home' },
        { path: '/about-us', label: 'About Us' },
        { path: '/about-them', label: 'About Them' },
        { path: '/locations', label: 'Locations' },
        { path: '/experience', label: 'Experience' },
        { path: '/contact', label: 'Contact' }
    ];

    const conservationLinks = [
        { label: 'Our Mission', href: '#mission' },
        { label: 'Impact Metrics', href: '#impact' },
        { label: 'Partner Sanctuaries', href: '#sanctuaries' },
        { label: 'Conservation Reports', href: '#reports' }
    ];

    const resourceLinks = [
        { label: 'Elephant Intelligence', href: '#intelligence' },
        { label: 'Ethical Tourism Guide', href: '#guide' },
        { label: 'Travel Tips', href: '#tips' },
        { label: 'FAQ', href: '#faq' }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: 'Facebook', href: '#facebook' },
        { name: 'Instagram', icon: 'Instagram', href: '#instagram' },
        { name: 'Twitter', icon: 'Twitter', href: '#twitter' },
        { name: 'Youtube', icon: 'Youtube', href: '#youtube' }
    ];

    const certificationBadges = [
        'Wildlife Conservation Certified',
        'Ethical Tourism Partner',
        'Community Supported'
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-grid">
                    <div>
                        <h3 className="footer-section-title">Elephantum</h3>
                        <p className="footer-description">
                            Travel where elephants roam free. We create transformative conservation experiences that protect elephant welfare while supporting local communities.
                        </p>
                        <div className="footer-social">
                            {socialLinks?.map((social) => (
                                <a
                                    key={social?.name}
                                    href={social?.href}
                                    className="footer-social-link"
                                    aria-label={social?.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon name={social?.icon} size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Navigation</h3>
                        <div className="footer-links">
                            {navigationLinks?.map((link) => (
                                <Link
                                    key={link?.path}
                                    to={link?.path}
                                    className="footer-link"
                                >
                                    {link?.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Conservation</h3>
                        <div className="footer-links">
                            {conservationLinks?.map((link) => (
                                <a
                                    key={link?.label}
                                    href={link?.href}
                                    className="footer-link"
                                >
                                    {link?.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Resources</h3>
                        <div className="footer-links">
                            {resourceLinks?.map((link) => (
                                <a
                                    key={link?.label}
                                    href={link?.href}
                                    className="footer-link"
                                >
                                    {link?.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Elephantum. All rights reserved. Protecting elephants through ethical tourism.
                    </p>
                    <div className="footer-badges">
                        {certificationBadges?.map((badge) => (
                            <span key={badge} className="footer-badge">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;