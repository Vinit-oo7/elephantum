import { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const CertificationSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const badges = entry.target.querySelectorAll('.cert-badge');
                    badges.forEach((badge, index) => {
                        setTimeout(() => {
                            badge.style.opacity = '1';
                            badge.style.transform = 'scale(1)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.2 });

        if (sectionRef?.current) observer?.observe(sectionRef?.current);

        return () => observer?.disconnect();
    }, []);

    const certifications = [
        {
            icon: 'Award',
            title: 'Wildlife Conservation Certified',
            issuer: 'International Wildlife Conservation Society',
            year: '2024',
            description: 'Recognized for outstanding commitment to elephant welfare and habitat protection'
        },
        {
            icon: 'Shield',
            title: 'Ethical Tourism Partner',
            issuer: 'Global Sustainable Tourism Council',
            year: '2023',
            description: 'Certified for maintaining highest standards in responsible wildlife tourism'
        },
        {
            icon: 'Users',
            title: 'Community Supported',
            issuer: 'Fair Trade Tourism Alliance',
            year: '2023',
            description: 'Verified fair wages and sustainable employment practices for local communities'
        },
        {
            icon: 'Leaf',
            title: 'Carbon Neutral Operations',
            issuer: 'Climate Action Network',
            year: '2024',
            description: 'Offset 100% of operational carbon footprint through verified conservation projects'
        },
        {
            icon: 'BookOpen',
            title: 'Educational Excellence',
            issuer: 'Wildlife Education Foundation',
            year: '2025',
            description: 'Awarded for transformative conservation education programs'
        },
        {
            icon: 'Heart',
            title: 'Animal Welfare Champion',
            issuer: 'Asian Elephant Specialist Group',
            year: '2025',
            description: 'Recognized for zero-tolerance policy on elephant exploitation'
        }
    ];

    return (
        <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Certifications & <span className="text-primary">Recognition</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our commitment to ethical practices validated by leading conservation and tourism organizations worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certifications?.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-badge p-6 md:p-8 rounded-2xl transition-all duration-700 opacity-0 hover:lime-glow-hover"
                            style={{
                                transform: 'scale(0.9)',
                                background: 'rgba(26, 26, 26, 0.6)',
                                border: '1px solid rgba(50, 205, 50, 0.2)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div className="flex items-start gap-4 mb-4 md:mb-6">
                                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center lime-glow" style={{ background: 'rgba(50, 205, 50, 0.1)' }}>
                                    <Icon name={cert?.icon} size={24} color="var(--color-primary)" className="md:w-7 md:h-7" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base md:text-lg font-bold mb-1 text-foreground line-clamp-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                        {cert?.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-primary font-medium">
                                        {cert?.year}
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed line-clamp-2">
                                {cert?.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Icon name="CheckCircle" size={14} color="var(--color-primary)" />
                                <span className="line-clamp-1">{cert?.issuer}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 md:mt-12 lg:mt-16 text-center">
                    <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                        All certifications independently verified and renewed annually
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <div className="px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.2)', color: 'var(--color-primary)' }}>
                            Zero Elephant Riding
                        </div>
                        <div className="px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.2)', color: 'var(--color-primary)' }}>
                            Natural Habitat Only
                        </div>
                        <div className="px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.2)', color: 'var(--color-primary)' }}>
                            Fair Trade Certified
                        </div>
                        <div className="px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'rgba(50, 205, 50, 0.1)', border: '1px solid rgba(50, 205, 50, 0.2)', color: 'var(--color-primary)' }}>
                            Community Empowered
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;