import { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.mission-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef?.current) observer?.observe(sectionRef?.current);

        return () => observer?.disconnect();
    }, []);

    const missionPillars = [
        {
            icon: 'Shield',
            title: 'Elephant Protection',
            description: 'Every journey contributes directly to elephant conservation efforts. We partner exclusively with sanctuaries that prioritize animal welfare, natural habitats, and ethical interaction protocols. Zero tolerance for exploitation.'
        },
        {
            icon: 'Users',
            title: 'Community Empowerment',
            description: 'Local communities are the true guardians of elephants. We ensure fair wages, sustainable employment, and cultural preservation. Your travel investment becomes their economic foundation for protecting wildlife.'
        },
        {
            icon: 'Sparkles',
            title: 'Transformative Experiences',
            description: 'Witness elephant intelligence in their natural environment. Our curated encounters create profound connections that inspire lifelong conservation advocacy. Education through authentic immersion.'
        },
        {
            icon: 'Globe',
            title: 'Global Impact',
            description: 'Building a worldwide network of ethical tourism that sets new industry standards. Every booking funds research, habitat restoration, and anti-poaching initiatives across elephant territories.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Our <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Four pillars guide every decision we make, ensuring that elephant welfare and community prosperity remain at the heart of everything we do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {missionPillars?.map((pillar, index) => (
                        <div
                            key={index}
                            className="mission-card p-6 md:p-8 lg:p-10 rounded-2xl transition-all duration-700 opacity-0 hover:lime-glow-hover"
                            style={{
                                transform: 'translateY(30px)',
                                background: 'rgba(26, 26, 26, 0.6)',
                                border: '1px solid rgba(50, 205, 50, 0.2)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center lime-glow" style={{ background: 'rgba(50, 205, 50, 0.1)' }}>
                                    <Icon name={pillar?.icon} size={24} color="var(--color-primary)" className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                        {pillar?.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {pillar?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;