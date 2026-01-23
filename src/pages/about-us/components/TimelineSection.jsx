import { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.timeline-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef?.current) observer?.observe(sectionRef?.current);

        return () => observer?.disconnect();
    }, []);

    const milestones = [
        {
            year: '2019',
            title: 'Foundation',
            description: 'Elephantum founded with a vision to revolutionize elephant tourism. First partnership established with Elephant Nature Park in Thailand.',
            icon: 'Sparkles',
            impact: '1 sanctuary partner'
        },
        {
            year: '2020',
            title: 'Community Expansion',
            description: 'Launched community empowerment program, creating 50+ sustainable jobs for local elephant caretakers and guides.',
            icon: 'Users',
            impact: '50+ jobs created'
        },
        {
            year: '2021',
            title: 'Conservation Milestone',
            description: 'Contributed $500,000 to elephant habitat restoration and anti-poaching initiatives across partner sanctuaries.',
            icon: 'TreePine',
            impact: '$500K conservation fund'
        },
        {
            year: '2022',
            title: 'Network Growth',
            description: 'Expanded to 5 certified sanctuaries across Asia. Launched educational programs reaching 10,000+ travelers.',
            icon: 'Globe',
            impact: '5 sanctuary partners'
        },
        {
            year: '2023',
            title: 'Research Partnership',
            description: 'Partnered with wildlife research institutions to study elephant cognition and social behavior in natural habitats.',
            icon: 'BookOpen',
            impact: '3 research collaborations'
        },
        {
            year: '2024',
            title: 'Impact Recognition',
            description: 'Awarded "Ethical Tourism Pioneer" by International Wildlife Conservation Society. 15,000+ travelers transformed.',
            icon: 'Award',
            impact: '15K+ travelers'
        },
        {
            year: '2025',
            title: 'Global Standards',
            description: 'Established industry-leading ethical tourism certification program adopted by sanctuaries worldwide.',
            icon: 'Shield',
            impact: 'Industry certification'
        },
        {
            year: '2026',
            title: 'Future Vision',
            description: 'Expanding to African elephant conservation. Goal: 20 sanctuary partners and $2M annual conservation contribution.',
            icon: 'Rocket',
            impact: 'Global expansion'
        }
    ];

    return (
        <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Our <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                        From a single sanctuary partnership to a global conservation movement. Every milestone represents lives protected and communities empowered.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 lg:transform lg:-translate-x-1/2"></div>

                    <div className="space-y-8 md:space-y-12 lg:space-y-16">
                        {milestones?.map((milestone, index) => (
                            <div
                                key={index}
                                className={`timeline-item relative transition-all duration-700 opacity-0 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'
                                    }`}
                                style={{ transform: index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)' }}
                            >
                                <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
                                    <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center lime-glow z-10 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                                        }`} style={{ background: 'rgba(50, 205, 50, 0.1)', border: '2px solid var(--color-primary)' }}>
                                        <Icon name={milestone?.icon} size={24} color="var(--color-primary)" className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                    </div>

                                    <div className={`flex-1 min-w-0 p-6 md:p-8 rounded-2xl ${index % 2 === 0 ? 'lg:order-1 lg:text-right' : 'lg:order-2'
                                        }`} style={{ background: 'rgba(26, 26, 26, 0.6)', border: '1px solid rgba(50, 205, 50, 0.2)', backdropFilter: 'blur(10px)' }}>
                                        <div className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4" style={{ background: 'rgba(50, 205, 50, 0.2)', color: 'var(--color-primary)' }}>
                                            {milestone?.year}
                                        </div>
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-foreground" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                            {milestone?.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                            {milestone?.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-primary">
                                            <Icon name="TrendingUp" size={16} />
                                            <span>{milestone?.impact}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;