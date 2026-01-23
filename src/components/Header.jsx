import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './AppIcon.jsx';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();

    const navigationItems = [
        { path: '/homepage', label: 'Home' },
        { path: '/about-us', label: 'About Us' },
        { path: '/about-them', label: 'About Them' },
        { path: '/locations', label: 'Locations' },
        { path: '/experience', label: 'Experience' },
        { path: '/contact', label: 'Contact' }
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 0,
                end: 99999,
                onUpdate: () => {
                    const currentScroll = window.scrollY;

                    if (currentScroll > lastScrollY && currentScroll > 80) {
                        gsap.to(headerRef.current, {
                            y: '-100%',
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    } else {
                        gsap.to(headerRef.current, {
                            y: '0%',
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    }

                    lastScrollY = currentScroll;
                }
            });

            gsap.to(headerRef.current, {
                backgroundColor: 'rgba(0,0,0,0.75)',
                scrollTrigger: {
                    start: 80,
                    toggleActions: 'play reverse play reverse'
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <header ref={headerRef} className="header-container">
            <div className="header-content">
                {/* Logo */}
                <Link to="/homepage" className="header-logo">
                    <Icon name="Leaf" size={24} color="#a3e635" />
                    <span>Elephantum</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    {navigationItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`header-nav-link ${location.pathname === item.path ? 'active' : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Auth Buttons (Desktop) */}
                <div className="header-auth">
                    <Link to="/login" className="btn-login">Login</Link>
                    <Link to="/signup" className="btn-signup">Sign Up</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="header-mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="header-mobile-menu">
                    <nav className="header-mobile-nav">
                        {navigationItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`header-mobile-link ${location.pathname === item.path ? 'active' : ''
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="header-mobile-auth">
                        <Link to="/login" className="btn-login">Login</Link>
                        <Link to="/signup" className="btn-signup">Sign Up</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
